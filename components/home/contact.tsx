import { Mail, Phone, MapPin, Map, FileText } from 'lucide-react';
import { ComponentType, CSSProperties } from 'react';
import { client } from '@/sanity/lib/client';
import { accent } from './constants';
import LinkedinIcon from './linkedin-icon';
import ContactLink from './contact-link';

type IconComponent = ComponentType<{
    className?: string;
    style?: CSSProperties;
}>;

type Contact = {
    icon: IconComponent;
    label: string;
    href?: string;
    external?: boolean;
    download?: boolean;
};

const RESUME_QUERY = `*[_type == "profile"][0]{ "url": resume.asset->url }`;
const options = { next: { revalidate: 30 } };

export default async function Contact() {
    const resume = await client.fetch<{ url?: string } | null>(
        RESUME_QUERY,
        {},
        options,
    );

    const contacts: Contact[] = [
        ...(resume?.url
            ? [
                  {
                      icon: FileText,
                      label: 'Resume',
                      href: `${resume.url}?dl=Sheil_Gandhi_Resume.pdf`,
                      external: true,
                      download: true,
                  } satisfies Contact,
              ]
            : []),
        {
            icon: Mail,
            label: 'sheilgandhi24@hotmail.com',
            href: 'mailto:sheilgandhi24@hotmail.com',
        },
        {
            icon: Phone,
            label: '+64 21 239 5985',
            href: 'tel:+64212395985',
        },
        {
            icon: LinkedinIcon,
            label: 'linkedin.com/in/sheilgandhi',
            href: 'https://linkedin.com/in/sheilgandhi',
            external: true,
        },
        {
            icon: MapPin,
            label: 'Toronto, Canada',
        },
        {
            icon: Map,
            label: 'Sitemap',
            href: '/sitemap',
        },
    ];

    return (
        <footer className="mt-16 pt-8 border-t border-border">
            <ul className="list-none flex flex-wrap gap-x-10 gap-y-3 text-sm text-foreground dark:text-foreground/80">
                {contacts.map(
                    ({ icon: Icon, label, href, external, download }) => (
                        <li key={label} className="flex items-center gap-2">
                            <Icon
                                className="h-4 w-4"
                                style={{ color: accent }}
                            />
                            {href ? (
                                <ContactLink
                                    href={href}
                                    label={label}
                                    external={external}
                                    download={download}
                                />
                            ) : (
                                label
                            )}
                        </li>
                    ),
                )}
            </ul>
        </footer>
    );
}
