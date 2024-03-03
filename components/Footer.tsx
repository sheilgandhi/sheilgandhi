import { useRouter } from "next/router";

const Footer: React.FC = () => {
  const router = useRouter();

  const handleClick = (page: string) => {
    const pathname = `/${page}`;
    if (router.pathname !== pathname) {
      router.push(pathname);
    }
  };

  return (
    <div className="sticky bottom-0 bg-white border-2 border-black grid grid-cols-4">
      <button
        onClick={() => handleClick("about")}
        className={`footer-button ${
          router.pathname === "/about" ? "footer-button-active" : ""
        }`}
      >
        ABOUT
      </button>
      <button
        onClick={() => handleClick("projects")}
        className={`footer-button ${
          router.pathname === "/projects" ? "footer-button-active" : ""
        }`}
      >
        PROJECTS
      </button>
      <button
        onClick={() => handleClick("work")}
        className={`footer-button ${
          router.pathname === "/work" ? "footer-button-active" : ""
        }`}
      >
        WORK
      </button>
      <button
        onClick={() => handleClick("connect")}
        className={`footer-button ${
          router.pathname === "/connect" ? "footer-button-active" : ""
        }`}
      >
        CONNECT
      </button>
    </div>
  );
};

export default Footer;
