import { useRouter } from "next/router";
import { motion } from "framer-motion";

interface HomeScreenBoxProps {
  name: string;
  isRectangle: boolean;
}

const HomeScreenBox: React.FC<HomeScreenBoxProps> = ({ name, isRectangle }) => {
  const router = useRouter();

  const handleAboutClick = () => {
    router.push(`/${name}`);
  };
  return (
    <motion.div
      className={`${
        isRectangle ? "w-3/5" : "w-2/5 h-1/2"
      } border border-white center text-center`}
      onClick={handleAboutClick}
      whileHover={{
        cursor: "pointer",
        color: "#000",
        backgroundColor: "#f9ef2a",
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-xl md:text-3xl">{name.toUpperCase()}</h1>
    </motion.div>
  );
};

export default HomeScreenBox;
