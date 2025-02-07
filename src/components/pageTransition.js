import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const isMobile = window.innerWidth<=768;
const pageVariants = {
  initial: { opacity: 0, x: "100vw" },  // Start off-screen right
  animate: { opacity: 1, x: 0, transition: { duration: isMobile? 0.25:0.5 } },  // Slide in
  exit: { opacity: 0, x: "-100vw", transition: { duration: isMobile? 0.25:0.5  } }  // Slide out left
};

const PageTransition = ({ children }) => {
  const location = useLocation(); // Detects current route

  return (
    <motion.div
      key={location.pathname}  // ✅ Forces re-animation on route change & refresh
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
