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
      <span
        onClick={() => handleClick("about")}
        className={`footer-button ${
          router.pathname === "/about" ? "bg-yellow-400 text-black" : ""
        }`}
      >
        ABOUT
      </span>
      <span
        onClick={() => handleClick("projects")}
        className={`footer-button ${
          router.pathname === "/projects" ? "bg-yellow-400 text-black" : ""
        }`}
      >
        PROJECTS
      </span>
      <span
        onClick={() => handleClick("work")}
        className={`footer-button ${
          router.pathname === "/work" ? "bg-yellow-400 text-black" : ""
        }`}
      >
        WORK
      </span>
      <span
        onClick={() => handleClick("connect")}
        className={`footer-button ${
          router.pathname === "/connect" ? "bg-yellow-400 text-black" : ""
        }`}
      >
        CONNECT
      </span>
    </div>
  );
};

export default Footer;
