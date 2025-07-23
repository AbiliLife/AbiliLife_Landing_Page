import { Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { icon: Twitter, href: 'https://x.com/AbililifeKenya', label: 'Twitter' },
        { icon: Instagram, href: 'https://www.instagram.com/abililife_kenya/', label: 'Instagram' },
    ];

    const contactInfo = [
        { icon: Phone, text: '+254 742 560 540', href: 'tel:+254742560540' },
        { icon: Mail, text: 'abililifekenya@gmail.com', href: 'mailto:abililifekenya@gmail.com' },
        { icon: MapPin, text: 'Nairobi, Kenya', href: '#' },
    ];

    return (
        <footer id="contact" className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">AbiliLife Ke</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Empowering Persons with Disabilities through accessible technology and inclusive mobility solutions across Kenya.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="bg-gray-800 p-2 rounded-lg hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900"
                                    aria-label={social.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <social.icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:underline">
                                    How It Works
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:underline">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:underline">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:underline">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:underline">
                                    Accessibility Statement
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
                        <div className="space-y-3">
                            {contactInfo.map((contact, index) => (
                                <a
                                    key={index}
                                    href={contact.href}
                                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors focus:outline-none focus:underline"
                                    aria-label={contact.text}
                                    target='_blank'
                                    rel="noopener noreferrer"
                                >
                                    <contact.icon className="h-5 w-5 text-primary" />
                                    {contact.text}
                                </a>
                            ))}
                        </div>

                        {/* <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                            <h5 className="font-semibold mb-2">24/7 Emergency Support</h5>
                            <p className="text-sm text-gray-300">
                                Need immediate assistance? Our support team is available around the clock.
                            </p>
                        </div> */}
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © 2025 AbiliLife. All rights reserved.
                        </p>
                        <p className="text-gray-400 text-sm mt-4 md:mt-0">
                            Built with accessibility and inclusion at heart ❤️
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;