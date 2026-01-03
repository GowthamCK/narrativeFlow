import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { BookOpen } from 'lucide-react';

const Signup: React.FC = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navigate('/login');
        }, 1000);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
            <div className="w-full max-w-md space-y-8">
                <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-primary rounded-xl mb-4">
                        <BookOpen className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">Create your account</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Start co-writing your masterpiece today
                    </p>
                </div>

                <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
                    <form className="space-y-6" onSubmit={handleSignup}>
                        <div className="grid grid-cols-2 gap-4">
                            <Input
                                label="First name"
                                type="text"
                                placeholder="Jane"
                                required
                                className="bg-background"
                            />
                            <Input
                                label="Last name"
                                type="text"
                                placeholder="Doe"
                                required
                                className="bg-background"
                            />
                        </div>
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

                        <Button type="submit" className="w-full" size="lg" isLoading={isLoading}>
                            Create account
                        </Button>
                    </form>

                    <div className="mt-6 text-center text-sm text-muted-foreground">
                        Already have an account?{' '}
                        <Link to="/login" className="font-medium text-primary hover:underline">
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
