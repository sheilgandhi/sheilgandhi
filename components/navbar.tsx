import Link from 'next/link';
import React from 'react';
import ThemeToggle from './theme/theme-toggle';

const routes = [
    { name: 'home', href: '/' },
    { name: 'projects', href: '/projects' },
    { name: 'blog', href: '/blog' },
    { name: 'contact', href: '/contact' },
];

const Navbar = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex gap-4 md:gap-8">
                {routes.map((route) => (
                    <Link key={route.name} href={route.href}>
                        <span className="hover:animate-pulse">
                            {route.name}
                        </span>
                    </Link>
                ))}
            </div>
            <ThemeToggle />
        </div>
    );
};

export default Navbar;
