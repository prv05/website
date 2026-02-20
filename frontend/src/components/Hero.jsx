import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import mailIcon from '../assets/mail.png';
import boltIcon from '../assets/bolt.png';
import avatar from '../assets/avatar.png';
import reactIcon from '../assets/react.svg';
import htmlIcon from '../assets/HTML5.png';
import cssIcon from '../assets/CSS3.png';
import jsIcon from '../assets/Node.js.png';
import figmaIcon from '../assets/Figma.png';
import cppIcon from '../assets/C++ (CPlusPlus).png';
import pythonIcon from '../assets/Python.png';
import javaIcon from '../assets/Java.png';
import gitIcon from '../assets/Git.png';
import cIcon from '../assets/C.png';
import dockerIcon from '../assets/Docker.png';
import githubIcon from '../assets/GitHub.png';
import postgresIcon from '../assets/PostgresSQL.png';
import awsIcon from '../assets/AWS.png';
import googleCloudIcon from '../assets/Google Cloud.png';
import viteIcon from '../assets/Vite.js.png';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen px-10 overflow-hidden font-sans pb-[150px] md:pb-24">

            {/* Background Elements */}
            {/* Top Right Bolt */}
            <img src={boltIcon} alt="Bolt" className="absolute -top-24 right-0 w-64 h-auto opacity-70 z-[60] pointer-events-none rotate-[360deg] mix-blend-screen" />
            {/* Bottom Left Bolt */}
            <img src={boltIcon} alt="Bolt" className="absolute -bottom-[100px] -left-10 w-80 h-auto opacity-60 z-0 pointer-events-none rotate-[20deg] mix-blend-screen" />

            <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between min-h-[100vh]">
                {/* Left Content */}
                <div className="w-full md:w-1/2 z-10 flex flex-col justify-center items-start gap-4 mt-20 md:mt-0 md:pt-16 pb-12 md:pb-0">
                    <h2 className="text-xl md:text-2xl font-light text-white">
                        Hey, I am <span className="text-[#fd5108] font-bold">Pratham</span>
                    </h2>
                    <h1 className="text-3xl lg:text-5xl font-normal text-white leading-tight min-h-[40px] md:min-h-[72px]">
                        <Typewriter
                            words={['B.Tech Computer Science', 'AI/ML Enthusiast', 'Full Stack Developer', 'Cloud Engineer', 'Blockchain Developer']}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={100}
                            deleteSpeed={80}
                            delaySpeed={1500}
                        />
                    </h1>
                    <p className="text-white/60 text-base md:text-lg max-w-lg leading-relaxed">
                        Enthusiastic and detail-oriented B.Tech (Hons.) CSE student at RV University, Bangalore, with a specialization in Cloud-Computing and a minor in Fintech. Experienced in Blockchain, Full Stack Development, and Machine Learning.
                    </p>

                    <div className="flex items-center gap-5 mt-3">
                        <button className="bg-[#fd5108]/20 text-white px-8 py-3 rounded-full font-medium text-lg backdrop-blur-xl border border-[#fd5108]/50 hover:bg-[#fd5108] hover:border-transparent transition-all duration-300 shadow-[0_0_30px_rgba(253,81,8,0.2)] hover:shadow-[0_0_40px_rgba(253,81,8,0.6)]">
                            Hire me
                        </button>
                        <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                            <img src={mailIcon} alt="Mail" className="w-5 h-5 invert opacity-80" />
                        </button>
                    </div>

                    <div className="w-full h-[1px] bg-gray-500/30 mt-4"></div>

                    {/* Testimonial Card */}
                    <div className="mt-12 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4 max-w-sm">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                                {/* Placeholder for testimonial avatar */}
                                <img src="https://ui-avatars.com/api/?name=Xyz&background=random" alt="User" />
                            </div>
                            <div className="absolute -bottom-1 -right-1 bg-[#fd5108] w-4 h-4 rounded-full border-2 border-[#050505]"></div>
                        </div>
                        <div>
                            <p className="text-white/80 text-xs italic">"Get to know more about my journey, skills, and experience"</p>
                            <div className="mt-1">
                                <h4 className="text-white text-sm font-semibold">Xyz,xyz</h4>
                                <p className="text-white/40 text-[10px]">RV University Faculty</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Content - Profile & Static Circles */}
                {/* Right Content - Profile & Static Circles */}
                <div className="w-full md:w-1/2 relative flex justify-end items-end z-10 min-h-[350px] md:min-h-[500px] md:h-full flex-1 pointer-events-none md:-mr-10 lg:-mr-20 -mt-20 md:mt-0">
                    <div className="relative flex justify-center items-end w-full h-full max-w-lg md:max-w-xl lg:max-w-2xl translate-y-[80px] md:translate-y-[150px]">

                        {/* Static Circles with Icons */}
                        {/* Animated Circles with Icons */}
                        <div className="absolute inset-0 flex items-center justify-center translate-y-20">
                            {/* Inner Circle - Java, C, Python, C++ */}
                            <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] border border-white rounded-full flex items-center justify-center animate-circular-ccw">
                                {/* Java - Right Top (45deg) */}
                                <div className="absolute inset-0 rotate-[45deg]">
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10">
                                        <div className="w-full h-full animate-circular-cw">
                                            <img src={javaIcon} alt="Java" className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] -rotate-[45deg]" />
                                        </div>
                                    </div>
                                </div>
                                {/* C - Right Mid (90deg) */}
                                <div className="absolute inset-0 rotate-90">
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10">
                                        <div className="w-full h-full animate-circular-cw">
                                            <img src={cIcon} alt="C" className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] -rotate-90" />
                                        </div>
                                    </div>
                                </div>
                                {/* Python - Left Mid (270deg) */}
                                <div className="absolute inset-0 rotate-[270deg]">
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10">
                                        <div className="w-full h-full animate-circular-cw">
                                            <img src={pythonIcon} alt="Python" className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] -rotate-[270deg]" />
                                        </div>
                                    </div>
                                </div>
                                {/* C++ - Left Top (315deg) - using cppIcon */}
                                <div className="absolute inset-0 rotate-[315deg]">
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10">
                                        <div className="w-full h-full animate-circular-cw">
                                            <img src={cppIcon} alt="C++" className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] -rotate-[315deg]" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Middle Circle - GitHub, Git, Docker, AWS, Google Cloud */}
                            <div className="absolute w-[500px] h-[500px] md:w-[650px] md:h-[650px] border border-white/50 rounded-full flex items-center justify-center animate-circular-cw">
                                {/* GitHub - Right Top (30deg) */}
                                <div className="absolute inset-0 rotate-[30deg]">
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8">
                                        <div className="w-full h-full animate-circular-ccw">
                                            <img src={githubIcon} alt="GitHub" className="w-full h-full invert object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] -rotate-[30deg]" />
                                        </div>
                                    </div>
                                </div>
                                {/* Git - Right Mid (70deg) */}
                                <div className="absolute inset-0 rotate-[70deg]">
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8">
                                        <div className="w-full h-full animate-circular-ccw">
                                            <img src={gitIcon} alt="Git" className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] -rotate-[70deg]" />
                                        </div>
                                    </div>
                                </div>
                                {/* Docker - Right Bottom (110deg) */}
                                <div className="absolute inset-0 rotate-[110deg]">
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8">
                                        <div className="w-full h-full animate-circular-ccw">
                                            <img src={dockerIcon} alt="Docker" className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] -rotate-[110deg]" />
                                        </div>
                                    </div>
                                </div>
                                {/* AWS - Left Bottom (250deg) */}
                                <div className="absolute inset-0 rotate-[250deg]">
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8">
                                        <div className="w-full h-full animate-circular-ccw">
                                            <img src={awsIcon} alt="AWS" className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] -rotate-[250deg]" />
                                        </div>
                                    </div>
                                </div>
                                {/* Google Cloud - Left Top (290deg) */}
                                <div className="absolute inset-0 rotate-[290deg]">
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8">
                                        <div className="w-full h-full animate-circular-ccw">
                                            <img src={googleCloudIcon} alt="Google Cloud" className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] -rotate-[290deg]" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Outer Circle - React, HTML, CSS, Node.js, Figma, Vite.js */}
                            <div className="absolute w-[650px] h-[650px] md:w-[800px] md:h-[800px] border border-white/20 rounded-full flex items-center justify-center animate-circular-ccw">
                                {/* React - Top (0deg) */}
                                <div className="absolute inset-0 rotate-0">
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10">
                                        <div className="w-full h-full animate-circular-cw">
                                            <img src={reactIcon} alt="React" className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] -rotate-0" />
                                        </div>
                                    </div>
                                </div>
                                {/* HTML - Top Right (60deg) */}
                                <div className="absolute inset-0 rotate-[60deg]">
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8">
                                        <div className="w-full h-full animate-circular-cw">
                                            <img src={htmlIcon} alt="HTML" className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] -rotate-[60deg]" />
                                        </div>
                                    </div>
                                </div>
                                {/* CSS - Bottom Right (120deg) */}
                                <div className="absolute inset-0 rotate-[120deg]">
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8">
                                        <div className="w-full h-full animate-circular-cw">
                                            <img src={cssIcon} alt="CSS" className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] -rotate-[120deg]" />
                                        </div>
                                    </div>
                                </div>
                                {/* Node.js - Bottom (180deg) */}
                                <div className="absolute inset-0 rotate-180">
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8">
                                        <div className="w-full h-full animate-circular-cw">
                                            <img src={jsIcon} alt="Node.js" className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] -rotate-180" />
                                        </div>
                                    </div>
                                </div>
                                {/* Figma - Bottom Left (240deg) */}
                                <div className="absolute inset-0 rotate-[240deg]">
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8">
                                        <div className="w-full h-full animate-circular-cw">
                                            <img src={figmaIcon} alt="Figma" className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] -rotate-[240deg]" />
                                        </div>
                                    </div>
                                </div>
                                {/* Vite - Top Left (300deg) */}
                                <div className="absolute inset-0 rotate-[300deg]">
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8">
                                        <div className="w-full h-full animate-circular-cw">
                                            <img src={viteIcon} alt="Vite" className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] -rotate-[300deg]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Avatar Image */}
                        <img
                            src={avatar}
                            alt="Pratham"
                            className="relative z-20 w-auto h-[50vh] md:h-[80vh] object-contain object-bottom drop-shadow-[0_0_50px_rgba(253,81,8,0.3)] contrast-125 brightness-110"
                        />
                    </div>
                </div>
            </div>

            {/* Footer inside Home Page */}
            <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-[#050505]/50 backdrop-blur-md py-6 px-10 text-white/70 z-[100]">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-[13px] md:text-[15px] font-medium tracking-wide">
                        All rights reserved Pratham Vernekar
                    </div>
                    <div className="flex items-center gap-6">
                        {/* GitHub */}
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#fd5108] hover:-translate-y-1 transition-all duration-300" aria-label="GitHub">
                            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </a>

                        {/* LinkedIn */}
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#fd5108] hover:-translate-y-1 transition-all duration-300" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>

                        {/* LeetCode */}
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#fd5108] hover:-translate-y-1 transition-all duration-300" aria-label="LeetCode">
                            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="16 18 22 12 16 6"></polyline>
                                <polyline points="8 6 2 12 8 18"></polyline>
                            </svg>
                        </a>

                        {/* Discord */}
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#fd5108] hover:-translate-y-1 transition-all duration-300" aria-label="Discord">
                            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="9" cy="12" r="1.5" fill="currentColor"></circle>
                                <circle cx="15" cy="12" r="1.5" fill="currentColor"></circle>
                                <path d="M7.5 16.5c1.5 1 4 1 5.5 1s4-1 5.5-1"></path>
                                <path d="M21 8c-3-2-6-2-9-2s-6 0-9 2"></path>
                                <path d="M5 8v6c0 3 2 5 5 5h4c3 0 5-2 5-5V8"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
