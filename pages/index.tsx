import About from "../components/About";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Projects from "../components/Projects";
import Work from "../components/Work";
import Head from "next/head";
import { useState } from "react";

const Home: React.FC = () => {
  const [active_link, setActiveLink] = useState("about");

  return (
    <div className="flex flex-col">
      <Head>
        <title>Sheil Gandhi</title>
      </Head>
      <NavBar active_link={active_link} setActiveLink={setActiveLink} />
      <About setActiveLink={setActiveLink} />
      <Work setActiveLink={setActiveLink} />
      <Projects setActiveLink={setActiveLink} />
      <Footer setActiveLink={setActiveLink} />
    </div>
  );
};

export default Home;
