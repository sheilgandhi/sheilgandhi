import Back from "@/components/Back";
import ScreenPage from "@/components/ScreenPage";
import Image from "next/image";
import { about } from "./about";

const About = () => {
  return (
    <ScreenPage>
      <div className="flex flex-col gap-16 p-16">
        <Back />
        <h1 className="text-4xl">A B O U T</h1>
        <div className="flex flex-col gap-4 items-start md:justify-between md:flex-row">
          <Image
            src="/images/Sheil.jpg"
            alt="Image of Sheil Gandhi"
            width={500}
            height={500}
            className="drop-shadow-white cursor-crosshair"
          />
          <div className="flex flex-col gap-4">
            {about.map(({ title, paragraph }) => (
              <div key={title} className="text-left md:text-right">
                <h2 className="font-black text-2xl">{title}</h2>
                <p>{paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScreenPage>
  );
};

export default About;
