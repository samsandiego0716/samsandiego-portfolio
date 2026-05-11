import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    images: string[];
    features: string[];
    liveLink: string;
    githubLink: string;
}

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [selectedProject]);

    const projects: Project[] = [
        {
            id: 1,
            title: 'EggFriedRice',
            description: 'A visually appealing landing page showcasing Discounted ML Diamonds and Pilot Services. Built with clean HTML structure, modern CSS styling, and interactive JavaScript features.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            images: ['/project1.png'],
            features: [
                'User-friendly interface for easy navigation',
                'Responsive design for optimal viewing on all devices',
                'Interactive elements with smooth animations',
                'Modern and clean visual design',
                'Fast loading performance',
            ],
            liveLink: 'https://samsandiego0716.github.io/eggfriedrice-website/',
            githubLink: 'https://github.com/samsandiego0716/eggfriedrice-website',
        },
        {
            id: 2,
            title: 'Cafe Kantina',
            description: 'A full-featured ordering system for a cafe with menu management, order processing, and real-time database integration using Firebase.',
            tags: ['JavaScript', 'TypeScript', 'CSS', 'Firebase'],
            images: ['/project2.png'],
            features: [
                'Real-time order management system',
                'Menu management with categories',
                'Firebase integration for data storage',
                'User authentication and authorization',
                'Order tracking and status updates',
                'Responsive design for mobile ordering',
            ],
            liveLink: 'https://cafe-kantina.vercel.app/',
            githubLink: 'https://github.com/samsandiego0716/cafe-kantina',
        },
    ];

    const openModal = (project: Project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        if (selectedProject && selectedProject.images.length > 0) {
            setCurrentImageIndex((prev) => prev === selectedProject.images.length - 1 ? 0 : prev + 1);
        }
    };

    const prevImage = () => {
        if (selectedProject && selectedProject.images.length > 0) {
            setCurrentImageIndex((prev) => prev === 0 ? selectedProject.images.length - 1 : prev - 1);
        }
    };

    return (
        <section id="projects" className="min-h-screen py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#fafafa]">
                            My <span className="gradient-text">Projects</span>
                        </h1>
                        <p className="text-[#5e6472] max-w-2xl mx-auto">
                            Here are some of my recent works. Each project represents unique challenges and creative solutions.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <ScrollReveal key={project.id} delay={(index + 1) * 150}>
                            <div className="bg-[#1c1c1c]/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#b8f2e6]/20 card-hover group">
                                <div className="aspect-video bg-[#1c1c1c] relative overflow-hidden">
                                    {project.images.length > 0 ? (
                                        <img
                                            src={project.images[0]}
                                            alt={project.title}
                                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                                            onClick={() => openModal(project)}
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1c1c1c] to-[#252525]">
                                            <svg className="w-20 h-20 text-[#5e6472]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-3 text-[#fafafa]">{project.title}</h3>
                                    <p className="text-[#5e6472] text-sm mb-5 leading-relaxed line-clamp-2">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="px-3 py-1.5 text-xs font-medium text-[#b8f2e6] bg-[#b8f2e6]/10 rounded-full border border-[#b8f2e6]/30">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <button
                                        onClick={() => openModal(project)}
                                        className="inline-block w-full py-3 text-center text-sm font-semibold text-[#1c1c1c] bg-[#b8f2e6] hover:bg-[#aed9e0] rounded-lg transition-all cursor-pointer"
                                    >
                                        About The Project
                                    </button>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>

            {createPortal(
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
                            onClick={closeModal}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="bg-[#1c1c1c] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#b8f2e6]/30"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button onClick={closeModal} className="absolute top-4 right-4 text-[#5e6472] hover:text-[#fafafa] z-10">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                <div className="relative aspect-video bg-[#1c1c1c] rounded-t-2xl overflow-hidden">
                                    {selectedProject.images.length > 0 ? (
                                        <>
                                            <img src={selectedProject.images[currentImageIndex]} alt={selectedProject.title} className="w-full h-full object-cover object-top" />
                                            {selectedProject.images.length > 1 && (
                                                <>
                                                    <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors">
                                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                                    </button>
                                                    <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors">
                                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                                    </button>
                                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                                        {selectedProject.images.map((_, idx) => (
                                                            <button key={idx} onClick={() => setCurrentImageIndex(idx)} className={`w-2 h-2 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-[#b8f2e6]' : 'bg-white/50'}`} />
                                                        ))}
                                                    </div>
                                                </>
                                            )}
                                        </>
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <svg className="w-24 h-24 text-[#5e6472]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    )}
                                </div>

                                <div className="p-8">
                                    <h2 className="text-3xl font-bold text-[#fafafa] mb-4">{selectedProject.title}</h2>
                                    <p className="text-[#5e6472] mb-6 leading-relaxed">{selectedProject.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {selectedProject.tags.map((tag) => (
                                            <span key={tag} className="px-4 py-2 text-sm font-medium text-[#b8f2e6] bg-[#b8f2e6]/10 rounded-full border border-[#b8f2e6]/30">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="mb-8">
                                        <h3 className="text-xl font-bold text-[#fafafa] mb-4">Features</h3>
                                        <ul className="space-y-2">
                                            {selectedProject.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-[#fafafa]/70">
                                                    <span className="text-[#b8f2e6] mt-1">•</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex gap-4">
                                        <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-sm font-semibold text-[#1c1c1c] bg-[#b8f2e6] hover:bg-[#aed9e0] rounded-lg transition-colors">
                                            Live Preview
                                        </a>
                                        <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-sm font-medium text-[#fafafa] bg-[#1c1c1c] hover:bg-[#252525] rounded-lg transition-colors border border-[#b8f2e6]/30">
                                            Github Repository
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </section>
    );
};

export default Projects;
