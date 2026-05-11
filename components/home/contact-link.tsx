'use client';
import posthog from 'posthog-js';

type ContactLinkProps = {
    href: string;
    label: string;
    external?: boolean;
    download?: boolean;
};

export default function ContactLink({ href, label, external, download }: ContactLinkProps) {
    const handleClick = () => {
        if (download) {
            posthog.capture('resume_downloaded', { label });
        } else {
            posthog.capture('contact_link_clicked', { label, href });
        }
    };

    return (
        <a
            href={href}
            className="hover:text-foreground"
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            download={download ? '' : undefined}
            onClick={handleClick}
        >
            {label}
        </a>
    );
}
