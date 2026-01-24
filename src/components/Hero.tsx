import { motion } from 'framer-motion';

import heroSample from '@/assets/hero-sample.png';
// import heroSample1 from '@/assets/hero-sample-1.png';


const Hero = () => {
    return (
        <section className="bg-white py-16 lg:py-24" id='hero'>
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
                            Accessible Rides for{' '}
                            <span className="text-primary">Wheelchair Users in Nairobi</span>
                        </h1>

                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            We're testing a new way to request wheelchair-accessible rides. Join our pilot program — share your needs, connect with accessible vehicles, and help us build something better.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="https://wa.me/254742560540?text=Hi,%20I'd%20like%20to%20try%20the%20AbiliLife%20Mobility%20pilot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center justify-center gap-2"
                            >
                                Try the Mobility Pilot
                            </a>

                            <a
                                href="#how-it-works"
                                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center justify-center gap-2"
                            >
                                See How It Works
                            </a>
                        </div>

                        {/* Trust indicators */}
                        <div className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                Pilot Phase — Nairobi, Kenya
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                Community-Built
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