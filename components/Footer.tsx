import React from "react";
import Socials from "./Socials";
import { Text } from "@nextui-org/react";

interface FooterProps {
  setActiveLink(value: string): void;
}

const Footer: React.FC<FooterProps> = ({ setActiveLink }) => {
  const scroll = () => {
    setActiveLink("about");
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className="w-full justify-center items-center pb-4"
      onFocus={() => setActiveLink("projects")}
    >
      <Socials flex_direction="row" />
      <button
        className="flex w-full justify-center items-center"
        onClick={scroll}
      >
        <Text h2 size={16}>
          Back to Top
        </Text>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-violet-500 mt-2 animate-bounce"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Footer;
