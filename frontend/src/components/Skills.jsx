import React from 'react';

const skillCategories = [
    {
        title: 'Frontend',
        icon: '🎨',
        color: '#fd5108',
        skills: [
            { name: 'React', level: 90 },
            { name: 'JavaScript', level: 88 },
            { name: 'HTML & CSS', level: 92 },
            { name: 'Tailwind CSS', level: 85 },
        ],
    },
    {
        title: 'Backend',
        icon: '⚙️',
        color: '#fd5108',
        skills: [
            { name: 'Node.js', level: 78 },
            { name: 'Python', level: 82 },
            { name: 'Express.js', level: 75 },
            { name: 'REST APIs', level: 85 },
        ],
    },
    {
        title: 'AI / ML',
        icon: '🤖',
        color: '#fd5108',
        skills: [
            { name: 'TensorFlow', level: 70 },
            { name: 'Data Annotation', level: 88 },
            { name: 'Scikit-Learn', level: 65 },
            { name: 'Prompt Engineering', level: 80 },
        ],
    },
    {
        title: 'Cybersecurity',
        icon: '🔐',
        color: '#fd5108',
        skills: [
            { name: 'Network Security', level: 72 },
            { name: 'CTF / Pentesting', level: 68 },
            { name: 'Vulnerability Assessment', level: 70 },
            { name: 'OSINT', level: 65 },
        ],
    },
    {
        title: 'Tools & DevOps',
        icon: '🛠️',
        color: '#fd5108',
        skills: [
            { name: 'Git & GitHub', level: 90 },
            { name: 'VS Code', level: 95 },
            { name: 'Linux', level: 75 },
            { name: 'Docker', level: 60 },
        ],
    },
    {
        title: 'Databases',
        icon: '🗄️',
        color: '#fd5108',
        skills: [
            { name: 'MongoDB', level: 78 },
            { name: 'MySQL', level: 72 },
            { name: 'Firebase', level: 70 },
            { name: 'PostgreSQL', level: 60 },
        ],
    },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="min-h-screen w-full flex items-center justify-center pt-[100px] md:pt-[120px] pb-20 px-5 md:px-20 relative z-10 border-t border-white/5 overflow-hidden"
        >
            {/* Decorative blobs */}
            <div className="absolute top-[15%] left-[5%] w-72 h-72 rounded-full border border-[#fd5108]/10 bg-[radial-gradient(circle_at_center,rgba(253,81,8,0.06)_0%,transparent_70%)] animate-[float_7s_ease-in-out_infinite] -z-10 blur-sm pointer-events-none" />
            <div className="absolute bottom-[10%] right-[8%] w-96 h-96 rounded-full border border-white/5 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)] animate-[floatReverse_9s_ease-in-out_infinite] -z-10 blur-md pointer-events-none" />

            <div className="max-w-6xl w-full mx-auto flex flex-col items-center">

                {/* Section Header */}
                <div className="w-full mb-16 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 animate-[fadeInUp_1s_ease-out_both]">
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-[1px] w-16 bg-gradient-to-r from-[#fd5108] to-transparent" />
                            <span className="text-[#fd5108] text-sm font-semibold uppercase tracking-widest">
                                Skills
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            My Tech <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fd5108] to-orange-400">
                                Arsenal.
                            </span>
                        </h2>
                    </div>
                    <p className="text-white/50 max-w-md text-lg font-light leading-relaxed">
                        A curated look at the tools and technologies I use to bring ideas from concept to code.
                    </p>
                </div>

                {/* Skill Cards Grid */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, catIndex) => (
                        <div
                            key={category.title}
                            className="group relative w-full animate-[fadeInUp_0.6s_ease-out_both]"
                            style={{ animationDelay: `${catIndex * 0.1}s` }}
                        >
                            {/* Hover glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#fd5108]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl pointer-events-none" />

                            <div className="relative w-full p-6 rounded-2xl bg-[#050505]/60 border border-white/10 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-[#fd5108]/40 hover:translate-y-[-4px]">
                                {/* Card Header */}
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="text-2xl">{category.icon}</span>
                                    <h3 className="text-white text-lg font-bold tracking-wide">
                                        {category.title}
                                    </h3>
                                </div>

                                {/* Skill Bars */}
                                <div className="flex flex-col gap-4">
                                    {category.skills.map((skill) => (
                                        <div key={skill.name}>
                                            <div className="flex justify-between items-center mb-1.5">
                                                <span className="text-white/80 text-sm font-medium">
                                                    {skill.name}
                                                </span>
                                                <span className="text-[#fd5108] text-xs font-mono">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <div className="h-[3px] w-full rounded-full bg-white/10">
                                                <div
                                                    className="h-full rounded-full bg-gradient-to-r from-[#fd5108] to-orange-400 transition-all duration-700"
                                                    style={{ width: `${skill.level}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
