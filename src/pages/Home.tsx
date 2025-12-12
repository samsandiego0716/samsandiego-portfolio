import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Particles from '../components/Particles';
import ProfileCard from '../components/ProfileCard';
import TypingEffect from '../components/TypingEffect';

const Home = () => {
    // Hide scrollbar on mount for desktop, restore on unmount
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="home-page min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-slate-900">
            {/* Particles Background */}
            <div className="absolute inset-0 z-0">
                <Particles
                    particleColors={['#0ea5e9', '#06b6d4']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Left Column: Hero Content */}
                <div className="text-center md:text-left animate-fade-in order-2 md:order-1">
                    <div className="mb-6 flex justify-center md:justify-start">
                        <span className="inline-block px-4 py-2 text-sm font-medium text-sky-600 dark:text-sky-400 bg-sky-100 dark:bg-sky-900/30 rounded-full border border-sky-200 dark:border-sky-800">
                            Welcome to my portfolio
                        </span>
                    </div>


                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-slate-800 dark:text-white">
                        Hi, I'm{' '}
                        <span className="gradient-text">
                            <TypingEffect text={['Sam']} />
                        </span>
                    </h1>

                    <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto md:mx-0">
                        A passionate developer crafting beautiful and functional digital experiences
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                        <Link
                            to="/projects"
                            className="px-8 py-3 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-300 hover-glow"
                        >
                            View My Work
                        </Link>
                        <Link
                            to="/contact"
                            className="px-8 py-3 glass text-slate-700 dark:text-white font-medium rounded-lg hover:bg-white/80 dark:hover:bg-white/10 transition-colors duration-300"
                        >
                            Get In Touch
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="mt-20 flex justify-center md:justify-start gap-4">
                        <a
                            href="https://www.facebook.com/official.sam14"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="animate-float delay-100"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-100 to-sky-200 dark:from-sky-900/50 dark:to-sky-800/50 border border-sky-300 dark:border-sky-700 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 text-sky-600 dark:text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </div>
                        </a>
                        <a
                            href="https://www.instagram.com/samz0716/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="animate-float delay-200"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-100 to-sky-200 dark:from-sky-900/50 dark:to-sky-800/50 border border-sky-300 dark:border-sky-700 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 text-sky-600 dark:text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </div>
                        </a>
                        <a
                            href="https://github.com/samsandiego0716"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="animate-float delay-300"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-100 to-sky-200 dark:from-sky-900/50 dark:to-sky-800/50 border border-sky-300 dark:border-sky-700 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                                <svg className="w-7 h-7 text-sky-600 dark:text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Right Column: Profile Card */}
                <div className="flex justify-center md:justify-end animate-fade-in delay-200 order-1 md:order-2">
                    <ProfileCard
                        name="Sam San Diego"
                        title="Full Stack Developer"
                        handle="samsandiego"
                        status="Open to Work"
                        contactText="Contact Me"
                        avatarUrl="/sam-profile.png"
                        miniAvatarUrl="/sam-profile.png"
                        showUserInfo={true}
                        enableTilt={true}
                        enableMobileTilt={true}
                        onContactClick={() => window.location.href = '/contact'}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
