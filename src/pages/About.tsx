const About = () => {
    const frontendSkills = [
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Shadcn', icon: 'https://avatars.githubusercontent.com/u/139895814?s=200&v=4' },
        { name: 'Framer Motion', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg' },
    ];

    const backendSkills = [
        { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'Firebase', icon: 'https://img.icons8.com/color/96/firebase.png' },
        { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
    ];

    const databaseSkills = [
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ];

    return (
        <div className="min-h-screen py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-800 dark:text-white">
                        About <span className="gradient-text">Me</span>
                    </h1>
                    <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Get to know me better and discover my journey in the world of development
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Profile Section */}
                    <div className="animate-fade-in delay-100">
                        <div className="glass rounded-2xl p-8 hover-glow">
                            {/* Photo */}
                            <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden">
                                <img
                                    src="/about-photo.png"
                                    alt="Sam San Diego"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <h2 className="text-2xl font-bold text-center mb-4 text-slate-800 dark:text-white">Sam San Diego</h2>
                            <p className="text-sky-600 dark:text-sky-400 text-center mb-6">Full Stack Developer</p>

                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                I am Sam San Diego, I am passionate about becoming a web developer in the future. I am studying well about developing websites and others. I am currently studying at Bestlink College of the Philippines with a Bachelor of Science in Information Technology course. I love creating systems that have an impact on our lives.
                            </p>

                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
                                When I'm not coding, you can find me exploring new technologies,
                                contributing to open-source projects, or playing online games.
                            </p>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="animate-fade-in delay-200 space-y-6">
                        {/* Frontend Skills */}
                        <div className="glass rounded-2xl p-8 hover-glow">
                            <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-white">
                                <span className="gradient-text">Frontend</span> Skills
                            </h3>
                            <div className="grid grid-cols-4 gap-4">
                                {frontendSkills.map((skill) => (
                                    <div key={skill.name} className="flex flex-col items-center gap-2 p-3 bg-sky-50 dark:bg-slate-800 rounded-xl hover:scale-105 transition-transform">
                                        <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                                        <span className="text-xs text-slate-600 dark:text-slate-400 text-center">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Backend Skills */}
                        <div className="glass rounded-2xl p-8 hover-glow">
                            <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-white">
                                <span className="gradient-text">Backend</span> Skills
                            </h3>
                            <div className="grid grid-cols-4 gap-4">
                                {backendSkills.map((skill) => (
                                    <div key={skill.name} className="flex flex-col items-center gap-2 p-3 bg-sky-50 dark:bg-slate-800 rounded-xl hover:scale-105 transition-transform">
                                        <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                                        <span className="text-xs text-slate-600 dark:text-slate-400 text-center">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Database Skills */}
                        <div className="glass rounded-2xl p-8 hover-glow">
                            <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-white">
                                <span className="gradient-text">Database</span> Skills
                            </h3>
                            <div className="grid grid-cols-4 gap-4">
                                {databaseSkills.map((skill) => (
                                    <div key={skill.name} className="flex flex-col items-center gap-2 p-3 bg-sky-50 dark:bg-slate-800 rounded-xl hover:scale-105 transition-transform">
                                        <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                                        <span className="text-xs text-slate-600 dark:text-slate-400 text-center">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;