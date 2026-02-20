import React, { useState, useEffect } from 'react';
import cvIcon from '../assets/cv.png';
import prvIcon from '../assets/prv.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'experience', 'connect'];
            const scrollPosition = window.scrollY + 100; // Offset for navbar height

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinkClasses = (section) => `
        no-underline text-base font-normal transition-colors duration-300
        ${activeSection === section ? 'text-[#fd5108]' : 'text-white/70 hover:text-[#fd5108]/70'}
    `;

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-transparent font-sans box-border px-10 py-5 max-md:p-5 max-lg:px-5 pointer-events-none">
            <div className="w-full max-w-6xl flex justify-between items-center mx-auto pointer-events-auto">
                <a href="#" className="flex items-center no-underline">
                    <img src={prvIcon} alt="PRV." className="h-[40px] md:h-[100px] w-auto object-contain transition-all duration-300" />
                </a>

                {/* Right Side Group: Menu + Button */}
                <div className="flex items-center gap-4">
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center bg-white/5 backdrop-blur-2xl px-[30px] h-[54px] rounded-[50px] border border-white/20 gap-[30px] shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                        <a href="#home" className={navLinkClasses('home')}>Home</a>
                        <a href="#about" className={navLinkClasses('about')}>About</a>
                        <a href="#skills" className={navLinkClasses('skills')}>Skills</a>
                        <a href="#experience" className={navLinkClasses('experience')}>Experience</a>
                        <a href="#connect" className={navLinkClasses('connect')}>Connect</a>
                    </div>

                    <div className="flex items-center">
                        <button className="flex items-center gap-[6px] md:gap-[10px] bg-[#050505]/70 md:bg-white/5 backdrop-blur-md border-[#333] md:border-[#fd5108]/50 border rounded-[30px] px-3 md:px-5 h-[36px] md:h-[54px] text-white cursor-pointer text-xs md:text-sm font-medium transition-all duration-300 pointer-events-auto shadow-[0_4px_10px_rgba(0,0,0,0.5)] md:bg-transparent md:shadow-none hover:bg-[#050505] hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] md:hover:bg-[#fd5108]/20 md:hover:border-[#fd5108] md:hover:shadow-[0_0_20px_rgba(253,81,8,0.3)]">
                            <img src={cvIcon} alt="Resume" className="w-[18px] h-[18px] md:w-[26px] md:h-[26px] object-contain invert" />
                            <span className="text-left leading-[1.2] hidden md:block">
                                View<br />Resume
                            </span>
                            <span className="md:hidden font-semibold tracking-wide">CV</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Bottom Navbar (Pill) */}
            <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[85%] max-w-[320px] h-[60px] bg-[#141414]/90 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-between px-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-50 pointer-events-auto">
                <a href="#home" className={`flex flex-col items-center justify-center transition-colors duration-300 ${activeSection === 'home' ? 'text-white' : 'text-white/40 hover:text-white/80'}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </a>

                <a href="#about" className={`flex flex-col items-center justify-center transition-colors duration-300 ${activeSection === 'about' || activeSection === 'skills' ? 'text-white' : 'text-white/40 hover:text-white/80'}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                </a>

                <a href="#experience" className={`flex flex-col items-center justify-center transition-colors duration-300 ${activeSection === 'experience' ? 'text-white' : 'text-white/40 hover:text-white/80'}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                </a>

                <a href="#connect" className={`flex flex-col items-center justify-center transition-colors duration-300 ${activeSection === 'connect' ? 'text-white' : 'text-white/40 hover:text-white/80'}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                </a>
            </div>
        </nav >
    );
};

export default Navbar;
