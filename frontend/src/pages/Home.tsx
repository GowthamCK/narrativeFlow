import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Feather, Zap, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center px-4">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto space-y-8"
            >
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Next Gen AI Storytelling
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight">
                    Co-write your next <br />
                    <span className="text-primary">
                        Masterpiece
                    </span>
                </h1>

                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    NarrativeFlow isn't just a generator—it's your collaborative partner.
                    Build immersive worlds, develop complex characters, and craft compelling
                    plots with an AI that understands your vision.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                    <Link to="/new">
                        <Button size="lg" className="rounded-full px-8 h-12 text-lg shadow-lg shadow-primary/25">
                            Start Creating Free
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </Link>
                    <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-lg bg-background/50 backdrop-blur-sm">
                        View Gallery
                    </Button>
                </div>
            </motion.div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 w-full max-w-6xl text-left">
                <FeatureCard
                    icon={<Feather className="w-8 h-8 text-primary" />}
                    title="Adaptive Co-Writing"
                    description="The AI adapts to your writing style, offering suggestions that blend seamlessly with your prose."
                />
                <FeatureCard
                    icon={<Zap className="w-8 h-8 text-primary" />}
                    title="Instant Visualization"
                    description="See your story come to life with real-time image generation for every scene you write."
                />
                <FeatureCard
                    icon={<BookOpen className="w-8 h-8 text-primary" />}
                    title="Deep Lore Memory"
                    description="Never worry about plot holes. NarrativeFlow recalls every character trait and plot point."
                />
            </div>
        </div>
    );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all"
    >
        <div className="mb-6 p-4 rounded-xl bg-primary/5 w-fit">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">
            {description}
        </p>
    </motion.div>
);

export default Home;
