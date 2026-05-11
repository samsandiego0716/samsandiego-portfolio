import ScrollReveal from '../components/ScrollReveal';

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
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Firebase', icon: 'https://img.icons8.com/color/96/firebase.png' },
    ];

    const SkillGrid = ({ skills }: { skills: { name: string; icon: string }[] }) => (
        <div className="grid grid-cols-4 gap-4">
            {skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center gap-2 p-3 bg-[#b8f2e6]/5 rounded-xl hover:bg-[#b8f2e6]/15 hover:scale-105 transition-all duration-300 border border-transparent hover:border-[#b8f2e6]/20">
                    <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                    <span className="text-xs text-[#5e6472] text-center">{skill.name}</span>
                </div>
            ))}
        </div>
    );

    return (
        <section id="about" className="min-h-screen py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#fafafa]">
                            About <span className="gradient-text">Me</span>
                        </h1>
                        <p className="text-[#5e6472] max-w-2xl mx-auto">
                            Get to know me better and discover my journey in the world of development
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <ScrollReveal variant="fadeLeft" delay={100}>
                        <div className="bg-[#1c1c1c]/80 backdrop-blur-sm rounded-2xl p-8 border border-[#b8f2e6]/20 card-hover">
                            <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden border-2 border-[#b8f2e6]/30">
                                <img src="/about-photo.png" alt="Sam San Diego" className="w-full h-full object-cover" />
                            </div>
                            <h2 className="text-2xl font-bold text-center mb-4 text-[#fafafa]">Sam San Diego</h2>
                            <p className="text-[#b8f2e6] text-center mb-6">Full Stack Developer</p>
                            <p className="text-[#fafafa]/70 leading-relaxed text-justify">
                                I am <strong className="text-[#fafafa]">Sam San Diego</strong>, a passionate web developer and aspiring <strong className="text-[#fafafa]">full-stack developer</strong>. I am studying well about developing websites and others.
                            </p>
                            <p className="text-[#fafafa]/70 leading-relaxed mt-4 text-justify">
                                I am currently studying at Bestlink College of the Philippines with a Bachelor of Science in Information Technology course. I love creating systems that have an impact on our lives.
                            </p>
                            <p className="text-[#fafafa]/70 leading-relaxed mt-4 text-justify">
                                When I'm not coding, you can find me exploring new technologies, doing graphic design commissions, or playing online games.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="space-y-6">
                        <ScrollReveal variant="fadeRight" delay={200}>
                            <div className="bg-[#1c1c1c]/80 backdrop-blur-sm rounded-2xl p-8 border border-[#b8f2e6]/20 card-hover">
                                <h3 className="text-xl font-bold mb-6 text-[#fafafa]"><span className="gradient-text">Frontend</span> Skills</h3>
                                <SkillGrid skills={frontendSkills} />
                            </div>
                        </ScrollReveal>
                        <ScrollReveal variant="fadeRight" delay={300}>
                            <div className="bg-[#1c1c1c]/80 backdrop-blur-sm rounded-2xl p-8 border border-[#b8f2e6]/20 card-hover">
                                <h3 className="text-xl font-bold mb-6 text-[#fafafa]"><span className="gradient-text">Backend</span> Skills</h3>
                                <SkillGrid skills={backendSkills} />
                            </div>
                        </ScrollReveal>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;