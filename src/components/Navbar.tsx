import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Projects', id: 'projects' },
        { name: 'Contact', id: 'contact' },
    ];

    // Detect active section based on scroll position
    useEffect(() => {
        const sectionIds = navLinks.map(l => l.id);
        
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px', // Trigger when section is in the top-middle area
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
                setActiveSection('contact');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollTo = useCallback((id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    }, []);

    const isActive = (id: string) => activeSection === id;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1c1c1c]/95 backdrop-blur-md border-b border-[#b8f2e6]/15">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <button onClick={() => scrollTo('home')} className="flex items-center">
                        <span className="text-2xl font-extrabold tracking-tight gradient-text">SSD</span>
                    </button>

                    <div className="flex items-center space-x-4">
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollTo(link.id)}
                                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer
                                        ${isActive(link.id)
                                            ? 'text-[#b8f2e6]'
                                            : 'text-[#fafafa]/70 hover:text-[#b8f2e6]'
                                        }`}
                                >
                                    {link.name}
                                    {isActive(link.id) && (
                                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#b8f2e6] to-[#aed9e0] rounded-full" />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-lg text-[#fafafa]/70 hover:text-[#b8f2e6] hover:bg-[#b8f2e6]/10 transition-colors"
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                animate={isOpen ? "open" : "closed"}
                                initial="closed"
                            >
                                <motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} variants={{ closed: { d: "M4 6 L20 6" }, open: { d: "M6 6 L18 18" } }} />
                                <motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12 L20 12" variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }} />
                                <motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} variants={{ closed: { d: "M4 18 L20 18" }, open: { d: "M6 18 L18 6" } }} />
                            </motion.svg>
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-[#b8f2e6]/15">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollTo(link.id)}
                                className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-300
                                    ${isActive(link.id)
                                        ? 'text-[#b8f2e6] bg-[#b8f2e6]/10'
                                        : 'text-[#fafafa]/70 hover:text-[#b8f2e6] hover:bg-[#b8f2e6]/5'
                                    }`}
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
