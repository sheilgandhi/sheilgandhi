import Marquee from "@/components/Marquee";
import { AnimatePresence, motion } from "framer-motion";
import HomeScreenBox from "@/components/HomeScreenBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faTimes } from "@fortawesome/free-solid-svg-icons";

const MARQUEE_TOP = [
  "SHEIL GANDHI",
  "WEBSITE DEVELOPER",
  "APP DEVELOPER",
  "DESIGNER",
  "LEADER",
];
const MARQUEE_BOTTOM = [
  "WEB DESIGN",
  "APP DEVELOPMENT",
  "GRAPHIC DESIGN",
  "WEB DEVELOPMENT",
  "STRATEGY",
];

const Home: React.FC = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    out: {
      opacity: 0,
      y: "-100vh",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence mode="popLayout">
      <div className="col bg-black text-white">
        <Marquee speed="Slow">
          {MARQUEE_TOP.map((text, index) => (
            <div key={text} className="center gap-4">
              <span className="text-xl">{text}</span>
              {MARQUEE_TOP.length - 1 !== index && (
                <FontAwesomeIcon icon={faTimes} />
              )}
            </div>
          ))}
        </Marquee>

        <motion.div
          key="home"
          initial="out"
          animate="in"
          exit="out"
          variants={pageTransition}
          className="flex flex-wrap w-full h-[calc(100vh-4rem)] border"
        >
          <HomeScreenBox name="about" isRectangle />
          <HomeScreenBox name="connect" isRectangle={false} />
          <HomeScreenBox name="work" isRectangle={false} />
          <HomeScreenBox name="projects" isRectangle />
        </motion.div>

        <Marquee speed="Fast">
          {MARQUEE_BOTTOM.map((text, index) => (
            <div key={text} className="center gap-4">
              <span className="text-xl">{text}</span>
              {MARQUEE_BOTTOM.length - 1 !== index && (
                <FontAwesomeIcon icon={faCircleNotch} />
              )}
            </div>
          ))}
        </Marquee>
      </div>
    </AnimatePresence>
  );
};

export default Home;
