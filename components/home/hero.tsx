import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <div className="flex flex-col-reverse items-center md:flex-row gap-8">
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold flex items-center gap-4">
                    Hey, I&apos;m Sheil{' '}
                    <p className="hover:animate-wiggle">👋🏽</p>
                </h1>
                <p className="text-lg">🏢 Frontend Engineer</p>
                <p className="text-md">🌏 New Zealand</p>
                <p className="text-md">
                    👨🏽‍💻 I like to develop projects, run, workout, read, and delve
                    more into self-development.
                </p>
            </div>
            <Image
                src="https://pbs.twimg.com/profile_images/1675812499306819585/OR2xz4uq_400x400.jpg"
                alt="Sheil Gandhi"
                width={200}
                height={200}
                className="rounded-xl w-full md:w-[200px] md:h-[200px] hover:animate-wiggle"
            />
        </div>
    );
};

export default Hero;
