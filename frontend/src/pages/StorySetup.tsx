import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wand2, BookOpen, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Select } from '../components/ui/Select';
import { StoryConfig } from '../types';

const StorySetup: React.FC = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [config, setConfig] = useState<Partial<StoryConfig>>({
        genre: 'fantasy',
        tone: 'suspenseful',
        style: 'descriptive',
        pov: 'third_person',
    });

    const [prompt, setPrompt] = useState('');

    const handleStart = async () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navigate('/story/current');
        }, 1500);
    };

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                    <Wand2 className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-4xl font-bold text-foreground mb-4">
                    Craft Your Narrative
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Configure the AI co-writer parameters to match your creative vision.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 shadow-sm"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2">
                                <BookOpen className="h-4 w-4 text-primary" />
                                Story Settings
                            </h3>
                            <div className="space-y-4">
                                <Select
                                    label="Genre"
                                    options={[
                                        { label: 'Fantasy', value: 'fantasy' },
                                        { label: 'Sci-Fi', value: 'sci-fi' },
                                        { label: 'Mystery', value: 'mystery' },
                                        { label: 'Horror', value: 'horror' },
                                        { label: 'Romance', value: 'romance' },
                                        { label: 'Adventure', value: 'adventure' },
                                    ]}
                                    value={config.genre}
                                    onChange={(e) => setConfig({ ...config, genre: e.target.value as any })}
                                />

                                <Select
                                    label="Tone"
                                    options={[
                                        { label: 'Dark & Gritty', value: 'dark' },
                                        { label: 'Humorous', value: 'humorous' },
                                        { label: 'Optimistic', value: 'optimistic' },
                                        { label: 'Suspenseful', value: 'suspenseful' },
                                        { label: 'Whimsical', value: 'whimsical' },
                                    ]}
                                    value={config.tone}
                                    onChange={(e) => setConfig({ ...config, tone: e.target.value as any })}
                                />

                                <div className="grid grid-cols-2 gap-4">
                                    <Select
                                        label="Style"
                                        options={[
                                            { label: 'Descriptive', value: 'descriptive' },
                                            { label: 'Concise', value: 'concise' },
                                            { label: 'Poetic', value: 'poetic' },
                                        ]}
                                        value={config.style}
                                        onChange={(e) => setConfig({ ...config, style: e.target.value as any })}
                                    />
                                    <Select
                                        label="POV"
                                        options={[
                                            { label: 'First Person (I)', value: 'first_person' },
                                            { label: 'Third Person (He/She)', value: 'third_person' },
                                        ]}
                                        value={config.pov}
                                        onChange={(e) => setConfig({ ...config, pov: e.target.value as any })}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2">
                                <Sparkles className="h-4 w-4 text-primary" />
                                Initial Spark
                            </h3>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                                        Story Premise
                                    </label>
                                    <textarea
                                        className="flex min-h-[160px] w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-all"
                                        placeholder="e.g. A detective discovers a clock that counts backwards..."
                                        value={prompt}
                                        onChange={(e) => setPrompt(e.target.value)}
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        Leave empty if you want the AI to surprise you based on the settings.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end pt-6 border-t border-border">
                    <Button
                        size="lg"
                        className="w-full md:w-auto min-w-[200px]"
                        onClick={handleStart}
                        isLoading={isLoading}
                    >
                        Start Co-Writing
                    </Button>
                </div>
            </motion.div>
        </div>
    );
};

export default StorySetup;
