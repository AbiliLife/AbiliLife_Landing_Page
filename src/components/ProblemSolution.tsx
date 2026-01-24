import { motion } from 'framer-motion';
import { MapPin, Users, Phone, Shield } from 'lucide-react';

const ProblemSolution = () => {
    const solutions = [
        {
            icon: MapPin,
            title: 'Partner Network',
            description: 'We connect you with accessible transport providers in Nairobi who operate wheelchair-friendly vehicles.'
        },
        {
            icon: Users,
            title: 'Community-Driven',
            description: 'Built with feedback from wheelchair users in Kenya. Your input shapes what we build next.'
        },
        {
            icon: Phone,
            title: 'WhatsApp-Friendly',
            description: 'Don\'t want an app? You can request rides and get updates via WhatsApp.'
        },
        {
            icon: Shield,
            title: 'Transparent Pilot',
            description: 'We\'re honest about what works and what doesn\'t. This is a test, not a perfect product.'
        }
    ];

    return (
        <section id="problem" className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Problem - Statistics */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            The Challenge
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Wheelchair users in Kenya face daily transportation barriers that limit work, healthcare access, and independence.
                        </p>

                        <div className="space-y-4">
                            <p className="text-gray-600 mb-4">
                                Many wheelchair users in Nairobi face:
                            </p>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-3">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span>Public transport that isn't wheelchair-accessible</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span>Difficulty finding reliable, affordable rides</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span>Safety concerns during travel</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-600 mt-1">•</span>
                                    <span>Lost opportunities due to mobility barriers</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Solution */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            Our Approach
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            AbiliLife Mobility is an early-stage pilot testing whether better ride-request tools can reduce some of these barriers. We're starting small in Nairobi, learning as we go.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {solutions.map((solution, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow hover:scale-[1.02] cursor-pointer flex flex-col items-start"
                                >
                                    <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                                        <solution.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-2">{solution.title}</h3>
                                    <p className="text-sm text-gray-600">{solution.description}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <a
                                href="#how-it-works"
                                className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            >
                                Learn How It Works
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;