import React, { useState } from "react";
import { Navbar, Text } from "@nextui-org/react";

interface NavBarProps {
  active_link: string;
  setActiveLink(value: string): void;
}

const NavBar: React.FC<NavBarProps> = ({ active_link, setActiveLink }) => {
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    const section = document.getElementById(link);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Navbar isBordered variant="floating">
      <div className="hidden sm:flex">
        <Navbar.Brand>
          <Text b color="inherit">
            sheil gandhi
          </Text>
        </Navbar.Brand>
      </div>
      <div className="flex w-full justify-center sm:w-fit">
        <Navbar.Content>
          <Navbar.Link
            href="#about-section"
            isActive={active_link === "about"}
            onClick={() => handleLinkClick("about")}
          >
            About Me
          </Navbar.Link>
          <Navbar.Link
            href="#work-section"
            isActive={active_link === "work"}
            onClick={() => handleLinkClick("work")}
          >
            My Work
          </Navbar.Link>
          <Navbar.Link
            href="#projects-section"
            isActive={active_link === "projects"}
            onClick={() => handleLinkClick("projects")}
          >
            My Projects
          </Navbar.Link>
        </Navbar.Content>
      </div>
    </Navbar>
  );
};

export default NavBar;
