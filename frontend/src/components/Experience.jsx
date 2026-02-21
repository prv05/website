import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="min-h-screen w-full flex items-center justify-center pt-[100px] md:pt-[120px] pb-20 px-5 md:px-20 relative z-10 border-t border-white/5 overflow-hidden">
            {/* Animated Decorative Elements */}
            <div className="absolute top-[20%] right-[10%] w-64 h-64 rounded-full border border-[#fd5108]/10 bg-[radial-gradient(circle_at_center,rgba(253,81,8,0.05)_0%,transparent_70%)] animate-[float_6s_ease-in-out_infinite] -z-10 blur-sm pointer-events-none"></div>
            <div className="absolute bottom-[20%] left-[5%] w-96 h-96 rounded-full border border-white/5 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)] animate-[floatReverse_8s_ease-in-out_infinite] -z-10 blur-md pointer-events-none"></div>

            <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
                {/* Section Header */}
                <div className="w-full mb-16 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 animate-[fadeInUp_1s_ease-out_both]">
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-[1px] w-16 bg-gradient-to-r from-[#fd5108] to-transparent"></div>
                            <span className="text-[#fd5108] text-sm font-semibold uppercase tracking-widest">Experience</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Professional <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fd5108] to-orange-400">Chapters.</span>
                        </h2>
                    </div>
                    <p className="text-white/50 max-w-md text-lg font-light leading-relaxed">
                        A detailed look at my professional journey, internships, roles, and the impact I've made along the way.
                    </p>
                </div>

                {/* Main Content Area */}
                <div className="w-full flex justify-center">
                    {/* Temporary Placeholder for the content (will be replaced by full design later if needed, but per the prompt, adding features as I like) */}
                    <div className="w-full max-w-4xl space-y-8">
                        {/* Experience Card 1 */}
                        <div className="w-full group relative animate-[fadeInUp_0.6s_ease-out_both_0.15s]">
                            {/* Hover glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#fd5108]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl"></div>

                            <div className="relative w-full p-8 md:p-10 rounded-3xl bg-[#050505]/60 border border-white/10 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-[#fd5108]/50 hover:translate-y-[-5px]">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                                            Intern
                                            <span className="px-2 py-1 rounded border border-[#fd5108]/30 bg-[#fd5108]/10 text-[#fd5108] text-xs font-mono uppercase tracking-widest">Active</span>
                                        </h3>
                                        <p className="text-white/60 text-lg mt-1 font-medium">Bhatiyani Astute Intelligence, Bangalore</p>
                                    </div>
                                    <div className="text-white/40 font-mono text-sm px-4 py-2 rounded-full border border-white/10 bg-white/5 whitespace-nowrap">
                                        Oct 2025 - Present
                                    </div>
                                </div>
                                <div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent mb-6"></div>
                                <ul className="text-white/70 space-y-3 font-light leading-relaxed list-none pl-0">
                                    <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#fd5108]">
                                        Developing and optimizing AI-driven data annotation pipelines for complex machine learning models.
                                    </li>
                                    <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#fd5108]">
                                        Collaborating with cross-functional teams to ensure high-quality dataset generation and validation.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Experience Card 2 */}
                        <div className="w-full group relative animate-[fadeInUp_0.6s_ease-out_both_0.3s]">
                            {/* Hover glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl"></div>

                            <div className="relative w-full p-8 md:p-10 rounded-3xl bg-[#050505]/40 border border-white/5 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-[#050505]/60 hover:translate-y-[-5px]">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                                            Cyber Internship
                                        </h3>
                                        <p className="text-white/60 text-lg mt-1 font-medium">RV University, Bangalore</p>
                                    </div>
                                    <div className="text-white/40 font-mono text-sm px-4 py-2 rounded-full border border-white/10 bg-white/5 whitespace-nowrap">
                                        Jun 2024 - Aug 2024
                                    </div>
                                </div>
                                <div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent mb-6"></div>
                                <ul className="text-white/70 space-y-3 font-light leading-relaxed list-none pl-0">
                                    <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-white/40 group-hover:before:bg-white/80 transition-colors">
                                        Researched and implemented essential cybersecurity protocols and vulnerability assessment tools.
                                    </li>
                                    <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-white/40 group-hover:before:bg-white/80 transition-colors">
                                        Participated in capture-the-flag (CTF) events and simulated network defense scenarios.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
