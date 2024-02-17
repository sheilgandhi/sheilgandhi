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
    <div className="bg-black text-white h-screen">
      <AnimatePresence mode="popLayout">
        <motion.div
          key="home"
          initial="out"
          animate="in"
          exit="out"
          variants={pageTransition}
          className="flex flex-col bg-black text-white"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ScreenPage;
