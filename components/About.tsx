import { Avatar, Badge, Button, Text, Tooltip } from "@nextui-org/react";
import Head from "next/head";
import React from "react";
import Socials from "./Socials";

interface AboutProps {
  setActiveLink(value: string): void;
}

const URL =
  "https://miro.medium.com/v2/resize:fit:2400/1*K2oMFnx2zKl-nF5kuiDaIg.jpeg";

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
      className="flex items-center justify-evenly mx-8 my-4 py-16"
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
      <Socials flex_direction="col" />
      <div className="flex flex-wrap flex-col items-start max-w-md">
        <Text h1 size={40} weight="bold">
          Hi, I&apos;m Sheil
        </Text>
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
            📧 Email Me
          </Text>
          <Tooltip content="Send Email">
            <button
              className="bg-purple-500 p-2 rounded-xl"
              onClick={sendEmail}
            >
              <Text h2 size={20} weight="bold" color="white">
                Get in Touch!
              </Text>
            </button>
          </Tooltip>
        </div>
        <button className="flex items-center pt-8" onClick={scroll}>
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
      <div className="hidden sm:flex">
        <Avatar src={URL} alt="sheil" size="xl" />
      </div>
    </div>
  );
};

export default About;
