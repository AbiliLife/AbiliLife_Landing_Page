import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Shield, MapPin, Users, Phone, ArrowDown } from 'lucide-react';

const ProblemSolution = () => {
    const stats = [
        {
            icon: TrendingUp,
            label: 'Transportation Barriers',
            value: '80%',
            description: 'of Persons with Disabilities in Kenya face daily transportation challenges.'
        },
        {
            icon: DollarSign,
            label: 'Economic Impact',
            value: '30%',
            description: 'of lost productivity due to inaccessible transport options.'
        },
        {
            icon: Shield,
            label: 'Safety Concerns',
            value: '50%',
            description: 'report feeling unsafe or unsupported during travel.'
        },
        {
            icon: MapPin,
            label: 'Limited Access',
            value: '70%',
            description: 'of public transport vehicles are not wheelchair accessible.'
        },
        {
            icon: Users,
            label: 'Community Support',
            value: '100K+',
            description: 'Persons with Disabilities in Kenya who need better transport solutions.'
        },
    ];

    const solutions = [
        {
            icon: MapPin,
            title: 'Accessible Ride Booking',
            description: 'Book wheelchair-accessible vehicles with just a few taps through our app.'
        },
        {
            icon: Users,
            title: 'Community-Driven',
            description: 'Built with input from the disability community to ensure real-world impact.'
        },
        {
            icon: Phone,
            title: '24/7 Support',
            description: 'Our team is available around the clock to assist with any transportation needs.'
        },
        {
            icon: Shield,
            title: 'Safety First',
            description: 'All vehicles are equipped with safety features and trained drivers.'
        }
    ];

    return (
        <section id="about" className="py-16 lg:py-24 bg-white">
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
                            The Challenge We're Solving
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Transportation barriers significantly impact the daily lives of Persons with Disabilities in Kenya. Here are some key statistics that highlight the challenges faced:
                        </p>

                        <div className="space-y-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-gray-50 rounded-xl p-6 border-l-4 border-primary hover:bg-gray-100 transition-colors cursor-pointer shadow-sm hover:shadow-md"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-lg">
                                            <stat.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-primary">{stat.value}</div>
                                            <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                                            <div className="text-sm text-gray-600">{stat.description}</div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
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
                            Our Solution 🧪
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            AbiliLife provides a comprehensive ecosystem of accessible transportation solutions designed with and for the disability community.
                        </p>
                        {/* <p className="text-lg text-gray-600 mb-8">
                            AbiliLife Mobility provides a comprehensive ecosystem of accessible transport solutions designed with and for Persons with Disabilities. Our platform addresses the key challenges faced in daily mobility, ensuring dignity, safety, and ease of access.
                        </p> */}

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
                            <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer flex items-center justify-center gap-2">
                                <ArrowDown className="h-5 w-5" />
                                More About Our Platform
                                <ArrowDown className="h-5 w-5" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;