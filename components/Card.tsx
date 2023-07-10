import { Card as NextCard, Grid, Text, Link } from "@nextui-org/react";
import Image from "next/image";

export interface CardProps {
  title: string;
  image_url: string;
  job?: string;
  dates?: string;
  description: string[];
  link?: string;
  link_description?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  image_url,
  job,
  dates,
  description,
  link,
  link_description,
}) => {
  return (
    <NextCard css={{ p: "$6", mw: "600px" }}>
      <NextCard.Header>
        <Image alt={title} src={image_url} width={34} height={34} />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              {title}
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>
              {job}
              {dates && <> | {dates}</>}
            </Text>
          </Grid>
        </Grid.Container>
      </NextCard.Header>
      <NextCard.Body css={{ py: "$2" }}>
        {description.map((bullet) => (
          <Text key={bullet}>•{bullet}</Text>
        ))}
      </NextCard.Body>
      <NextCard.Footer>
        <Link color="primary" target="_blank" href={link}>
          {link_description}
        </Link>
      </NextCard.Footer>
    </NextCard>
  );
};

export default Card;
