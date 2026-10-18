import { FaApple, FaGooglePlay } from "react-icons/fa";

// Ícono según la tienda (por el label definido en data/projects.js).
export function StoreIcon({ label, className = "w-4 h-4" }) {
  const Icon = label === "App Store" ? FaApple : FaGooglePlay;
  return <Icon className={className} aria-hidden="true" />;
}

// Chips "Disponible en" para cards: solo indicativos, el enlace real está en el modal.
function StoreBadges({ stores, className = "" }) {
  if (!stores?.length) return null;

  return (
    <div className={`flex flex-wrap gap-1.5 ${className}`}>
      {stores.map((store) => (
        <span
          key={store.url}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-light-primary text-white dark:bg-white dark:text-dark-primary"
        >
          <StoreIcon label={store.label} className="w-3 h-3" />
          {store.label}
        </span>
      ))}
    </div>
  );
}

export default StoreBadges;
