'use client';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from '../ui/button';
import posthog from 'posthog-js';

const ThemeToggle = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const isDark = resolvedTheme === 'dark';

    const handleToggle = () => {
        const next_theme = isDark ? 'light' : 'dark';
        setTheme(next_theme);
        posthog.capture('theme_toggled', { theme: next_theme });
    };

    return (
        <Button
            onClick={handleToggle}
            variant="outline"
        >
            {isDark ? (
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            ) : (
                <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            )}
        </Button>
    );
};

export default ThemeToggle;
