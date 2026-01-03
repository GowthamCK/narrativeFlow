import React from 'react';
import { User, Mail, Calendar, Edit2, LogOut } from 'lucide-react';
import { Button } from '../components/ui/Button';

const Profile: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto py-8 px-4">
            <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
                {/* Header */}
                <div className="px-6 py-8 border-b border-border bg-muted/30">
                    <div className="flex items-center gap-6">
                        <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center border-4 border-background shadow-lg">
                            <User className="h-10 w-10 text-primary" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-foreground">Gowtham C K</h1>
                            <p className="text-muted-foreground">Free Plan Member</p>
                        </div>
                        <div className="ml-auto">
                            <Button variant="outline" size="sm" className="gap-2">
                                <Edit2 className="w-4 h-4" />
                                Edit Profile
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Details */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-foreground">Account Information</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-sm text-muted-foreground p-3 bg-muted/50 rounded-lg">
                                <Mail className="w-4 h-4" />
                                <span>gowtham@example.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground p-3 bg-muted/50 rounded-lg">
                                <Calendar className="w-4 h-4" />
                                <span>Joined January 2024</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-foreground">Writing Statistics</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-lg bg-primary/5 border border-primary/10 text-center">
                                <div className="text-3xl font-bold text-primary">12</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Stories</div>
                            </div>
                            <div className="p-4 rounded-lg bg-primary/5 border border-primary/10 text-center">
                                <div className="text-3xl font-bold text-primary">45k</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Words</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-6 border-t border-border bg-muted/10 flex justify-end">
                    <Button variant="danger" size="sm" className="gap-2">
                        <LogOut className="w-4 h-4" />
                        Sign Out
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
