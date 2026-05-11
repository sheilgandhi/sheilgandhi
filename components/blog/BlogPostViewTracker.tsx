'use client';
import { useEffect } from 'react';
import posthog from 'posthog-js';

type BlogPostViewTrackerProps = {
    title: string;
    slug: string;
    categories?: string[];
    author?: string;
};

export default function BlogPostViewTracker({ title, slug, categories, author }: BlogPostViewTrackerProps) {
    useEffect(() => {
        posthog.capture('blog_post_viewed', {
            post_title: title,
            slug,
            categories,
            author,
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug]);

    return null;
}
