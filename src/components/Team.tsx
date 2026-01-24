import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Linkedin, Twitter } from 'lucide-react';

import KevinProfile from '@/assets/kevin-profile-img.jpeg';
import EliProfile from '@/assets/eli-profile.jpeg';
import PhilipProfile from '@/assets/philip-profile-img.png';
import LibanProfile from '@/assets/liban-profile-img.png';
import TeamImg from '@/assets/team.jpeg';

const Team = () => {
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
            bio: "Software Engineer passionate about building impactful, inclusive tech for underserved communities. Leads product design and MVP development at AbiliLife, focusing on accessibility, disability tech, and human-centered design. Experienced in mobile app development and startup growth.",
            image: EliProfile,
            linkedin: "https://www.linkedin.com/in/eli-keli/",
            twitter: "https://x.com/eli_muthoka"
        },
        {
            id: 3,
            name: "Philip Machar",
            role: "Co-Founder & Technical Lead",
            bio: "Frontend developer and Software Engineer, passionate about building accessible, user-centered web applications. Inspired by real-world accessibility challenges, Philip creates responsive, inclusive interfaces and has led award-winning projects addressing digital barriers.",
            image: PhilipProfile,
            linkedin: "https://www.linkedin.com/in/philip-machar/",
            twitter: "https://x.com/Philip_Machar"
        },
        {
            id: 4,
            name: "Liban Hassan",
            role: "Co-Founder & Relations Manager",
            bio: "Aspiring fullstack developer passionate about solving real-world problems with innovative solutions. Liban leads strategic partnerships, team engagement, and event planning to support AbiliLife’s mission of improving accessibility for persons with disabilities.",
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
                        Meet the team building AbiliLife Mobility. We're based in Nairobi and working with the disability community to test new ways to improve transport access.
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
                    <div className="relative w-full h-[390px] rounded-lg overflow-hidden shadow-lg">
                        <img
                            src={TeamImg}
                            alt="Team working together"
                            className="w-full h-full object-cover filter grayscale-[20%] brightness-90"
                        />
                        {/* You can adjust the filter values above as needed */}
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                        Our team is committed to making a difference in the lives of persons with disabilities.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Team;