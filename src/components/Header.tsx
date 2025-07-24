import React from 'react';
import { Menu, Smartphone, X } from 'lucide-react';

import DemoModal from './DemoModal';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isDemoModalOpen, setIsDemoModalOpen] = React.useState(false);

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Ecosystem', href: '#ecosystem' },
        { name: 'The Team', href: '#team' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="bg-white shadow-sm sticky top-0 z-40">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#" className="flex items-center">
                            <span className="text-2xl font-bold text-primary">AbiliLife</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <button
                            className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            onClick={() => setIsDemoModalOpen(true)}
                        >
                            See Demo <Smartphone className="inline ml-2" />
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-primary p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <button
                                className="w-full bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors mt-4 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                onClick={() => setIsDemoModalOpen(true)}
                            >
                                See Demo
                            </button>
                        </div>
                    </div>
                )}
            </nav>
            {/* Demo Modal */}
            <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
        </header>
    );
};

export default Header;