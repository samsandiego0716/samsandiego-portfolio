import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <span className="text-2xl font-extrabold tracking-tight gradient-text">SSD</span>
                    </Link>

                    {/* Right Side Actions */}
                    <div className="flex items-center space-x-4">
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300
                      ${isActive(link.path)
                                            ? 'text-sky-600 dark:text-sky-400'
                                            : 'text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400'
                                        }`}
                                >
                                    {link.name}
                                    {isActive(link.path) && (
                                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full" />
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-slate-800 transition-colors"
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
                                <motion.path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    variants={{
                                        closed: { d: "M4 6 L20 6" },
                                        open: { d: "M6 6 L18 18" }
                                    }}
                                />
                                <motion.path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 12 L20 12"
                                    variants={{
                                        closed: { opacity: 1 },
                                        open: { opacity: 0 }
                                    }}
                                />
                                <motion.path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    variants={{
                                        closed: { d: "M4 18 L20 18" },
                                        open: { d: "M6 18 L18 6" }
                                    }}
                                />
                            </motion.svg>
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-sky-100 dark:border-slate-700">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-4 py-3 text-sm font-medium transition-colors duration-300
                  ${isActive(link.path)
                                        ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-slate-800'
                                        : 'text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-slate-800'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
