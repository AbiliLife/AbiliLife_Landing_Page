import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Linkedin, Twitter, X, ZoomIn } from 'lucide-react';

import KevinProfile from '@/assets/kevin-profile-img.jpeg';
import EliProfile from '@/assets/eli-profile.jpeg';
import PhilipProfile from '@/assets/philip-profile-img.png';
import LibanProfile from '@/assets/liban-profile-img.png';
import TeamImg from '@/assets/team.jpeg';

const Team = () => {
    const [isImageOpen, setIsImageOpen] = useState(false);
    
    const teamMembers = [
        {
            id: 1,
            name: "Kevin Isom",
            role: "Co-Founder & Team Lead",
            bio: "Business strategist and Co-founder who drives our vision and growth, while actively contributing to product development and innovation. Kevin is dedicated to building partnerships, scaling impact, and guiding the team toward sustainable success.",
            image: KevinProfile,
            linkedin: "https://www.linkedin.com/in/kevin-isom-a58bb3201/",
            twitter: "https://x.com/kevin_isom54155"
        },
        {
            id: 2,
            name: "Eli Keli",
            role: "Co-Founder & Product Lead",
            bio: "Software Engineer passionate about building impactful, inclusive tech for underserved communities. Leads product design and MVP development. Experienced in mobile app development, disability tech, and human-centered design.",
            image: EliProfile,
            linkedin: "https://www.linkedin.com/in/eli-keli/",
            twitter: "https://x.com/eli_muthoka"
        },
        {
            id: 3,
            name: "Philip Machar",
            role: "Co-Founder & Technical Support",
            bio: "Inspired by real-world accessibility challenges, Philip creates responsive, inclusive interfaces and has led award-winning projects addressing digital barriers.",
            image: PhilipProfile,
            linkedin: "https://www.linkedin.com/in/philip-machar/",
            twitter: "https://x.com/Philip_Machar"
        },
        {
            id: 4,
            name: "Liban Hassan",
            role: "Co-Founder & Relations Manager",
            bio: "Liban leads strategic partnerships, team engagement, and event planning to support AbiliLife’s mission of improving accessibility for persons with disabilities.",
            image: LibanProfile,
            linkedin: "https://www.linkedin.com/in/liban-hassan-noor/",
            twitter: "#"
        }
    ];

    return (
        <section className="py-16 bg-white" id="team">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        The Team Behind <span className="text-primary">AbiliLife</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Meet the AbiliLife founding team. We're based in Nairobi and working with the disability community to test new ways to improve transport access.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member) => (
                        <Card
                            key={member.id}
                            className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
                        >
                            <CardContent className="p-6 text-center">
                                <div className="mb-4">
                                    <Avatar className="w-32 h-32 mx-auto mb-4 ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all">
                                        <AvatarImage
                                            src={member.image}
                                            alt={member.name}
                                            className="object-cover"
                                        />
                                        <AvatarFallback className="text-lg font-semibold bg-primary/10 text-primary">
                                            {member.name.split(' ').map(n => n[0]).join('')}
                                        </AvatarFallback>
                                    </Avatar>
                                </div>

                                <h3 className="text-xl font-semibold text-foreground mb-1">
                                    {member.name}
                                </h3>

                                <p className="text-primary font-medium mb-3">
                                    {member.role}
                                </p>

                                <div className="flex justify-center space-x-2">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="w-8 h-8 hover:bg-primary/10 hover:text-primary"
                                        asChild
                                    >
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                            <Linkedin className="w-4 h-4" />
                                        </a>
                                    </Button>

                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="w-8 h-8 hover:bg-primary/10 hover:text-primary"
                                        asChild
                                    >
                                        <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                                            <Twitter className="w-4 h-4" />
                                        </a>
                                    </Button>
                                </div>

                                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                    {member.bio}
                                </p>

                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="mt-12">
                    {/* Team Photo - Tap to view full */}
                    <div 
                        className="relative w-full rounded-lg overflow-hidden shadow-lg cursor-pointer group"
                        onClick={() => setIsImageOpen(true)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && setIsImageOpen(true)}
                        aria-label="View team photo in full screen"
                    >
                        <img
                            src={TeamImg}
                            alt="The AbiliLife founding team"
                            className="w-full h-auto object-contain filter grayscale-[20%] brightness-90 group-hover:brightness-100 transition-all"
                        />
                        {/* Tap hint overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-3 shadow-lg">
                                <ZoomIn className="w-5 h-5 text-gray-700" />
                            </div>
                        </div>
                        {/* Mobile tap hint */}
                        <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded md:hidden">
                            Tap to enlarge
                        </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                        Our team is committed to making a difference in the lives of persons with disabilities.
                    </p>
                </div>

                {/* Lightbox Modal */}
                {isImageOpen && (
                    <div 
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                        onClick={() => setIsImageOpen(false)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors p-2"
                            onClick={() => setIsImageOpen(false)}
                            aria-label="Close image"
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <img
                            src={TeamImg}
                            alt="The AbiliLife founding team"
                            className="max-w-full max-h-full object-contain rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Team;