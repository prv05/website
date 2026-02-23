import React, { useEffect, useState } from 'react';

const Connect = () => {
    // Generate 25 random icons for the background
    const [bgIcons, setBgIcons] = useState([]);

    useEffect(() => {
        const svgPaths = [
            '<path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />', // Link
            '<path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />', // Mail
            '<path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />', // Chat
            '<path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />', // Globe
        ];

        const generatedIcons = Array.from({ length: 25 }).map((_, i) => ({
            id: i,
            path: svgPaths[Math.floor(Math.random() * svgPaths.length)],
            size: Math.random() * 24 + 16, // Width/height between 16px and 40px
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 10 + 10}s`, // Between 10s and 20s
            animationDelay: `-${Math.random() * 20}s`, // Start staggered
            isReverse: Math.random() > 0.5,
            opacity: Math.random() * 0.4 + 0.1, // Opacity between 0.1 and 0.5
            color: Math.random() > 0.5 ? '#fd5108' : '#ffffff'
        }));

        setBgIcons(generatedIcons);
    }, []);

    return (
        <section id="connect" className="min-h-screen w-full flex items-center justify-center pt-[100px] md:pt-[125px] pb-20 px-5 md:px-20 relative z-10 border-t border-white/5 overflow-hidden">
            {/* Animated Decorative Elements */}
            <div className="absolute top-[10%] left-[10%] w-72 h-72 rounded-full border border-[#fd5108]/10 bg-[radial-gradient(circle_at_center,rgba(253,81,8,0.05)_0%,transparent_70%)] animate-[float_8s_ease-in-out_infinite] -z-10 blur-sm pointer-events-none"></div>
            <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full border border-white/5 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)] animate-[floatReverse_10s_ease-in-out_infinite] -z-10 blur-md pointer-events-none"></div>

            {/* Interactive Motion Icons (Randomized) */}
            {bgIcons.map((icon) => (
                <div
                    key={icon.id}
                    className="absolute -z-10 pointer-events-none"
                    style={{
                        top: icon.top,
                        left: icon.left,
                        color: icon.color,
                        opacity: icon.opacity,
                        animation: `${icon.isReverse ? 'floatReverse' : 'float'} ${icon.animationDuration} ease-in-out infinite`,
                        animationDelay: icon.animationDelay
                    }}
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        style={{ width: `${icon.size}px`, height: `${icon.size}px` }}
                        dangerouslySetInnerHTML={{ __html: icon.path }}
                    />
                </div>
            ))}

            <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
                {/* Section Header */}
                <div className="w-full mb-16 flex flex-col items-center justify-center text-center gap-4 animate-[fadeInUp_0.6s_ease-out_both]">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#fd5108]"></div>
                        <span className="text-[#fd5108] text-sm font-semibold uppercase tracking-widest">Connect</span>
                        <div className="h-[1px] w-12 bg-gradient-to-r from-[#fd5108] to-transparent"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        Let's Build Something <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fd5108] to-orange-400">Great Together.</span>
                    </h2>
                    <p className="text-white/50 max-w-lg text-lg font-light leading-relaxed mt-4">
                        Feel free to reach out for collaborations, opportunities, or just to say hello. I'm always open to discussing new projects and creative ideas.
                    </p>
                </div>

                {/* Main Content Area: Form & Socials */}
                <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Left: Contact Form */}
                    <div className="w-full lg:w-3/5 group animate-[fadeInUp_0.6s_ease-out_both_0.15s]">
                        <div className="relative w-full p-8 md:p-10 rounded-3xl bg-[#050505]/60 border border-white/10 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-[#fd5108]/30">
                            <form className="flex flex-col gap-6">
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="flex flex-col gap-2 flex-1">
                                        <label htmlFor="name" className="text-white/70 text-sm font-medium ml-1">Name</label>
                                        <input type="text" id="name" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#fd5108]/50 focus:bg-white/10 transition-all duration-300" required />
                                    </div>
                                    <div className="flex flex-col gap-2 flex-1">
                                        <label htmlFor="email" className="text-white/70 text-sm font-medium ml-1">Email</label>
                                        <input type="email" id="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#fd5108]/50 focus:bg-white/10 transition-all duration-300" required />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message" className="text-white/70 text-sm font-medium ml-1">Message</label>
                                    <textarea id="message" rows="5" placeholder="How can I help you?" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#fd5108]/50 focus:bg-white/10 transition-all duration-300 resize-none" required></textarea>
                                </div>
                                <button type="submit" className="mt-2 w-full md:w-auto self-end bg-[#fd5108] hover:bg-[#ff6929] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(253,81,8,0.3)] hover:shadow-[0_0_30px_rgba(253,81,8,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2">
                                    Send Message
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right: Social Links & Info */}
                    <div className="w-full lg:w-2/5 flex flex-col justify-center gap-8 animate-[fadeInUp_0.6s_ease-out_both_0.3s]">

                        {/* Direct Contact */}
                        <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors backdrop-blur-sm">
                            <div className="w-12 h-12 rounded-full bg-[#fd5108]/10 flex items-center justify-center text-[#fd5108] shrink-0">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-white font-medium mb-1">Email</h4>
                                <a href="mailto:prathamvernekar05@gmail.com" className="text-white/60 hover:text-[#fd5108] transition-colors text-sm">prathamvernekar05@gmail.com</a>
                            </div>
                        </div>

                        {/* Social Profile Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/pratham-vernekar" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#fd5108]/30 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white/50 group-hover:text-white transition-colors">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                <span className="text-white/70 text-sm font-medium group-hover:text-white">LinkedIn</span>
                            </a>

                            {/* GitHub */}
                            <a href="https://github.com/prv05" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#fd5108]/30 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white/50 group-hover:text-white transition-colors">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                                </svg>
                                <span className="text-white/70 text-sm font-medium group-hover:text-white">GitHub</span>
                            </a>

                            {/* Discord */}
                            <a href="https://discord.com/channels/772452141402030080/772452141402030083" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#fd5108]/30 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1 col-span-2">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white/50 group-hover:text-white transition-colors">
                                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                                </svg>
                                <span className="text-white/70 text-sm font-medium group-hover:text-white">Discord</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Connect;
