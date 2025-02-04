import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, x: "-100vw" },  // Start position (off-screen left)
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },  // Smooth slide-in
  exit: { opacity: 0, x: "100vw", transition: { duration: 0.5 } }  // Slide out right
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
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
