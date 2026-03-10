import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import resumeImg from '../assets/AI-resume -builder.png';
import autoImg from '../assets/Automotive-E-commerce.png';
import hospitalImg from '../assets/Hospital manegment System.png';
import skillspeakImg from '../assets/skillspeakAI.png';
import smartpassImg from '../assets/smartpass.jpg';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const projectsData = [
    {
        id: 1,
        title: "PathShalaAI",
        description: "An AI-powered EdTech platform providing personalized learning paths, interactive modules, and comprehensive performance analytics for students.",
        techStack: ["React", "Node.js", "Express", "MongoDB", "AI Integration"],
        link: "#", // In progress, no live link yet
        github: "https://github.com/prv05/PathShalaAI",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop",
        status: "In Progress"
    },
    {
        id: 2,
        title: "VyapariAI",
        description: "An AI-driven business assistant designed to help small businesses automate support, generate insights, and seamlessly manage operations.",
        techStack: ["React Native", "AWS Lambda", "Cognito", "DynamoDB", "Amazon Bedrock", "Amazon Transcribe", "Amazon Textract", "Amazon Forecast", "QuickSight"],
        link: "#", // In progress, no live link yet
        github: "https://github.com/prv05/VyapariAI",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        status: "In Progress"
    },
    {
        id: 3,
        title: "Automotive E-Commerce Website",
        description: "A luxury automotive e-commerce platform offering 3D car visualizations, custom configuration tools, and secure payment processing.",
        techStack: ["React", "JavaScript", "HTML", "CSS", "3D Rendering"],
        link: "https://github.com/prv05/Automotive-E-commerce-Website",
        github: "https://github.com/prv05/Automotive-E-commerce-Website",
        image: autoImg,
        status: "Completed"
    },
    {
        id: 4,
        title: "Hospital Management System",
        description: "A comprehensive digital solution for streamlining hospital operations, patient records, appointment scheduling, and staff management.",
        techStack: ["React", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "Zustand", "Chart.js", "JWT"],
        link: "https://github.com/prv05/Hospital-management-system",
        github: "https://github.com/prv05/Hospital-management-system",
        image: hospitalImg,
        status: "Completed"
    },
    {
        id: 5,
        title: "SmartPass",
        description: "An intelligent crowd safety and stampede prevention system utilizing sensors and real-time monitoring to ensure public security at large gatherings.",
        techStack: ["ESP32", "C/C++", "APDS9960", "MPU6050", "BMP180", "SSD1306", "HTML/CSS/JS", "Chart.js"],
        link: "https://github.com/prv05/smartpass",
        github: "https://github.com/prv05/smartpass",
        image: smartpassImg,
        status: "Completed"
    },
    {
        id: 6,
        title: "SkillSpeakAI",
        description: "An AI-powered interactive platform tailored to provide comprehensive interview and exam preparation for students and professionals.",
        techStack: ["Flask", "MongoDB", "Ollama", "SpeechRecognition", "OpenAI Whisper", "HTML/CSS/JS"],
        link: "https://github.com/prv05/SkillspeakAI",
        github: "https://github.com/prv05/SkillspeakAI",
        image: skillspeakImg,
        status: "Completed"
    },
    {
        id: 7,
        title: "AI-Powered Resume Builder",
        description: "A smart application that leverages AI to help users seamlessly generate, format, and optimize professional resumes to stand out to recruiters.",
        techStack: ["Node.js", "Express", "MongoDB", "JWT", "Together AI", "Puppeteer", "EJS", "HTML/CSS"],
        link: "https://github.com/prv05/AI-Powered-Resume-Builder",
        github: "https://github.com/prv05/AI-Powered-Resume-Builder",
        image: resumeImg,
        status: "Completed"
    }
];

const Projects = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const cardRefs = useRef([]);

    // Hover 3D Effect Handler
    const handleMouseMove = (e, index) => {
        const card = cardRefs.current[index];
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element
        const y = e.clientY - rect.top;  // y position within the element

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // Max rotation 10deg
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(card, {
            rotationX: rotateX,
            rotationY: rotateY,
            transformPerspective: 1000,
            ease: "power2.out",
            duration: 0.5
        });
    };

    const handleMouseLeave = (index) => {
        const card = cardRefs.current[index];
        if (!card) return;

        gsap.to(card, {
            rotationX: 0,
            rotationY: 0,
            ease: "power2.out",
            duration: 0.5
        });
    };

    useEffect(() => {
        // Title Animation
        gsap.fromTo(titleRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
        );

        // Cards Scroll Animation
        cardRefs.current.forEach((card, index) => {
            if (!card) return;

            // Stagger items based on index (left vs right alignment pseudo-stagger)
            const xOffset = index % 2 === 0 ? -50 : 50;

            gsap.fromTo(card,
                { opacity: 0, y: 100, x: xOffset },
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%", // Trigger when the top of the card is 85% down the viewport
                        toggleActions: "play none none reverse" // Play on scroll down, reverse on scroll up past it
                    }
                }
            );

            // Animate tags sequentially inside each card as it enters
            const tags = card.querySelectorAll('.tech-tag');
            gsap.fromTo(tags,
                { opacity: 0, scale: 0.8, y: 10 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.4,
                    stagger: 0.1,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // Cleanup function for ScrollTrigger
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section id="projects" className="relative min-h-screen w-full pt-32 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden">
            {/* Background Gradient Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#050505] -z-20"></div>
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#fd5108]/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto flex flex-col items-center" ref={containerRef}>
                <div ref={titleRef} className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fd5108] to-[#ff8c00]">Projects</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        A showcase of my recent work, highlighting technical complexity, design, and problem-solving.
                    </p>
                </div>

                <div className="w-full flex flex-col gap-12 sm:gap-20 relative">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2 hidden sm:block"></div>

                    {projectsData.map((project, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={project.id}
                                className={`w-full flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16 relative`}
                            >
                                {/* Timeline Dot */}
                                <div className="hidden sm:flex absolute left-[20px] md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#fd5108] border-4 border-[#050505] shadow-[0_0_15px_rgba(253,81,8,0.8)] z-10"></div>

                                {/* Project Image Side */}
                                <div className="w-full md:w-1/2 flex justify-center">
                                    <div
                                        ref={(el) => cardRefs.current[index * 2] = el}
                                        className="relative w-full aspect-video rounded-2xl overflow-hidden group cursor-pointer border border-white/10 shadow-2xl"
                                        onMouseMove={(e) => handleMouseMove(e, index * 2)}
                                        onMouseLeave={() => handleMouseLeave(index * 2)}
                                        style={{ transformStyle: 'preserve-3d' }}
                                    >
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                        />

                                        {/* Overlay quick links on hover */}
                                        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {project.link !== "#" && (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="mx-2 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-[#fd5108] hover:border-transparent transition-all shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300 delay-100">
                                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </a>
                                            )}
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="mx-2 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300 delay-150">
                                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Info Side */}
                                <div
                                    ref={(el) => cardRefs.current[index * 2 + 1] = el}
                                    className={`w-full md:w-1/2 flex flex-col ${isEven ? 'md:items-start md:text-left' : 'md:items-end md:text-right'} pl-6 md:pl-0`}
                                >
                                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 hover:text-[#fd5108] transition-colors duration-300 flex items-center gap-3 flex-wrap">
                                        {project.title}
                                        {project.status === "In Progress" && (
                                            <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded bg-[#fd5108]/20 text-[#fd5108] border border-[#fd5108]/30">
                                                In Progress
                                            </span>
                                        )}
                                    </h3>
                                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-20 mb-6 w-full lg:w-[110%] relative">
                                        <p className="text-white/80 text-base md:text-lg leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Tech Stack Tags */}
                                    <div className={`flex flex-wrap gap-2 mb-8 w-full ${isEven ? 'justify-start' : 'md:justify-end justify-start'}`}>
                                        {project.techStack.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="tech-tag text-xs font-mono px-3 py-1 rounded-full bg-[#fd5108]/10 text-[#fd5108] border border-[#fd5108]/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
