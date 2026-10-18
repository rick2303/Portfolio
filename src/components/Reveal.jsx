import { motion as Motion, useReducedMotion } from "framer-motion";

// Reveal basado en Framer Motion con soporte de stagger.
// Uso: <Reveal>...</Reveal> o <Reveal delay={0.1}>...</Reveal>
export function Reveal({ children, delay = 0, y = 24, className = "", once = true }) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <Motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </Motion.div>
  );
}

// Contenedor que revela sus hijos en cascada.
export function RevealGroup({ children, className = "", stagger = 0.08 }) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <Motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </Motion.div>
  );
}

export function RevealItem({ children, className = "", y = 24 }) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <Motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
        },
      }}
    >
      {children}
    </Motion.div>
  );
}

export default Reveal;
