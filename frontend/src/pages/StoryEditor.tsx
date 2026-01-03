import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Send, Settings, ChevronDown, SlidersHorizontal, Image as ImageIcon } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Slider } from '../components/ui/Slider';
import { motion, AnimatePresence } from 'framer-motion';

// Mock Data (Same as before)
const MOCK_SEGMENTS = [
    { id: '1', author: 'ai', content: "The clock struck thirteen, sending a shiver through the crowded ballroom. It wasn't the sound itself, but the silence that followed.", imageUrl: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&q=80&w=1000" },
    { id: '2', author: 'user', content: "Detective Miller adjusted his tie, his eyes scanning the room. 'Nobody panic,' he lied, his hand drifting to his revolver.", imageUrl: null },
];

const StoryEditor: React.FC = () => {
    const { id } = useParams();
    const [segments, setSegments] = useState(MOCK_SEGMENTS);
    const [inputText, setInputText] = useState('');
    const [controlsOpen, setControlsOpen] = useState(false); // Collapsed by default
    const [controls, setControls] = useState({ pace: 50, detail: 75, tone: 60 });

    const handleSend = () => {
        if (!inputText.trim()) return;
        const newSegment = { id: Date.now().toString(), author: 'user', content: inputText, imageUrl: null };
        setSegments([...segments, newSegment as any]); // Pending proper type definition import which we will skip for now to avoid cascading changes
        setInputText('');
        // Mock AI response
        setTimeout(() => {
            setSegments(prev => [...prev, { id: 'ai-' + Date.now(), author: 'ai', content: "...", imageUrl: null }]);
        }, 1000);
    };

    return (
        <div className="relative h-[calc(100vh-4rem)] flex flex-col md:flex-row bg-background">

            {/* Top Right Controls Overlay (Absolute on Desktop, Drawer on Mobile) */}
            <AnimatePresence>
                {controlsOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-4 right-4 z-40 w-80 bg-popover border border-border rounded-xl shadow-xl p-6"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold text-foreground flex items-center gap-2">
                                <Settings className="w-4 h-4" />
                                Controls
                            </h3>
                            <Button variant="ghost" size="sm" onClick={() => setControlsOpen(false)}>
                                <ChevronDown className="w-4 h-4" />
                            </Button>
                        </div>

                        <div className="space-y-6">
                            {/* Image Preview */}
                            <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
                                {segments[0].imageUrl ? (
                                    <img src={segments[0].imageUrl} className="w-full h-full object-cover" alt="Scene" />
                                ) : (
                                    <div className="flex items-center justify-center h-full"><ImageIcon className="text-muted-foreground" /></div>
                                )}
                            </div>

                            <div className="space-y-4">
                                <Slider label="Pacing" value={controls.pace} onChange={(e) => setControls({ ...controls, pace: +e.target.value })} />
                                <Slider label="Detail Level" value={controls.detail} onChange={(e) => setControls({ ...controls, detail: +e.target.value })} />
                                <Slider label="Tone" value={controls.tone} onChange={(e) => setControls({ ...controls, tone: +e.target.value })} />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content Area */}
            <div className="flex-1 w-full max-w-5xl mx-auto flex flex-col h-full relative">

                {/* Editor Header / Toolbar */}
                <div className="h-14 border-b border-border bg-background/50 backdrop-blur-sm flex items-center justify-between px-4 sticky top-0 z-30">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground">The 13th Hour</span>
                        <span className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground">Mystery</span>
                    </div>
                    <Button
                        variant={controlsOpen ? "secondary" : "outline"}
                        size="sm"
                        onClick={() => setControlsOpen(!controlsOpen)}
                        className="gap-2"
                    >
                        <SlidersHorizontal className="w-4 h-4" />
                        <span className="hidden sm:inline">Settings</span>
                    </Button>
                </div>

                {/* Story Stream */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-8 scroll-smooth">
                    {segments.map((seg) => (
                        <motion.div
                            key={seg.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className={`flex ${seg.author === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`max-w-[90%] sm:max-w-[75%] space-y-2 ${seg.author === 'user' ? 'items-end flex flex-col' : ''}`}>
                                <div className={`p-4 rounded-2xl text-base sm:text-lg leading-relaxed shadow-sm ${seg.author === 'user'
                                    ? 'bg-primary text-primary-foreground rounded-tr-sm'
                                    : 'bg-card text-card-foreground border border-border rounded-tl-sm'
                                    }`}>
                                    {seg.content}
                                </div>
                                <span className="text-xs text-muted-foreground px-1 capitalize">{seg.author}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Input Area */}
                <div className="p-4 sm:p-6 bg-background border-t border-border">
                    <div className="relative max-w-4xl mx-auto">
                        <textarea
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            placeholder="Type to continue the story..."
                            className="w-full min-h-[5rem] max-h-[12rem] p-4 pr-14 rounded-xl border border-input bg-card text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-y"
                        />
                        <div className="absolute bottom-4 right-3">
                            <Button
                                size="sm"
                                className="h-8 w-8 p-0 rounded-lg"
                                onClick={handleSend}
                                disabled={!inputText.trim()}
                            >
                                <Send className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                    <div className="text-center mt-2 text-xs text-muted-foreground">
                        AI adapts to your style. Cmd+Enter to send.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoryEditor;
