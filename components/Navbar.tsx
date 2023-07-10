import React, { useState } from "react";
import { Navbar, Text } from "@nextui-org/react";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("about");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
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
            href="#"
            isActive={activeLink === "about"}
            onClick={() => handleLinkClick("about")}
          >
            About Me
          </Navbar.Link>
          <Navbar.Link
            href="#"
            isActive={activeLink === "work"}
            onClick={() => handleLinkClick("work")}
          >
            My Work
          </Navbar.Link>
          <Navbar.Link
            href="#"
            isActive={activeLink === "projects"}
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
