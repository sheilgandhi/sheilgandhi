'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from '../ui/button';

const ThemeToggle = () => {
    const { resolvedTheme, setTheme } = useTheme();

    if (resolvedTheme === 'dark') {
        return (
            <Button onClick={() => setTheme('light')} variant="outline">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            </Button>
        );
    }

    if (resolvedTheme === 'light') {
        return (
            <Button onClick={() => setTheme('dark')} variant="outline">
                <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            </Button>
        );
    }

    return null;
};

export default ThemeToggle;
