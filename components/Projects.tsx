import Image from "next/image";
import React from "react";

const projects = [
  {
    title: "mobi2pong",
    image_url:
      "https://media.licdn.com/dms/image/C560BAQGZcqiPJpr6Pg/company-logo_200_200/0/1631602848718?e=2147483647&v=beta&t=8WDX661tuaXcXRUK2mq5H07g9JzBXCXAHVVvpAs6dxI",
    job: "Engineer",
    dates: "Nov 2022 - May 2023",
    description: [
      "Built an internal table tennis ranking system using Next.js, Tailwind CSS, PHP Laravel, MySQL, and Docker, fostering friendly competition and engagement within the office.",
      "Innovation project done as part of my personal development.",
    ],
    link_description: "No public access for security reasons",
  },
  {
    title: "BuddyBites",
    image_url:
      "https://media.licdn.com/dms/image/C560BAQGZcqiPJpr6Pg/company-logo_200_200/0/1631602848718?e=2147483647&v=beta&t=8WDX661tuaXcXRUK2mq5H07g9JzBXCXAHVVvpAs6dxI",
    job: "Engineer",
    dates: "May 2023 - Current",
    description: [
      "Leading innovation on the aggregator product, delivering cutting-edge solutions to clients.",
      "Innovation delivered through React Native, TypeScript, MapBox",
    ],
    link_description: "Not in production yet!",
  },
  {
    title: "DAFORST",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Victoria_University_of_Wellington_logo_national_crest_vertical.svg/1200px-Victoria_University_of_Wellington_logo_national_crest_vertical.svg.png",
    job: "BE(Hons)",
    dates: "Mar 2022 - Nov 2022",
    description: [
      "Decentralised Application For Object Recognition, Storage, and Tracking (DAFORST) utilised the InterPlanetary File System to host assets",
      "Aimed to provide communities with data sovereignty over their physical and digital assets through a unique identifier system",
      "Conducted UX designs using Jakob Nielsen and Steven Hoober frameworks",
      "Delivered a React Native-Android system with ExpressJs APIs and PostgreSQL database",
      "Established a testing pipeline with Jest, React Native Testing Library, and Supertest resulting in 86% coverage.",
      "Evaluated cyber security risks using DFD, STRIDE, DREAD, OWASP Zap, BURP Suite, and Software BoM assessments",
    ],
    link: "https://github.com/sheilgandhi/DAFORST",
    link_description: "Checkout the full project on GitHub!",
  },
];

const Projects: React.FC = () => {
  return (
    <div className="">
      <div className="flex gap-8 snap-mandatory snap-x overflow-x-auto">
        <div
          className="hidden md:inline-block col snap-center "
          style={{ minWidth: "600px" }}
        >
          <h2 className="text-6xl">Scholar of Software.</h2>
          <h2 className="text-6xl">Habitual of Heurisitics.</h2>
          <h2 className="text-6xl">Digital Leader.</h2>
        </div>
        {projects.map(
          ({
            title,
            image_url,
            job,
            dates,
            description,
            link,
            link_description,
          }) => (
            <div
              key={title}
              className="border-b-4 border-black bg-yellow-300 text-black p-4 col justify-between snap-center"
              style={{ minWidth: "900px", minHeight: "400px" }}
            >
              <div className="between">
                <div className="col">
                  <span className="text-4xl">{title}</span>
                  <span className="text-xl">{job}</span>
                  <span>{dates}</span>
                </div>
                <Image src={image_url} alt={title} width={100} height={100} />
              </div>
              <span>{description}</span>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {link_description}
              </a>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
