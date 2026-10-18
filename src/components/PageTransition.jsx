import { motion as Motion, useReducedMotion } from "framer-motion";

// Entrada suave para cada página.
function PageTransition({ children }) {
  const reduced = useReducedMotion();

  if (reduced) return children;

  return (
    <Motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </Motion.div>
  );
}

export default PageTransition;
