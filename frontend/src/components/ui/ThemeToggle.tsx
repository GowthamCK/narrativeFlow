import React from 'react';
import { Moon, Sun, Laptop } from 'lucide-react';
import { useTheme } from './theme-provider';
import { Button } from './Button';

export function ThemeToggle() {
    const { setTheme } = useTheme();

    return (
        <div className="flex items-center gap-1 border border-border rounded-lg p-1 bg-background/50 backdrop-blur-sm">
            <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => setTheme("light")}
                title="Light Mode"
            >
                <Sun className="h-4 w-4" />
                <span className="sr-only">Light</span>
            </Button>
            <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => setTheme("system")}
                title="System Mode"
            >
                <Laptop className="h-4 w-4" />
                <span className="sr-only">System</span>
            </Button>
            <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => setTheme("dark")}
                title="Dark Mode"
            >
                <Moon className="h-4 w-4" />
                <span className="sr-only">Dark</span>
            </Button>
        </div>
    );
}
