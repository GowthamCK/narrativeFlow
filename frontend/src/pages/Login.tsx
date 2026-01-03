import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { BookOpen } from 'lucide-react';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navigate('/');
        }, 1000);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
            <div className="w-full max-w-md space-y-8">
                <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-primary rounded-xl mb-4">
                        <BookOpen className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">Welcome back</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Sign in to continue your writing journey
                    </p>
                </div>

                <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <Input
                            label="Email address"
                            type="email"
                            placeholder="name@example.com"
                            required
                            className="bg-background"
                        />
                        <Input
                            label="Password"
                            type="password"
                            required
                            className="bg-background"
                        />

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
                                    Remember me
                                </label>
                            </div>
                            <div className="text-sm">
                                <a href="#" className="font-medium text-primary hover:underline">
                                    Forgot password?
                                </a>
                            </div>
                        </div>

                        <Button type="submit" className="w-full" size="lg" isLoading={isLoading}>
                            Sign in
                        </Button>
                    </form>

                    <div className="mt-6 text-center text-sm text-muted-foreground">
                        Don't have an account?{' '}
                        <Link to="/signup" className="font-medium text-primary hover:underline">
                            Sign up for free
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
