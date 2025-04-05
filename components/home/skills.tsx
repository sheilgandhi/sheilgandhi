import React from 'react';
import { client } from '@/sanity/lib/client';
import { SanityDocument } from 'next-sanity';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import Image from 'next/image';

const SKILLS_QUERY = `*[
    _type == "skill"
  ]{_id, title, description, logo_url}`;

const options = { next: { revalidate: 30 } };

export default async function Skills() {
    const skills = await client.fetch<SanityDocument[]>(
        SKILLS_QUERY,
        {},
        options
    );

    return (
        <div>
            <h1 className="text-3xl font-bold">Skills</h1>
            <div className="flex flex-wrap justify-between">
                {skills.map((skill) => (
                    <CardContainer key={skill.title} className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border flex gap-8 items-center">
                            <CardItem translateZ="100" className="">
                                <Image
                                    src={skill.logo_url}
                                    height="45"
                                    width="45"
                                    className="object-contain rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div>
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                    {skill.title}
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                >
                                    {skill.description}
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </div>
    );
}
