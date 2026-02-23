import React from 'react';
import cvIcon from '../assets/cv.png';

// Import all skill icons
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
        color: "#fd5108",
        skills: [
            { name: 'C', icon: cIcon },
            { name: 'C++', icon: cppIcon },
            { name: 'Python', icon: pythonIcon },
            { name: 'Java', icon: javaIcon },
            { name: 'JavaScript', icon: jsIcon },
        ]
    },
    {
        title: "Fullstack",
        color: "#ff8c00",
        skills: [
            { name: 'HTML5', icon: htmlIcon },
            { name: 'CSS3', icon: cssIcon },
            { name: 'React', icon: reactIcon },
            { name: 'Node.js', icon: nodeIcon },
            { name: 'Express', icon: expressIcon },
            { name: 'Flask', icon: flaskIcon },
            { name: 'Tailwind CSS', icon: tailwindIcon },
            { name: 'Bootstrap', icon: bootstrapIcon },
        ]
    },
    {
        title: "Cloud & DevOps",
        color: "#f59e0b",
        skills: [
            { name: 'PostgreSQL', icon: postgresIcon },
            { name: 'MySQL', icon: mysqlIcon },
            { name: 'Docker', icon: dockerIcon },
            { name: 'AWS', icon: awsIcon },
            { name: 'Google Cloud', icon: gcpIcon },
            { name: 'Linux', icon: linuxIcon },
            { name: 'RabbitMQ', icon: rabbitmqIcon },
            { name: 'Git', icon: gitIcon },
            { name: 'GitHub', icon: githubIcon },
            { name: 'Postman', icon: postmanIcon },
            { name: 'Figma', icon: figmaIcon },
        ]
    },
    {
        title: "AI & Machine Learning",
        color: "#a78bfa",
        skills: [
            { name: 'TensorFlow', icon: tensorflowIcon },
            { name: 'Hugging Face', icon: huggingFaceIcon },
        ]
    },
    {
        title: "Hardware & IoT",
        color: "#34d399",
        skills: [
            { name: 'Arduino', icon: arduinoIcon },
            { name: 'Raspberry Pi', icon: raspberryPiIcon },
        ]
    },
    {
        title: "Web3 & Blockchain",
        color: "#60a5fa",
        skills: [
            { name: 'Solidity', icon: solidityIcon },
            { name: 'Hardhat', icon: hardhatIcon },
        ]
    }
];

const Resume = () => {
    const resumeUrl = '/resume.pdf';

    return (
        <section
            id="resume"
            className="min-h-screen w-full flex flex-col items-center justify-start py-28 px-5 md:px-20 relative z-10 border-t border-white/5"
        >
            <div className="max-w-5xl w-full mx-auto flex flex-col gap-10">

                {/* ── Header ── */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-4">
                            <div className="h-[1px] w-16 bg-gradient-to-r from-[#fd5108] to-transparent" />
                            <span className="text-[#fd5108] text-sm font-semibold uppercase tracking-widest">
                                Resume
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            My{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fd5108] to-orange-400">
                                Résumé.
                            </span>
                        </h2>
                        <p className="text-white/50 text-base font-light max-w-lg">
                            View my full resume below or download a copy for your records.
                        </p>
                    </div>

                    {/* Download Button */}
                    <a
                        href={resumeUrl}
                        download="Pratham_Vernekar_Resume.pdf"
                        className="group flex items-center gap-3 self-start md:self-auto px-6 py-3 rounded-full bg-[#fd5108]/10 border border-[#fd5108]/40 text-white hover:bg-[#fd5108]/25 hover:border-[#fd5108] hover:shadow-[0_0_25px_rgba(253,81,8,0.4)] transition-all duration-300 text-sm font-semibold whitespace-nowrap"
                    >
                        <img src={cvIcon} alt="Download" className="w-5 h-5 object-contain invert" />
                        Download Resume
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="w-4 h-4 group-hover:translate-y-[2px] transition-transform duration-300"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </a>
                </div>

                {/* ── PDF Viewer Card ── */}
                <div className="relative w-full rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a]/60 backdrop-blur-sm shadow-[0_0_50px_rgba(253,81,8,0.08)]">
                    {/* Top bar */}
                    <div className="flex items-center gap-2 px-5 py-4 border-b border-white/5 bg-white/[0.02]">
                        <div className="w-3 h-3 rounded-full bg-[#fd5108]/50" />
                        <div className="w-3 h-3 rounded-full bg-white/10" />
                        <div className="w-3 h-3 rounded-full bg-white/10" />
                        <span className="ml-3 text-white/30 text-xs tracking-wider font-mono">
                            PRATHAM_VERNEKAR_RESUME.pdf
                        </span>
                    </div>

                    <object
                        data={resumeUrl}
                        type="application/pdf"
                        className="w-full border-0"
                        style={{ height: 'min(85vh, 1100px)' }}
                    >
                        {/* Fallback for browsers that can't render inline PDF */}
                        <div className="flex flex-col items-center justify-center gap-6 py-24 px-8 text-center">
                            <div className="w-20 h-20 rounded-2xl bg-[#fd5108]/10 border border-[#fd5108]/20 flex items-center justify-center">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-[#fd5108]/60">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-white/60 text-base font-medium mb-1">Can't display inline PDF</p>
                                <p className="text-white/30 text-sm">
                                    Use the Download button above or{' '}
                                    <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="text-[#fd5108] underline">
                                        open in a new tab
                                    </a>.
                                </p>
                            </div>
                        </div>
                    </object>
                </div>

                {/* Fallback note */}
                <p className="text-center text-white/25 text-xs tracking-wider -mt-4">
                    Can't see the PDF?&nbsp;
                    <a
                        href={resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#fd5108]/70 hover:text-[#fd5108] underline underline-offset-2 transition-colors duration-200"
                    >
                        Open in a new tab
                    </a>
                    &nbsp;or use the Download button above.
                </p>

                {/* ── Other Skills ── */}
                <div className="flex flex-col gap-3 mt-6">
                    <div className="flex items-center gap-4">
                        <div className="h-[1px] w-16 bg-gradient-to-r from-[#fd5108] to-transparent" />
                        <span className="text-[#fd5108] text-sm font-semibold uppercase tracking-widest">
                            Skills
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                        Technical{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fd5108] to-orange-400">
                            Expertise.
                        </span>
                    </h2>
                    <p className="text-white/50 text-sm font-light max-w-lg">
                        A snapshot of the technologies and tools I work with.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="flex flex-col gap-10">
                    {skillsCategories.map((category) => (
                        <div key={category.title} className="flex flex-col gap-5">
                            {/* Category heading */}
                            <div className="flex items-center gap-3">
                                <span
                                    className="inline-block h-[2px] w-8 rounded-full"
                                    style={{ background: category.color }}
                                />
                                <h3 className="text-lg md:text-xl font-bold text-white/90">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Skill chips */}
                            <div className="flex flex-wrap gap-3 sm:gap-4">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#fd5108]/50 hover:bg-[#fd5108]/[0.07] hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(253,81,8,0.25)] transition-all duration-250 cursor-default group"
                                    >
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className="w-6 h-6 object-contain filter drop-shadow-[0_0_4px_rgba(255,255,255,0.15)] group-hover:scale-110 transition-transform duration-250"
                                        />
                                        <span className="text-white/80 group-hover:text-white text-sm font-medium transition-colors duration-250 whitespace-nowrap">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Resume;
