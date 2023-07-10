import React from "react";

interface FooterProps {
  flex_direction: "row" | "col";
}

const Socials: React.FC<FooterProps> = ({ flex_direction }) => {
  return (
    <div
      className={`hidden sm:flex flex-${flex_direction} justify-evenly items-center text-black`}
    >
      <a
        href="https://www.linkedin.com/in/sheilgandhi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        href="https://github.com/sheilgandhi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
      </a>
      <a href="/path/to/your/cv.pdf" target="_blank" rel="noopener noreferrer">
        <i className="fas fa-file-pdf"></i>
      </a>
    </div>
  );
};

export default Socials;
