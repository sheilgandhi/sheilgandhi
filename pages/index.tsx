import { Button } from "@nextui-org/react";
import About from "components/About";
import NavBar from "components/Navbar";
import Projects from "components/Projects";
import Work from "components/Work";
import Head from "next/head";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Sheil Gandhi</title>
      </Head>
      <NavBar />
      <About id="about-section" />
      <Work id="work-section" />
      <Projects id="projects-section" />
    </div>
  );
};

export default Home;
