import React from "react";
import Card, { CardProps as Experience } from "./Card";
import { SectionProps } from "types/section";
import { Text } from "@nextui-org/react";

const projects: Experience[] = [
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

const Projects: React.FC<SectionProps> = () => {
  return (
    <div className="mx-8 my-4 py-4">
      <Text h1 size={40}>
        My Projects
      </Text>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map(
          ({
            title,
            image_url,
            job,
            dates,
            description,
            link,
            link_description,
          }: Experience) => (
            <Card
              key={title}
              title={title}
              image_url={image_url}
              job={job}
              dates={dates}
              description={description}
              link={link}
              link_description={link_description}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
