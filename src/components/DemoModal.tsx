import React, { useState } from 'react';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Smartphone } from 'lucide-react';

interface DemoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const demoSections = [
    {
        id: 'welcome',
        title: 'Welcome & Signup',
        description: 'See how users discover and join AbiliLife',
        gifUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=800&fit=crop&crop=center', // Placeholder
    },
    {
        id: 'onboarding',
        title: 'Onboarding Process',
        description: 'Smooth introduction to accessibility features',
        gifUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=800&fit=crop&crop=center', // Placeholder
    },
    {
        id: 'profile',
        title: 'Profile & Preferences',
        description: 'Personalized accessibility settings setup',
        gifUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=800&fit=crop&crop=center', // Placeholder
    }
];

// Reusable phone mockup component
const PhoneMockup: React.FC<{
    gifUrl?: string;
    title?: string;
    placeholderText?: string;
    fade?: boolean;
    animate?: boolean;
    keyProp?: string;
}> = ({ gifUrl, title, placeholderText, fade, animate, keyProp }) => (
    <div
        className={`
            relative
            ${fade ? 'hidden md:block' : ''}
            transition-all duration-500
        `}
        key={keyProp}
    >
        <div className={`
            phone-mockup
            bg-slate-700 shadow-xl
            rounded-[2.5rem] p-4
            ${animate ? 'animate-fade-in' : ''}
        `}>
            <div className={`
                bg-muted
                rounded-[2rem] overflow-hidden h-[60vw] max-h-[600px] w-[40vw] max-w-[300px] relative flex items-center justify-center
            `}>
                {gifUrl ? (
                    <img
                        src={gifUrl}
                        alt={title}
                        className="w-full h-full object-cover rounded-[2rem] transition-opacity duration-500"
                        draggable={false}
                    />
                ) : (
                    <div className="flex flex-col items-center justify-center h-full w-full">
                        <Smartphone className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                        <p className="text-sm text-muted-foreground">{placeholderText}</p>
                    </div>
                )}
            </div>
            {/* Phone Details */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-slate-600 rounded-full"></div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-slate-600 rounded-full"></div>
        </div>
    </div>
);

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('welcome');
    const [prevTab, setPrevTab] = useState('welcome');

    // For animation: track tab changes
    React.useEffect(() => {
        if (activeTab !== prevTab) setPrevTab(activeTab);
    }, [activeTab, prevTab]);

    const currentSection = demoSections.find(section => section.id === activeTab) || demoSections[0];

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent
                className="
                    max-w-7xl w-[98vw] sm:w-[95vw] h-[98vh] sm:h-[90vh] p-0 overflow-hidden bg-background border-none rounded-2xl shadow-2xl flex flex-col
                    "
                style={{ maxHeight: '98vh' }}
            >
                {/* Header */}
                <div className="relative p-6 border-b border-border bg-background">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-foreground mb-2">
                            AbiliLife App Demo
                        </h2>
                        <p className="text-muted-foreground">
                            Explore our app's features and accessibility options
                        </p>
                    </div>
                    <DialogClose className="absolute right-4 top-4 rounded-full opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-white/80 hover:bg-white">
                        <span className="sr-only">Close</span>
                    </DialogClose>
                </div>

                {/* Tabs Navigation */}
                <div className="px-4 py-3 bg-muted/30 border-b border-border">
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                        <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto gap-2 bg-transparent">
                            {demoSections.map((section) => (
                                <TabsTrigger
                                    key={section.id}
                                    value={section.id}
                                    className="
                                        text-sm font-medium rounded-lg px-3 py-2
                                        data-[state=active]:bg-primary data-[state=active]:text-white
                                        data-[state=active]:shadow
                                        transition-all
                                    "
                                >
                                    {section.title}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </Tabs>
                </div>

                {/* Demo Content */}
                <div className="flex-1 p-4 sm:p-6 overflow-auto">
                    <div className="max-w-6xl mx-auto">
                        {/* Section Info */}
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-semibold text-foreground mb-2">
                                {currentSection.title}
                            </h3>
                            <p className="text-muted-foreground">
                                {currentSection.description}
                            </p>
                        </div>

                        {/* Smartphone Mockups */}
                        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-center">
                            {/* Left android mockup */}
                            <PhoneMockup
                                fade
                                placeholderText="Android View"
                                keyProp="left"
                            />
                            {/* Right ios mockup */}
                            <PhoneMockup
                                fade
                                placeholderText="iOS View"
                                keyProp="right"
                            />
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DemoModal;