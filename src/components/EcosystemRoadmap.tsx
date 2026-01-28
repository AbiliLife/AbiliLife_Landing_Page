import React from 'react';
import { motion } from 'framer-motion';
import { Car, ShoppingCart, Heart, Briefcase, GraduationCap, CheckCircle, Clock, Smartphone } from 'lucide-react';
import DemoModal from './DemoModal';

const EcosystemRoadmap = () => {
    const [isDemoOpen, setIsDemoOpen] = React.useState(false);
    const phases = [
        {
            phase: 'NOW',
            phaseLabel: 'Active Pilot',
            items: [
                {
                    icon: Car,
                    title: 'AbiliLife Mobility',
                    description: 'Enables wheelchair users to request accessible rides, track trips in real-time, and share ride updates with caregivers. Also allows access to a range of accessible transport services for persons with disabilities.',
                    isActive: true,
                }
            ]
        },
        {
            phase: 'NEXT',
            phaseLabel: 'Coming Soon',
            items: [
                {
                    icon: ShoppingCart,
                    title: 'AbiliLife Access',
                    description: 'A smart catalog/marketplace of assistive devices and accessibility tech — from mobility aids to hearing/vision tools — with financing, reviews, and vendor partnerships.',
                    isActive: false,
                },
                {
                    icon: Heart,
                    title: 'AbiliLife Care',
                    description: 'Offers wellness tools, virtual consults, disability-focused health tips, and a 24/7 emergency SOS line — all tailored to individual care needs.',
                    isActive: false,
                }
            ]
        },
        {
            phase: 'FUTURE',
            phaseLabel: 'On the Horizon',
            items: [
                {
                    icon: Briefcase,
                    title: 'AbiliLife Work',
                    description: 'Inclusive job opportunities and career development.',
                    isActive: false,
                },
                {
                    icon: GraduationCap,
                    title: 'AbiliLife Learn',
                    description: 'Accessible courses and skill-building resources.',
                    isActive: false,
                }
            ]
        }
    ];

    return (
        <section className="py-16 lg:py-24 bg-gray-50" id="ecosystem">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">
                        Our AbiliLife <span className="text-primary">Roadmap</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center">
                        We're building a comprehensive digital ecosystem of services designed to enhance dignity, access, and independence for persons with disabilities — one step at a time.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="max-w-3xl mx-auto">
                    {phases.map((phase, phaseIndex) => (
                        <motion.div
                            key={phase.phase}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: phaseIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Phase Header */}
                            <div className="flex items-center gap-4 mb-4">
                                <div className={`
                                    flex items-center justify-center w-12 h-12 rounded-full font-bold text-sm
                                    ${phase.phase === 'NOW'
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-200 text-gray-500'}
                                `}>
                                    {phase.phase === 'NOW' ? (
                                        <CheckCircle className="w-5 h-5" />
                                    ) : (
                                        <Clock className="w-5 h-5" />
                                    )}
                                </div>
                                <div>
                                    <span className={`
                                        text-xs font-semibold uppercase tracking-wide
                                        ${phase.phase === 'NOW' ? 'text-primary' : 'text-gray-400'}
                                    `}>
                                        {phase.phase}
                                    </span>
                                    <p className="text-sm text-gray-600">{phase.phaseLabel}</p>
                                </div>
                            </div>

                            {/* Phase Items */}
                            <div className={`
                                ml-6 pl-10 pb-8
                                ${phaseIndex < phases.length - 1 ? 'border-l-2 border-gray-200' : ''}
                            `}>
                                {phase.items.map((item) => (
                                    <div
                                        key={item.title}
                                        className={`
                                            rounded-xl p-5 mb-3 last:mb-0 transition-all
                                            ${item.isActive
                                                ? 'bg-white border-2 border-primary shadow-md'
                                                : 'bg-white border border-gray-100'}
                                        `}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className={`
                                                p-3 rounded-lg
                                                ${item.isActive
                                                    ? 'bg-primary/10'
                                                    : 'bg-gray-100'}
                                            `}>
                                                <item.icon className={`
                                                    w-6 h-6
                                                    ${item.isActive ? 'text-primary' : 'text-gray-400'}
                                                `} />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2 flex-wrap">
                                                    <h3 className={`
                                                        text-lg font-semibold
                                                        ${item.isActive ? 'text-gray-900' : 'text-gray-500'}
                                                    `}>
                                                        {item.title}
                                                    </h3>
                                                    {item.isActive && (
                                                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                                                            Live in Nairobi
                                                        </span>
                                                    )}
                                                </div>
                                                <p className={`
                                                    text-base leading-relaxed
                                                    ${item.isActive ? 'text-gray-600' : 'text-gray-400'}
                                                `}>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
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
                            See a Demo of How it Works
                            <Smartphone className="inline ml-2" />
                        </button>
                    </div>
                </motion.div>

                {/* Footer Note */}
                {/* <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center text-sm text-gray-500 mt-8"
                >
                    Each module is designed to work together — your feedback on Mobility shapes what we build next.
                </motion.p> */}
                {/* Demo Modal */}
                <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
            </div>
        </section>
    );
};

export default EcosystemRoadmap;
