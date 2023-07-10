import { Avatar, Badge, Button, Text, Tooltip } from "@nextui-org/react";
import Head from "next/head";
import React from "react";
interface AboutProps {
  setActiveLink(value: string): void;
}

const URL =
  "https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-xJOH-RK4LeysQA_4qQwazPDGr7iAbfzGhHIRckksBkVRhEgVUV0kAXV01k4ayP_4U2pJf9_sBSJ0WUJSZSxkRsvTCb=w3430-h7616";

const skills = [
  "React",
  "React Native",
  "Next.js",
  "PHP",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "MySQL",
  "Node.js",
  "Twig",
];

const hobbies = [
  "Cricket 🏏",
  "Football ⚽️",
  "Running 🏃🏽‍♂️",
  "Gym 🏋🏽‍♂️",
  "Self Development ✍🏽",
  "Travel ✈️",
];

const About: React.FC<AboutProps> = ({ setActiveLink }) => {
  const sendEmail = () => {
    const recipient = "sheilgandhi24@hotmail.com";
    const subject = "Hello! I saw your Porfolio";
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}`;
    window.location.href = mailtoUrl;
  };

  const scroll = () => {
    setActiveLink("work");
    const section = document.getElementById("work");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className="flex items-center justify-start mx-8 my-4 py-16 max-w-full"
      id="about"
      tabIndex={0}
      onFocus={() => setActiveLink("about")}
    >
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>
      <div className="flex flex-wrap flex-col items-start max-w-full">
        <div className="flex">
          <Avatar src={URL} alt="sheil" size="xl" className="mr-2" />
          <Text h1 size={40} weight="bold">
            Hi, I&apos;m Sheil
          </Text>
        </div>
        <Text h2 size={18} weight="light">
          I am a Frontend Developer with experience in cyber security.
        </Text>
        <div className="flex flex-col pt-4">
          <Text>Skills:</Text>
          <div className="flex-wrap">
            {skills.map((skill: string) => (
              <Badge key={skill} color="primary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex flex-col pt-4">
          <Text>Interests:</Text>
          <div className="flex-wrap">
            {hobbies.map((hobby: string) => (
              <Badge key={hobby} color="success">
                {hobby}
              </Badge>
            ))}
          </div>
        </div>
        <div className="py-4">
          <Text h2 size={22} weight="bold">
            Get in Touch and Check Out My Links
          </Text>
          <Badge color="secondary" onClick={sendEmail}>
            {" "}
            📧 Email Me
          </Badge>
          <Badge
            color="primary"
            onClick={() =>
              window.open("https://www.linkedin.com/in/sheilgandhi")
            }
          >
            {" "}
            <i className="fab fa-linkedin" /> LinkedIn
          </Badge>
          <Badge
            onClick={() => window.open("https://www.github.com/sheilgandhi")}
          >
            {" "}
            <i className="fab fa-github" /> GitHub
          </Badge>
          <Badge
            color="error"
            onClick={() =>
              window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
            }
          >
            {" "}
            <i className="fas fa-file-pdf" /> Resume
          </Badge>
        </div>
        <button className="flex items-center pt-4" onClick={scroll}>
          <Text h2 size={16}>
            Scroll down
          </Text>
          <svg
            className="w-4 h-4 text-violet-500 mt-2 animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default About;
