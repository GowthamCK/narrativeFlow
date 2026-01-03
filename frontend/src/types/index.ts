export type StoryGenre = 'fantasy' | 'sci-fi' | 'mystery' | 'horror' | 'romance' | 'adventure';
export type StoryTone = 'dark' | 'humorous' | 'optimistic' | 'suspenseful' | 'whimsical';
export type WritingStyle = 'descriptive' | 'concise' | 'poetic' | 'dialogue-heavy';

export interface StoryState {
    id: string;
    title: string;
    genre: StoryGenre;
    tone: StoryTone;
    characters: Character[];
    segments: StorySegment[];
    createdAt: string;
    updatedAt: string;
}

export interface Character {
    id: string;
    name: string;
    description: string;
    traits: string[];
}

export interface StorySegment {
    id: string;
    content: string;
    author: 'user' | 'ai';
    imageUrl?: string;
    timestamp: number;
}

export interface StoryConfig {
    genre: StoryGenre;
    tone: StoryTone;
    style: WritingStyle;
    pov: 'first_person' | 'third_person';
    additionalNotes?: string;
}
