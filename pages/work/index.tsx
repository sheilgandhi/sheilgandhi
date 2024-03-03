import Back from "@/components/Back";
import Footer from "@/components/Footer";
import ScreenPage from "@/components/ScreenPage";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Work: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" h-[calc(100vh-50px)]">
      <ScreenPage>
        <div className="col gap-16 md:h-screen p-4 md:px-16">
          <Back />
          <h1 className="text-4xl">W O R K</h1>
          <div className="col md:grid md:grid-cols-2 items-start">
            <div>
              <h2 className="text-6xl">Scholar of Software.</h2>
              <h2 className="text-6xl">Habitual of Heurisitics.</h2>
              <h2 className="text-6xl">Digital Leader.</h2>
              <p>
                Still not sure? Check out my CV{" "}
                <i
                  onClick={() => window.open("/Sheil_CV.pdf", "_blank")}
                  className="cursor-pointer underline"
                >
                  here
                </i>
                .
              </p>
            </div>
            <div className="col justify-between border-8 border-yellow-300 w-full">
              {isOpen ? (
                <div className="inset-0 bg-black center text-white">
                  <div className="p-2 rounded shadow-lg animate-slide-down">
                    <h2 className="text-2xl font-bold">Job Description</h2>
                    <p>
                      Revamped client interactions with industry giants like
                      Papa John&apos;s, Wild Wing, and BurgerFuel through the
                      strategic deployment of requested functionalities
                      leveraging React, PHP, and MySQL. Spearheaded the seamless
                      release of over 20 applications to major platforms such as
                      the Apple App Store and Google Play Store using Fastlane
                      for automated app deployment. Pioneered the integration of
                      Apple, Facebook, and Google Single Sign-On features across
                      React Native and React platforms, while also optimizing
                      operations through the automation of QR code generation
                      and Single Sign-On scaling. Innovatively fortified
                      customer-facing products with essential security measures
                      including Google ReCaptcha and Cloudflare Turnstile.
                      Delivered unparalleled user experience and system
                      reliability through meticulous development practices
                      including custom hooks, components, and comprehensive Jest
                      testing, ensuring a flawless 100% code coverage.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="col p-2 bg-black text-white">
                  <div className="flex justify-between items-start">
                    <div className="col">
                      <h2 className="text-4xl md:text-6xl">MOBI HQ</h2>
                      <h3 className="text-2xl md:text-3xl">
                        Digital Hospitality Platform
                      </h3>
                      <p>2021 - Current</p>
                      <p className="text-xl md:text-3xl">Software Engineer</p>
                    </div>
                  </div>
                </div>
              )}
              <div
                className={`${
                  !isOpen ? "bg-yellow-300 text-black" : "bg-black text-white"
                } between px-2 cursor-pointer`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <p className="font-bold">JOB DESCRIPTION</p>
                <FontAwesomeIcon
                  icon={isOpen ? faMinus : faPlus}
                  className="hover:animate-spin"
                />
              </div>
            </div>
          </div>
          <div className="border-8 border-black text-black bg-yellow-300 p-4 center">
            &quot;Compound interest is the eighth wonder of the world. He who
            understands it, earns it … he who doesn&apos;t … pays it.&quot; -
            Albert Einstein
          </div>
        </div>
      </ScreenPage>
      <Footer />
    </div>
  );
};

export default Work;
