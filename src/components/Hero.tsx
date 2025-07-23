import { motion } from 'framer-motion';
// import { ArrowRight, Phone } from 'lucide-react';

import heroSample from '@/assets/hero-sample.png';
// import heroSample1 from '@/assets/hero-sample-1.png';


const Hero = () => {
    return (
        <section className="bg-gradient-to-br from-primary/5 to-white py-16 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center lg:text-left"
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Reimagining{' '}
                            <span className="text-primary">Inclusive Services</span>
                        </h1>

                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            We are building a super app ecosystem where Persons with Disabilities and caregivers can access essential services with dignity and ease.
                        </p>

                        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center justify-center gap-2">
                                Book Your Ride
                                <ArrowRight className="h-5 w-5" />
                            </button>

                            <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center justify-center gap-2">
                                <Phone className="h-5 w-5" />
                                Call Support
                            </button>
                        </div> */}

                        {/* Trust indicators */}
                        <div className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                Community-First Approach
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                5 Essential Service Branches
                            </div>
                        </div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={heroSample}
                                alt="Wheelchair user boarding accessible vehicle"
                                className="w-full h-auto object-cover aspect-[4/3]"
                            />
                        </div>

                        {/* Floating stats card */}
                        {/* <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-lg p-6 hidden lg:block"
                        >
                            <div className="text-2xl font-bold text-primary">500+</div>
                            <div className="text-sm text-gray-600">Successful Rides</div>
                        </motion.div> */}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;