import { AnimatePresence, motion } from "framer-motion";

interface ScreenPageProps {
  children: React.ReactNode;
}

const ScreenPage: React.FC<ScreenPageProps> = ({ children }) => {
  const pageTransition = {
    in: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
    out: {
      opacity: 0,
      y: "-100vh",
      scale: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key="home"
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        className="col bg-white text-black"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default ScreenPage;
