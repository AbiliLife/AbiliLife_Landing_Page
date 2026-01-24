import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Smartphone, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: Settings,
            title: 'Set Your Preferences',
            description: 'Tell us about your accessibility needs — wheelchair type, transfer assistance, communication preferences. We save this so you don\'t repeat it every time.',
            details: ['Wheelchair type & size', 'Transfer assistance needs', 'Communication preferences', 'Emergency contacts']
        },
        {
            icon: Smartphone,
            title: 'Request a Ride',
            description: 'Share your pickup and drop-off locations with us. We\'ll connect you with an accessible vehicle through our partner network.',
            details: ['Enter pickup location', 'Enter destination', 'Add any trip notes', 'Submit your request']
        },
        {
            icon: CheckCircle,
            title: 'Travel with Peace of Mind',
            description: 'Board your wheelchair-accessible vehicle. You can share trip details with your caregiver or family via WhatsApp.',
            details: ['Accessible vehicle arrives', 'Share details with caregivers', 'Rate your experience', 'Provide feedback']
        }
    ];

    return (
        <section id="how-it-works" className="py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        How It Works —{' '}
                        <span className="text-primary">Mobility Pilot</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        AbiliLife Mobility helps wheelchair users request accessible rides in Nairobi. Here's how the pilot works:
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Connection lines for desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 transform -translate-y-1/2"></div>

                    <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="relative flex flex-col items-center rounded-xl p-6 transition-transform transform hover:scale-[1.02]"
                            >
                                {/* Step number circle */}
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 lg:relative lg:top-0 lg:left-0 lg:transform-none lg:mx-auto lg:mb-6">
                                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                                        {index + 1}
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 pt-12 lg:pt-8">
                                    <div className="text-center mb-6">
                                        <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                                            <step.icon className="h-8 w-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                        <p className="text-gray-600 mb-6">{step.description}</p>
                                    </div>

                                    <div className="space-y-2">
                                        {step.details.map((detail, detailIndex) => (
                                            <div key={detailIndex} className="flex items-center gap-2 text-sm text-gray-600">
                                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                                {detail}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-600 mb-6">
                        Ready to test AbiliLife Mobility? Chat with us on WhatsApp.
                    </p>
                    <a
                        href="https://wa.me/254742560540?text=Hi,%20I'd%20like%20to%20try%20the%20AbiliLife%20Mobility%20pilot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                        Try the Mobility Pilot
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;