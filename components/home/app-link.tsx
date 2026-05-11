'use client';
import posthog from 'posthog-js';
import { ReactNode } from 'react';

type AppLinkProps = {
    url: string;
    alt?: string;
    children: ReactNode;
};

export default function AppLink({ url, alt, children }: AppLinkProps) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => posthog.capture('app_link_clicked', { url, app: alt ?? url })}
        >
            {children}
        </a>
    );
}
