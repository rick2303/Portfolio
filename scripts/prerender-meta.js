// Post-build: genera un HTML por ruta con su propio <title>, description, canonical y Open Graph,
// para que Google y las vistas previas de LinkedIn/WhatsApp no vean siempre los metadatos del home.
// También genera 404.html (noindex) y el sitemap con la fecha del build.
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const SITE = "https://frankyinteriano.com";
const dist = resolve(dirname(fileURLToPath(import.meta.url)), "../dist");
const shell = readFileSync(resolve(dist, "index.html"), "utf8");

const routes = [
  {
    path: "/projects",
    file: "projects.html",
    title: "Projects | Franky Interiano",
    description:
      "Production apps on the App Store and Google Play, fintech platforms with Stripe and KYC/AML, multi-tenant SaaS and client websites built by Franky Interiano.",
  },
  {
    path: "/experience",
    file: "experience.html",
    title: "Experience | Franky Interiano",
    description:
      "2.5+ years in banking and payments: 24/7 core banking production support, cross-border payments and regulated onboarding. Education, certifications and references.",
  },
  {
    path: "/contact",
    file: "contact.html",
    title: "Contact | Franky Interiano",
    description:
      "Get in touch with Franky Interiano, bilingual (EN/ES) software engineer in Miami focused on fintech and production support.",
  },
];

const escape = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function withMeta(html, { path, title, description }) {
  const url = SITE + path;
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${escape(title)}</title>`)
    .replace(/(<meta name="description"\s+content=")[^"]*"/, `$1${escape(description)}"`)
    .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${url}"`)
    .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${url}"`)
    .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${escape(title)}"`)
    .replace(/(<meta property="og:description"\s+content=")[^"]*"/, `$1${escape(description)}"`)
    .replace(/(<meta name="twitter:title" content=")[^"]*"/, `$1${escape(title)}"`)
    .replace(/(<meta name="twitter:description" content=")[^"]*"/, `$1${escape(description)}"`);
}

for (const route of routes) {
  writeFileSync(resolve(dist, route.file), withMeta(shell, route));
}

const notFound = shell
  .replace(/<title>[^<]*<\/title>/, "<title>Page not found | Franky Interiano</title>")
  .replace('<meta name="robots" content="index, follow" />', '<meta name="robots" content="noindex" />')
  .replace(/\s*<link rel="canonical"[^>]*>/, "");
writeFileSync(resolve(dist, "404.html"), notFound);

const today = new Date().toISOString().slice(0, 10);
const urls = [{ path: "/", priority: "1.0" }, ...routes.map((r) => ({ path: r.path, priority: "0.8" }))];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE}${u.path === "/" ? "/" : u.path}</loc>
    <lastmod>${today}</lastmod>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;
writeFileSync(resolve(dist, "sitemap.xml"), sitemap);

console.log(`prerender-meta: ${routes.length} rutas, 404.html y sitemap.xml (${today})`);
