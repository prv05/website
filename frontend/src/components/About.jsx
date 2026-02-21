import React from 'react';

const About = () => {
    return (
        <section id="about" className="min-h-screen w-full flex items-center justify-center py-20 px-5 md:px-20 relative z-10 border-t border-white/5">
            <div className="max-w-6xl w-full mx-auto">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    {/* Left: Image or Graphic */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative w-80 h-[400px] md:w-[450px] md:h-[500px] rounded-3xl overflow-hidden bg-[#050505]/40 border border-white/5 shadow-[0_0_40px_rgba(253,81,8,0.15)] group backdrop-blur-sm p-6 flex flex-col pt-8">
                            <h3 className="text-[#ff6a00] text-sm font-bold uppercase tracking-widest mb-6 px-2 text-center md:text-left drop-shadow-[0_0_8px_rgba(253,140,50,0.8)]">Journey</h3>

                            {/* Masking container for the scrolling content */}
                            <div className="relative flex-1 overflow-hidden mask-image-y">
                                {/* The scrolling list */}
                                <div className="absolute top-0 left-0 w-full flex flex-col gap-10 animate-[scrollUp_25s_linear_infinite] group-hover:[animation-play-state:paused] pt-[80%] pb-10">

                                    {/* Item 1 */}
                                    <div className="relative pl-8 z-10 w-full pr-4">
                                        <div className="absolute left-[3px] top-1.5 w-2 h-2 rounded-full bg-[#fd5108] shadow-[0_0_10px_#fd5108]"></div>
                                        <div className="absolute left-[6px] top-3 bottom-[-40px] w-[1px] bg-gradient-to-b from-[#fd5108]/50 to-white/10"></div>
                                        <span className="text-white/80 text-sm font-mono tracking-wider mb-1 block">2021</span>
                                        <h4 className="text-white text-lg font-bold border-l-2 border-[#fd5108]/0 pl-0 transition-all hover:border-[#fd5108] hover:pl-2">10th Class</h4>
                                        <p className="text-white/85 text-base mt-1 whitespace-normal break-words">Rashtrotthana Vidya Kendra, Dharwad</p>
                                    </div>

                                    {/* Item 2 */}
                                    <div className="relative pl-8 z-10 w-full pr-4">
                                        <div className="absolute left-[3px] top-1.5 w-2 h-2 rounded-full bg-[#fd5108] shadow-[0_0_10px_#fd5108]"></div>
                                        <div className="absolute left-[6px] top-3 bottom-[-40px] w-[1px] bg-gradient-to-b from-[#fd5108]/50 to-white/10"></div>
                                        <span className="text-white/80 text-sm font-mono tracking-wider mb-1 block">2023</span>
                                        <h4 className="text-white text-lg font-bold border-l-2 border-[#fd5108]/0 pl-0 transition-all hover:border-[#fd5108] hover:pl-2">2nd PU</h4>
                                        <p className="text-white/85 text-base mt-1">Expert PU College, Mangalore</p>
                                    </div>

                                    {/* Item 3 */}
                                    <div className="relative pl-8 z-10 w-full pr-4">
                                        <div className="absolute left-[3px] top-1.5 w-2 h-2 rounded-full border-2 border-[#fd5108] bg-black shadow-[0_0_15px_#fd5108]"></div>
                                        <div className="absolute left-[6px] top-3 bottom-[-40px] w-[1px] bg-gradient-to-b from-white/20 to-white/10"></div>
                                        <span className="text-white/80 text-sm font-mono tracking-wider mb-1 block">2023 - 2027</span>
                                        <h4 className="text-[#fd5108] text-lg font-semibold border-l-2 border-[#fd5108]/0 pl-0 transition-all hover:border-[#fd5108] hover:pl-2">B.Tech in Computer Science</h4>
                                        <p className="text-white/85 text-base mt-1">RV University, Bangalore</p>
                                    </div>

                                    {/* Item 4 */}
                                    <div className="relative pl-8 z-10 w-full pr-4">
                                        <div className="absolute left-[3px] top-1.5 w-2 h-2 rounded-full bg-[#fd5108] shadow-[0_0_10px_#fd5108]"></div>
                                        <div className="absolute left-[6px] top-3 bottom-[-40px] w-[1px] bg-gradient-to-b from-[#fd5108]/50 to-white/10"></div>
                                        <span className="text-white/80 text-sm font-mono tracking-wider mb-1 block">Jun 2024 - Aug 2024</span>
                                        <h4 className="text-white text-lg font-bold border-l-2 border-[#fd5108]/0 pl-0 transition-all hover:border-[#fd5108] hover:pl-2">Cyber Internship</h4>
                                        <p className="text-white/85 text-base mt-1">RV University, Bangalore</p>
                                    </div>

                                    {/* Item 5 */}
                                    <div className="relative pl-8 z-10 w-full pr-4">
                                        <div className="absolute left-[2px] top-1.5 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] animate-pulse"></div>
                                        <div className="absolute left-[6px] top-4 bottom-[-40px] w-[1px] bg-gradient-to-b from-white to-transparent opacity-30"></div>
                                        <span className="text-white/80 text-sm font-mono tracking-wider mb-1 block">Oct 2025 - Present</span>
                                        <h4 className="text-[#fd5108] text-lg font-semibold flex items-center gap-2 border-l-2 border-[#fd5108]/0 pl-0 transition-all hover:border-[#fd5108] hover:pl-2">
                                            Intern
                                            <span className="px-1.5 py-0.5 rounded-md bg-white/10 text-[9px] text-white/80 border border-white/20">Active</span>
                                        </h4>
                                        <p className="text-white/80 text-base mt-1">Bhatiyani Astute Intelligence, Bangalore</p>
                                    </div>
                                </div>
                            </div>

                            {/* Fading Gradients at Top and Bottom */}
                            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#050505] to-transparent z-20 pointer-events-none rounded-t-3xl"></div>
                            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent z-20 pointer-events-none flex items-end justify-center pb-6 rounded-b-3xl">
                                <span className="text-white/50 text-[10px] tracking-widest uppercase flex items-center gap-2">
                                    <div className="w-1 h-3 rounded-full bg-white/20 animate-bounce"></div> Hover to pause
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center gap-8">
                        {/* Section Header */}
                        <div className="flex items-center gap-4">
                            <div className="h-[1px] w-16 bg-gradient-to-r from-[#fd5108] to-transparent"></div>
                            <span className="text-[#fd5108] text-sm font-semibold uppercase tracking-widest">About Me</span>
                        </div>

                        {/* Main Title */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Crafting Digital <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fd5108] to-orange-400">Experiences.</span>
                        </h2>

                        {/* Description */}
                        <p className="text-white/60 text-lg leading-relaxed font-light">
                            I am a passionate developer focused on creating intuitive, visually stunning, and highly functional web applications. With a strong foundation in modern web technologies, I naturally bridge the gap between creative design and technical engineering.
                        </p>

                        <p className="text-white/60 text-lg leading-relaxed font-light">
                            Every project is an opportunity to learn, innovate, and push boundaries. My goal is to build scalable products that provide meaningful and seamless user experiences.
                        </p>

                        {/* Stats Cards */}
                        <div className="flex flex-col sm:flex-row gap-5 mt-4">
                            <div className="p-6 rounded-2xl bg-[#050505]/50 border border-white/5 backdrop-blur-sm flex-1 transition-all duration-300 hover:border-[#fd5108]/30 hover:bg-white/5 hover:translate-y-[-5px]">
                                <h4 className="text-4xl font-bold text-white mb-2">3+</h4>
                                <p className="text-white/40 text-sm uppercase tracking-wider font-medium">Years Experience</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-[#050505]/50 border border-white/5 backdrop-blur-sm flex-1 transition-all duration-300 hover:border-[#fd5108]/30 hover:bg-white/5 hover:translate-y-[-5px]">
                                <h4 className="text-4xl font-bold text-white mb-2">20+</h4>
                                <p className="text-white/40 text-sm uppercase tracking-wider font-medium">Projects Completed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
