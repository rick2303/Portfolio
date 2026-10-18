import { motion as Motion, useScroll, useSpring } from "framer-motion";

// Barra de progreso de scroll fija bajo el navbar.
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60] bg-light-secondary dark:bg-dark-secondary"
      style={{ scaleX }}
    />
  );
}

export default ScrollProgress;
