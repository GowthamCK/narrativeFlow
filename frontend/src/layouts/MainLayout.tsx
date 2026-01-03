import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { BookOpen, User } from 'lucide-react';
import { ThemeToggle } from '../components/ui/ThemeToggle'; // Adjust import if needed

const MainLayout: React.FC = () => {
    const location = useLocation();

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-300">
            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-primary rounded-lg">
                                <BookOpen className="h-5 w-5 text-primary-foreground" />
                            </div>
                            <Link to="/" className="text-lg font-semibold tracking-tight text-foreground hover:opacity-80 transition-opacity">
                                NarrativeFlow
                            </Link>
                        </div>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-6">
                            <Link to="/" className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === '/' ? 'text-primary' : 'text-muted-foreground'}`}>
                                Home
                            </Link>
                            <Link to="/features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                Features
                            </Link>
                            <Link to="/pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                Pricing
                            </Link>
                        </nav>

                        {/* Right Actions */}
                        <div className="flex items-center gap-4">
                            <ThemeToggle />

                            <div className="h-4 w-px bg-border hidden sm:block"></div>

                            {/* Check auth state here (mocked for now) */}
                            <Link to="/new" className="hidden sm:flex items-center justify-center h-9 px-4 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm">
                                New Story
                            </Link>

                            <Link to="/profile" className="p-2 text-muted-foreground hover:text-primary transition-colors hover:bg-muted rounded-full">
                                <User className="h-5 w-5" />
                            </Link>

                            {/* Login Button (Hidden if logged in - mock logic) */}
                            {/* <Link to="/login" className="text-sm font-medium text-muted-foreground hover:text-primary">Log in</Link> */}
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 w-full">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="border-t border-border py-12 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-2">
                            <span className="text-muted-foreground text-sm font-medium">© 2024 NarrativeFlow AI. All rights reserved.</span>
                        </div>
                        <div className="flex gap-6 text-muted-foreground text-sm">
                            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;
