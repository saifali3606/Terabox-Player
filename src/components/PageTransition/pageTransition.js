import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const PageTransition2 = ({ children }) => {
  const location = useLocation();

  // Detect screen size: Mobile screens get a different duration
  const isMobile = window.innerWidth <= 768;  

  const pageVariants = {
    initial: { opacity: 0, x: "-100vw" },  
    animate: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: isMobile ? 0.3 : 0.5, ease: "easeOut" }  // ✅ Mobile = 0.3s, Desktop = 0.5s
    },
    exit: { 
      opacity: 0, 
      x: "-100vw", 
      transition: { duration: isMobile ? 0.3 : 0.5, ease: "easeInOut" } 
    }
  };

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

export default PageTransition2;
