import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';

// Import icons
import awsIcon from '../assets/AWS.png';
import cppIcon from '../assets/C++ (CPlusPlus).png';
import cIcon from '../assets/C.png';
import cssIcon from '../assets/CSS3.png';
import dockerIcon from '../assets/Docker.png';
import figmaIcon from '../assets/Figma.png';
import flaskIcon from '../assets/Flask.png';
import gitIcon from '../assets/Git.png';
import githubIcon from '../assets/GitHub.png';
import gcpIcon from '../assets/Google Cloud.png';
import htmlIcon from '../assets/HTML5.png';
import javaIcon from '../assets/Java.png';
import nodeIcon from '../assets/Node.js.png';
import postgresIcon from '../assets/PostgresSQL.png';
import pythonIcon from '../assets/Python.png';
import reactIcon from '../assets/React.png';

const skillsCategories = [
    {
        title: "Programming Languages",
        skills: [
            { name: 'C', icon: cIcon },
            { name: 'C++', icon: cppIcon },
            { name: 'Python', icon: pythonIcon },
            { name: 'Java', icon: javaIcon },
        ]
    },
    {
        title: "Fullstack",
        skills: [
            { name: 'HTML5', icon: htmlIcon },
            { name: 'CSS3', icon: cssIcon },
            { name: 'React', icon: reactIcon },
            { name: 'Node.js', icon: nodeIcon },
            { name: 'Flask', icon: flaskIcon },
        ]
    },
    {
        title: "Cloud & DevOps",
        skills: [
            { name: 'PostgreSQL', icon: postgresIcon },
            { name: 'Docker', icon: dockerIcon },
            { name: 'AWS', icon: awsIcon },
            { name: 'Google Cloud', icon: gcpIcon },
            { name: 'Git', icon: gitIcon },
            { name: 'GitHub', icon: githubIcon },
            { name: 'Figma', icon: figmaIcon }
        ]
    }
];

// Flat array needed for initial GSAP animations reference easily
const allSkillsFlat = skillsCategories.flatMap(cat => cat.skills);

const Skills = () => {
    const containerRef = useRef(null);
    const gridRef = useRef(null);
    const audioCtxRef = useRef(null);
    const [animationComplete, setAnimationComplete] = useState(false);
    const iconsRef = useRef([]);

    // Initialize Web Audio API context on first interaction or mount
    useEffect(() => {
        // We create it but might need user interaction to fully resume it in some browsers
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
            audioCtxRef.current = new AudioContext();
        }
    }, []);

    const playCoinSound = useCallback(() => {
        if (!audioCtxRef.current) return;

        // Resume context if suspended (browser policy)
        if (audioCtxRef.current.state === 'suspended') {
            audioCtxRef.current.resume();
        }

        const ctx = audioCtxRef.current;
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gainNode = ctx.createGain();

        // High frequency triangle waves sound more like metal
        osc1.type = 'triangle';
        osc2.type = 'sine';

        // Frequencies for a metallic "clink"
        osc1.frequency.setValueAtTime(4000 + Math.random() * 500, ctx.currentTime);
        osc2.frequency.setValueAtTime(6000 + Math.random() * 500, ctx.currentTime);

        // Very sharp attack and fast decay
        gainNode.gain.setValueAtTime(0, ctx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

        osc1.connect(gainNode);
        osc2.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc1.start();
        osc2.start();
        osc1.stop(ctx.currentTime + 0.1);
        osc2.stop(ctx.currentTime + 0.1);
    }, []);

    useEffect(() => {
        // Wait briefly for refs to populate on first render
        const icons = iconsRef.current.filter(Boolean);
        if (!icons || icons.length === 0) return;

        // Reset state for hot reloads
        gsap.killTweensOf(icons);
        setAnimationComplete(false);

        // Get viewport dimensions
        const vh = window.innerHeight;
        const vw = window.innerWidth;

        // Setup initial "falling" stage - randomize positions at the bottom
        icons.forEach((icon) => {
            // Start way above the screen
            gsap.set(icon, {
                y: -vh - 200,
                x: (Math.random() - 0.5) * vw * 0.8, // Random horizontal position within 80% of width
                rotation: Math.random() * 360,
                scale: 0.8 + Math.random() * 0.4, // Random scale
                opacity: 0,
                position: 'absolute',
                top: vh / 2, // Centered vertically to start
                left: '50%', // Centered horizontally
                xPercent: -50,
                yPercent: -50,
            });
        });

        // Create the timeline
        const tl = gsap.timeline({
            onComplete: () => {
                setAnimationComplete(true);
            }
        });

        // 1. Rainfall Animation (Staggered drops)
        tl.to(icons, {
            y: () => (vh * 0.5) - 100 - (Math.random() * 150), // Landing safely above the bottom of the screen
            opacity: 1,
            rotation: () => Math.random() * 360, // Spin while falling
            duration: 1.5,
            ease: "bounce.out",
            stagger: {
                amount: 2, // Spread the drops over 2 seconds
                onStart: function () {
                    // This creates the coin sound as each one starts falling/hits
                    playCoinSound();
                }
            }
        });

        // 2. Wait 5 seconds
        tl.to({}, { duration: 5 });

        // 3. Align to Grid
        // To animate to grid smoothly, we calculate the bounds of the grid cells
        // Since it's tricky to animate from absolute layout to CSS Grid layout seamlessly,
        // we'll animate them into a neat formation manually or use Flip (if available).
        // For simplicity and robust GSAP without Flip plugin: we move them into a central block

        tl.to(icons, {
            y: 0,
            x: 0, // Reset transformations as we'll rely on CSS grid positioning eventually
            rotation: 0,
            scale: 1,
            position: 'relative',
            top: 'auto',
            left: 'auto',
            xPercent: 0,
            yPercent: 0,
            duration: 0.8,
            ease: "power3.inOut",
            stagger: 0.05,
            clearProps: "all" // Clear absolute positioning to let CSS Grid take over
        }, "+=0.1");

        return () => {
            tl.kill(); // Cleanup on unmount
        };
    }, [playCoinSound]);

    return (
        <section id="skills" className="relative min-h-screen w-full flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden" ref={containerRef}>

            <div className="z-10 w-full max-w-6xl mx-auto px-6 mb-12 relative text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                    Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fd5108] to-[#ff8c00]">Expertise</span>
                </h2>
                <p className="text-white/60 text-lg max-w-2xl px-1">
                    A comprehensive overview of the technologies and tools I've mastered.
                </p>
                {/* Visual hint for waiting */}
                {!animationComplete && (
                    <div className="absolute left-6 -bottom-8 text-white/40 text-sm animate-pulse whitespace-nowrap">
                        Organizing... Please wait a few seconds
                    </div>
                )}
            </div>

            {/* The Categories Layout */}
            {/* Initially, icons are absolute. Once clearProps hits, they snap into this categorized CSS layout */}
            <div
                ref={gridRef}
                className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col gap-12 sm:gap-16 flex-grow justify-start"
            >
                {skillsCategories.map((category, catIndex) => (
                    <div key={category.title} className="w-full flex flex-col items-start">
                        {/* Category Heading - fades in when animation is complete */}
                        <div className={`mb-6 ml-0 transition-all duration-1000 transform ${animationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <h3 className="text-2xl md:text-3xl font-bold text-white/90 border-b-2 border-[#fd5108]/50 pb-2 inline-block">
                                {category.title}
                            </h3>
                        </div>

                        {/* Category Grid */}
                        <div className="flex flex-wrap gap-4 sm:gap-8 lg:gap-10 w-full justify-start pl-0">
                            {category.skills.map((skill, skillIndex) => {
                                // Calculate global index for the flat ref array
                                const globalIndex = skillsCategories.slice(0, catIndex).reduce((acc, cat) => acc + cat.skills.length, 0) + skillIndex;
                                return (
                                    <div
                                        key={skill.name}
                                        ref={(el) => (iconsRef.current[globalIndex] = el)}
                                        className={`w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[130px] md:h-[130px] flex flex-col items-center justify-center p-3 rounded-full bg-gradient-to-br from-white/10 to-[#050505] border-[3px] border-[#fd5108]/40 backdrop-blur-md transition-all duration-300 ${animationComplete ? 'hover:-translate-y-2 hover:border-[#fd5108] hover:shadow-[0_0_30px_rgba(253,81,8,0.5)] group cursor-pointer' : ''} shadow-[inset_0_4px_20px_rgba(255,255,255,0.1)] shrink-0`}
                                    >
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-center justify-center mb-1 transition-transform duration-300 group-hover:scale-110">
                                            <img
                                                src={skill.icon}
                                                alt={skill.name}
                                                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                                            />
                                        </div>
                                        <span className="text-white/90 font-semibold text-[10px] sm:text-xs md:text-sm group-hover:text-white transition-colors duration-300 text-center leading-tight">{skill.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* Background elements (subtle) */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505] -z-10 pointer-events-none"></div>
        </section>
    );
};

export default Skills;
