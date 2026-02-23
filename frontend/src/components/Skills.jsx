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

// New icons
import arduinoIcon from '../assets/Arduino.png';
import bootstrapIcon from '../assets/Bootstrap.png';
import expressIcon from '../assets/Express.png';
import hardhatIcon from '../assets/Hardhat.png';
import jsIcon from '../assets/JavaScript.png';
import linuxIcon from '../assets/Linux.png';
import mysqlIcon from '../assets/MySQL.png';
import postmanIcon from '../assets/Postman.png';
import rabbitmqIcon from '../assets/RabbitMQ.png';
import raspberryPiIcon from '../assets/Raspberry Pi.png';
import solidityIcon from '../assets/Solidity.png';
import tailwindIcon from '../assets/Tailwind CSS.png';
import tensorflowIcon from '../assets/TensorFlow.png';
import huggingFaceIcon from '../assets/hugging face.png';

const skillsCategories = [
    {
        title: "Programming Languages",
        skills: [
            { name: 'C', icon: cIcon, usage: "Foundation of computer science concepts, memory management, and system-level programming.", academic: "Used in core data structures and algorithms coursework.", projects: "CLI utilities and low-level system simulations." },
            { name: 'C++', icon: cppIcon, usage: "Object-oriented programming, competitive programming, and performance-critical applications.", academic: "Advanced algorithms, design patterns, and graphics programming.", projects: "Game engine components and high-performance computation scripts." },
            { name: 'Python', icon: pythonIcon, usage: "Rapid prototyping, data analysis, machine learning, and backend scripting.", academic: "Used extensively for data science, AI assignments, and automation.", projects: "Scripting, API development with Flask, and data pipelines." },
            { name: 'Java', icon: javaIcon, usage: "Enterprise application development, Android development, and robust backend services.", academic: "Software engineering principles, OOP design, and enterprise systems.", projects: "Backend services and Android mobile application development." },
            { name: 'JavaScript', icon: jsIcon, usage: "Adding interactivity and dynamic behavior to web applications.", academic: "Web programming and interactive systems.", projects: "Frontend logic, DOM manipulation, and asynchronous data fetching." },
        ]
    },
    {
        title: "Fullstack",
        skills: [
            { name: 'HTML5', icon: htmlIcon, usage: "Structuring web content with semantic markup and accessibility in mind.", academic: "Web development fundamentals and UI design principles.", projects: "Foundation of all frontend web projects, including portfolio and SaaS landing pages." },
            { name: 'CSS3', icon: cssIcon, usage: "Styling modern web applications with responsive design, animations, and layouts.", academic: "Advanced styling techniques, CSS Grid, and Flexbox.", projects: "Custom styling for luxury e-commerce platforms and animated dashboards." },
            { name: 'React', icon: reactIcon, usage: "Building dynamic, component-driven user interfaces and single-page applications.", academic: "Frontend architectures, state management, and modern web frameworks.", projects: "Primary framework for portfolio, educational platforms (PathshalaAI), and e-commerce UI." },
            { name: 'Node.js', icon: nodeIcon, usage: "Developing scalable network applications and asynchronous backend services.", academic: "Server-side programming, RESTful API design, and asynchronous networking.", projects: "Backend API development, authentication services, and microservices." },
            { name: 'Express', icon: expressIcon, usage: "Building robust backend APIs and web server infrastructure routing.", academic: "Web server development and API design.", projects: "Building the backbone for custom web applications and microservices." },
            { name: 'Flask', icon: flaskIcon, usage: "Creating lightweight, extensible Python web applications and APIs.", academic: "Web backend assignments and micro-service architectures.", projects: "Quick API generation for data-driven projects and ML model serving." },
            { name: 'Tailwind CSS', icon: tailwindIcon, usage: "Rapid UI development using utility-first CSS classes.", academic: "Modern frontend tooling and rapid prototyping.", projects: "Efficiently styling responsive web applications and dashboards." },
            { name: 'Bootstrap', icon: bootstrapIcon, usage: "Developing responsive, mobile-first web pages quickly.", academic: "Introduction to CSS frameworks and grid systems.", projects: "Rapid prototyping and building grid-based layouts." },
        ]
    },
    {
        title: "Cloud & DevOps",
        skills: [
            { name: 'PostgreSQL', icon: postgresIcon, usage: "Designing robust, relational database schemas and complex queries.", academic: "Database management systems, normalization, and relational algebra.", projects: "Primary data store for e-commerce user profiles and transaction history." },
            { name: 'MySQL', icon: mysqlIcon, usage: "Managing relational databases for web applications.", academic: "Introduction to SQL and relational database design.", projects: "Backend data storage and structured querying." },
            { name: 'Docker', icon: dockerIcon, usage: "Containerizing applications for consistent deployment across environments.", academic: "Environment virtualization and modern deployment workflows.", projects: "Containerizing web servers and databases for streamlined local development." },
            { name: 'AWS', icon: awsIcon, usage: "Deploying and scaling applications using robust cloud infrastructure services.", academic: "Cloud computing architectures and distributed systems.", projects: "Hosting web applications, managing S3 buckets, and serverless compute." },
            { name: 'Google Cloud', icon: gcpIcon, usage: "Leveraging cloud services for hosting, data analytics, and machine learning APIs.", academic: "Cloud provisioning and server management.", projects: "Integrating specialized Google APIs and hosting scalable web applications." },
            { name: 'Linux', icon: linuxIcon, usage: "Operating system management, shell scripting, and server administration.", academic: "Operating systems concepts and command-line proficiency.", projects: "Server deployment environments and system administration." },
            { name: 'RabbitMQ', icon: rabbitmqIcon, usage: "Message queuing for building decoupled, distributed systems.", academic: "Distributed systems and message-oriented middleware.", projects: "Handling asynchronous tasks and inter-service communication." },
            { name: 'Git', icon: gitIcon, usage: "Version control for tracking code changes and collaborating on software projects.", academic: "Team-based software engineering projects.", projects: "Source control for all personal and professional development projects." },
            { name: 'GitHub', icon: githubIcon, usage: "Hosting code repositories, managing CI/CD pipelines, and open-source contribution.", academic: "Project submissions and peer code reviews.", projects: "Portfolio repository hosting and automated deployment actions." },
            { name: 'Postman', icon: postmanIcon, usage: "API development, testing, and endpoint documentation.", academic: "API design and backend testing methodologies.", projects: "Verifying web server routes and streamlining backend troubleshooting." },
            { name: 'Figma', icon: figmaIcon, usage: "Designing user interfaces, wireframes, and interactive prototypes.", academic: "HCI (Human-Computer Interaction) UI/UX assignments.", projects: "Designing high-fidelity mockups for luxury car stores and EdTech platforms." }
        ]
    },
    {
        title: "AI & Machine Learning",
        skills: [
            { name: 'TensorFlow', icon: tensorflowIcon, usage: "Building and training deep learning neural network models.", academic: "Machine learning architectures and neural network theory.", projects: "Developing custom computer vision and NLP models." },
            { name: 'Hugging Face', icon: huggingFaceIcon, usage: "Leveraging state-of-the-art pre-trained transformer models.", academic: "Advanced natural language processing exploration.", projects: "Integrating LLMs and deploying powerful NLP capabilities quickly." },
        ]
    },
    {
        title: "Hardware & IoT",
        skills: [
            { name: 'Arduino', icon: arduinoIcon, usage: "Prototyping microcontroller-based hardware projects.", academic: "Embedded systems and basic electronics.", projects: "Sensor integration and simple automation controllers." },
            { name: 'Raspberry Pi', icon: raspberryPiIcon, usage: "Building single-board computer applications and home servers.", academic: "Internet of Things (IoT) networking and embedded Linux.", projects: "Self-hosted services and IoT gateway prototypes." },
        ]
    },
    {
        title: "Web3 & Blockchain",
        skills: [
            { name: 'Solidity', icon: solidityIcon, usage: "Writing smart contracts for Ethereum-based blockchain applications.", academic: "Cryptography and decentralized application architecture.", projects: "Developing smart contracts for decentralized finance (DeFi) platforms." },
            { name: 'Hardhat', icon: hardhatIcon, usage: "Compiling, deploying, and testing Ethereum software.", academic: "Blockchain development environments.", projects: "Building and deploying robust smart contract networks and testing environments." },
        ]
    }
];

// Flat array needed for initial GSAP animations reference easily
const allSkillsFlat = skillsCategories.flatMap(cat => cat.skills);

const Skills = () => {
    const containerRef = useRef(null);
    const gridRef = useRef(null);
    const modalRef = useRef(null);
    const audioCtxRef = useRef(null);
    const [animationComplete, setAnimationComplete] = useState(() => {
        return typeof window !== 'undefined' ? sessionStorage.getItem('hasSeenSkillsAnimation') === 'true' : false;
    });
    const [selectedSkill, setSelectedSkill] = useState(null);
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
        if (selectedSkill && modalRef.current) {
            gsap.fromTo(modalRef.current,
                { opacity: 0, scale: 0.95, rotationY: 10, rotationX: -5, z: -50 },
                { opacity: 1, scale: 1, rotationY: 0, rotationX: 0, z: 0, duration: 0.3, ease: "power2.out", transformPerspective: 1500 }
            );
        }
    }, [selectedSkill]);

    useEffect(() => {
        // If already completed from session storage, completely skip timeline registration
        if (animationComplete) return;

        // Wait briefly for refs to populate on first render
        const icons = iconsRef.current.filter(Boolean);
        if (!icons || icons.length === 0) return;

        // Reset state for hot reloads
        gsap.killTweensOf(icons);

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
                // Mark animation as seen
                sessionStorage.setItem('hasSeenSkillsAnimation', 'true');
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
                    // This creates the coin sound as each one hits the bottom (roughly 1.5s into the 1.5s bounce animation)
                    gsap.delayedCall(1.5, playCoinSound);
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
                                        onClick={() => setSelectedSkill(skill)}
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

            {/* 3D Skill Detail Modal */}
            {selectedSkill && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#050505]/80 backdrop-blur-md"
                    onClick={() => setSelectedSkill(null)}
                >
                    <div
                        ref={modalRef}
                        className="relative w-full max-w-4xl bg-gradient-to-br from-white/10 to-transparent border border-white/20 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row gap-8 items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        {/* Inner glowing accent */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#fd5108]/10 to-transparent opacity-50 pointer-events-none"></div>

                        {/* Close button */}
                        <button
                            onClick={() => setSelectedSkill(null)}
                            className="absolute z-20 top-4 right-4 text-white/50 hover:text-white transition-colors p-2 bg-black/20 hover:bg-black/40 rounded-full"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Left Side: 3D Glowing Icon */}
                        <div className="flex-shrink-0 relative w-40 h-40 sm:w-56 sm:h-56 flex items-center justify-center ml-0 md:-ml-4 z-10" style={{ transform: 'translateZ(50px)' }}>
                            <div className="absolute inset-0 bg-[#fd5108]/30 rounded-full blur-[60px] animate-pulse"></div>
                            <img
                                src={selectedSkill.icon}
                                alt={selectedSkill.name}
                                className="relative w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(253,81,8,0.5)] transform hover:scale-110 hover:rotate-[15deg] transition-all duration-500 ease-out"
                            />
                        </div>

                        {/* Right Side: Tech Readout Panel */}
                        <div className="flex-1 flex flex-col gap-5 text-left w-full z-10" style={{ transform: 'translateZ(30px)' }}>
                            <div className="border-b border-white/10 pb-4">
                                <h3 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 tracking-tight">
                                    {selectedSkill.name}
                                </h3>
                                <div className="text-[#fd5108] text-sm font-mono mt-3 flex items-center gap-2 bg-black/30 w-fit px-3 py-1.5 rounded-md border border-[#fd5108]/30">
                                    <span className="w-2 h-2 rounded-full bg-[#fd5108] animate-pulse"></span>
                                    TECH_PROFILE_ACTIVE
                                </div>
                            </div>

                            <div className="space-y-3 mt-2">
                                <div className="bg-black/40 border border-white/5 rounded-xl p-4 transition-colors">
                                    <h4 className="text-white/40 text-[11px] font-mono mb-1.5 uppercase tracking-widest">// Core Usage</h4>
                                    <p className="text-white/80 text-sm sm:text-base leading-relaxed">{selectedSkill.usage}</p>
                                </div>
                                <div className="bg-black/40 border border-white/5 rounded-xl p-4 transition-colors">
                                    <h4 className="text-white/40 text-[11px] font-mono mb-1.5 uppercase tracking-widest">// Academic Integration</h4>
                                    <p className="text-white/80 text-sm sm:text-base leading-relaxed">{selectedSkill.academic}</p>
                                </div>
                                <div className="bg-[#fd5108]/10 border border-[#fd5108]/30 rounded-xl p-4 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-[#fd5108]"></div>
                                    <h4 className="text-[#fd5108]/80 text-[11px] font-mono mb-1.5 uppercase tracking-widest">// Project Deployments</h4>
                                    <p className="text-white text-sm sm:text-base leading-relaxed">{selectedSkill.projects}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Skills;
