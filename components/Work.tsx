import React from "react";
import Card, { CardProps as Experience } from "./Card";
import { SectionProps } from "types/section";
import { Text } from "@nextui-org/react";

const experience: Experience[] = [
  {
    title: "MOBI HQ",
    image_url:
      "https://media.licdn.com/dms/image/C560BAQGZcqiPJpr6Pg/company-logo_200_200/0/1631602848718?e=2147483647&v=beta&t=8WDX661tuaXcXRUK2mq5H07g9JzBXCXAHVVvpAs6dxI",
    job: "Engineer",
    dates: "Nov 2021 - Current",
    description: [
      "Enhanced client relationships with Papa John's, Wild Wing, and BurgerFuel by implementing requested features using React, PHP, and MySQL.",
      "Implemented Apple & Google Single Sign-On frontend functionality in React Native & React.",
      "Streamlined operations by automating QR code generation, boosting efficiency and reducing manual effort.",
      "Achieved comprehensive customer information updates by developing custom hooks and components, utilizing the repository pattern and thorough Jest testing for 100% code coverage.",
    ],
    link: "http://www.mobihq.com",
    link_description: "The partner of digital hospitality",
  },
];

const Work: React.FC<SectionProps> = () => {
  return (
    <div className="mx-8 my-4 py-4">
      <Text h1 size={40}>
        My Experience
      </Text>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {experience.map(
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

export default Work;
