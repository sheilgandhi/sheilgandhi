'use client';
import Link from 'next/link';
import posthog from 'posthog-js';
import { ReactNode } from 'react';

type BlogPostLinkProps = {
    href: string;
    title: string;
    className?: string;
    children: ReactNode;
};

export default function BlogPostLink({ href, title, className, children }: BlogPostLinkProps) {
    return (
        <Link
            href={href}
            className={className}
            onClick={() => posthog.capture('blog_post_clicked', { post_title: title, slug: href })}
        >
            {children}
        </Link>
    );
}
