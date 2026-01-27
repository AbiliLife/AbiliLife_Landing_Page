import { motion } from 'framer-motion';

// import heroSample from '@/assets/hero-sample.png';
// import heroSample1 from '@/assets/hero-sample-1.png';
import mobileFrame from '@/assets/mobile-frame.svg';
// import superAppImage from '@/assets/super-app-image.png';
import mobileImage from '@/assets/hero-image.png';


const Hero = () => {
    return (
        <section className="bg-white h-screen flex items-center py-20 " id='hero'>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center lg:text-left"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Now in Pilot Phase
                        </motion.div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Reimagining{' '}
                            <span className="text-primary">Inclusive Services</span>
                        </h1>

                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            AbiliLife is an early-stage project in Nairobi building accessible digital services for persons with disabilities, starting with a mobility pilot for wheelchair users.
                        </p>

                        <div className="flex flex-col gap-4 justify-center lg:justify-start">
                            <a
                                href="https://wa.me/254742560540?text=Hi,%20I'd%20like%20to%20try%20the%20AbiliLife%20Mobility%20pilot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center justify-center gap-2"
                            >
                                {/* Glowing/throbbing effect */}
                                <span className="absolute inset-0 rounded-lg animate-pulse bg-primary blur-md opacity-50"></span>
                                
                                <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                <span className="relative z-10">Chat on WhatsApp to Try the Pilot</span>
                            </a>

                            <a
                                href="https://expo.dev/accounts/abililife-dev/projects/abililife/builds/d0dddb8a-94f7-42e1-93e3-4ccecb1b96ff"
                                className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary hover:text-white hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center justify-center gap-2"
                            >
                                Download Android Pilot (APK)
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
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
                        className="flex justify-center lg:justify-end"
                    >
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative w-full max-w-[360px]"
                        >
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-110"></div>

                            {/* Mobile Frame SVG */}
                            <img
                                src={mobileFrame}
                                alt="Mobile Frame"
                                className="relative w-full h-auto drop-shadow-2xl z-10"
                            />
                            
                            {/*  Image - Positioned inside the frame */}
                            <img
                                src={mobileImage}
                                alt="App Screenshot"
                                className="absolute top-[1%] left-[6%] w-[92%] h-[98%] object-cover rounded-[32px]"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;