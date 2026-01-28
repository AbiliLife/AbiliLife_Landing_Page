import { motion } from 'framer-motion';

const VisionTeaser = () => {
    return (
        <section className="py-16 bg-gray-50" id="vision">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                        Where We're Headed
                    </h2>
                    
                    <div className="text-lg text-gray-600 space-y-4 leading-relaxed">
                        <p>
                            Right now, we're focused on getting Mobility right. But transport is just the first step.
                        </p>
                        
                        <p>
                            In the future, we envision a platform that helps persons with disabilities access:
                        </p>
                        
                        <ul className="text-left max-w-xl mx-auto space-y-2 mb-4">
                            <li>• Assistive devices (AbiliLife Access)</li>
                            <li>• Healthcare services (AbiliLife Care)</li>
                            <li>• Employment opportunities (AbiliLife Work)</li>
                            <li>• Educational resources (AbiliLife Learn)</li>
                        </ul>
                        
                        <p>
                            Our goal is to create an ecosystem of solutions that empower persons with disabilities to live more independent, connected lives.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default VisionTeaser;
