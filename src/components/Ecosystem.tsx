import React from 'react';
import { motion } from 'framer-motion';
import { Car, ShoppingCart, Heart, Briefcase, GraduationCap, Smartphone } from 'lucide-react';
import { Badge } from './ui/badge';

import DemoModal from './DemoModal';

const Ecosystem = () => {
    const [isDemoOpen, setIsDemoOpen] = React.useState(false);
    const modules = [
        {
            icon: Car,
            title: 'AbiliLife Mobility',
            description: 'Enables people with disabilities to book accessible rides (e.g. wheelchair vans), track trips in real-time, and share ride updates with caregivers.',
            status: 'Ongoing Beta',
            statusVariant: 'default' as const,
            delay: 0.1
        },
        {
            icon: ShoppingCart,
            title: 'AbiliLife Access',
            description: 'A smart catalog of assistive devices and accessibility tech — from mobility aids to hearing/vision tools — with financing, reviews, and vendor partnerships.',
            status: 'Upcoming Beta',
            statusVariant: 'secondary' as const,
            delay: 0.2
        },
        {
            icon: Heart,
            title: 'AbiliLife Care',
            description: 'Offers wellness tools, virtual consults, disability-focused health tips, and a 24/7 emergency SOS line — all tailored to individual care needs.',
            status: 'Upcoming Beta',
            statusVariant: 'secondary' as const,
            delay: 0.3
        },
        {
            icon: Briefcase,
            title: 'AbiliLife Work',
            description: 'Connects users to inclusive job opportunities, remote gigs, mentorship, and career development programs — empowering economic independence.',
            status: 'Upcoming Beta',
            statusVariant: 'secondary' as const,
            delay: 0.4
        },
        {
            icon: GraduationCap,
            title: 'AbiliLife Learn',
            description: 'Learning hub offering courses, literacy tools, and accessible skill-building content for PWDs to grow personally and professionally.',
            status: 'Upcoming Beta',
            statusVariant: 'secondary' as const,
            delay: 0.5
        }
    ];

    return (
        <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary rounded-full"></div>
                <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-primary rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Growing Digital <span className="text-primary">Ecosystem</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-2">
                        AbiliLife is not just a single app, but a comprehensive digital ecosystem designed to improve dignity, access, and independence for persons with disabilities across Africa.
                    </p>
                    <p className="text-sm text-gray-500">
                        Starting with Mobility🚗, expanding to transform lives
                    </p>
                </motion.div>

                {/* Tree/Branch Layout */}
                <div className="relative">
                    {/* Central trunk/connection lines */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 to-primary/10 transform -translate-x-1/2"></div>

                    {/* Mobile: Stack layout, Desktop: Alternating branch layout */}
                    <div className="space-y-8 lg:space-y-16">
                        {modules.map((module, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ duration: 0.6, delay: module.delay }}
                                viewport={{ once: true }}
                                className={`relative ${index % 2 === 0
                                    ? 'lg:pr-8 lg:text-right lg:ml-0'
                                    : 'lg:pl-8 lg:text-left lg:ml-auto'
                                    } lg:w-1/2`}
                            >
                                {/* Branch connection line for desktop */}
                                <div className={`hidden lg:block absolute top-8 w-8 h-0.5 bg-primary/20 ${index % 2 === 0 ? 'right-0' : 'left-0'
                                    }`}></div>

                                {/* Branch node */}
                                <div className={`hidden lg:block absolute top-6 w-4 h-4 bg-primary rounded-full ${index % 2 === 0 ? '-right-2' : '-left-2'
                                    }`}></div>

                                <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group cursor-pointer hover:bg-gray-50">
                                    <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                                        }`}>
                                        <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors">
                                            <module.icon className="h-8 w-8 text-primary" />
                                        </div>

                                        <div className="flex-1">
                                            <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'lg:flex-row-reverse lg:justify-end' : ''
                                                }`}>
                                                <h3 className="text-xl font-bold text-gray-900">{module.title}</h3>
                                                <Badge variant={module.statusVariant} className="text-xs">
                                                    {module.status}
                                                </Badge>
                                            </div>

                                            <p className="text-gray-600 leading-relaxed">
                                                {module.description}
                                            </p>

                                            {index === 0 && (
                                                <div className="mt-4 text-sm text-primary font-medium">
                                                    🚀 Currently active in pilot phase
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="bg-primary/5 rounded-xl p-8 border border-primary/10">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Building the Future of Inclusive Technology
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Each module works together to create a comprehensive support system,
                            empowering persons with disabilities to live independently and thrive in their communities.
                        </p>
                        <button
                            className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer"
                            onClick={() => setIsDemoOpen(true)}
                        >
                            How It Works
                            <Smartphone className="inline ml-2" />
                        </button>
                    </div>
                </motion.div>
            </div>
            {/* Demo Modal */}
            <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
        </section>
    );
};

export default Ecosystem;