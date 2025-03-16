import {
    DocumentPdfIcon,
    GithubIcon,
    LinkedinIcon,
    EnvelopeIcon,
} from '@sanity/icons';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const links = [
    {
        name: 'github',
        icon: <GithubIcon fontSize={28} />,
        href: 'github.com/sheilgandhi',
    },
    {
        name: 'linkedin',
        icon: <LinkedinIcon fontSize={28} />,
        href: 'linkedin.com/in/sheilgandhi',
    },
    {
        name: 'email',
        icon: <EnvelopeIcon fontSize={28} />,
        href: 'mailto:sheilgandhi24@hotmail.com',
    },
];

const Socials = () => {
    return (
        <div className="flex flex-col gap-4">
            <p className="flex items-center gap-4 font-bold">
                check out my socials
                <span className="animate-bounce">
                    <ArrowDown />
                </span>
            </p>

            <div className="flex gap-4 md:gap-8">
                <div className="flex items-center gap-4 border-2 rounded-xl p-2">
                    Resume
                    <DocumentPdfIcon fontSize={28} />
                </div>
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 rounded-xl p-2 hover:animate-pulse"
                    >
                        {link.icon}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Socials;
