import React, { useState } from 'react';
import cvIcon from '../assets/cv.png';

const Resume = () => {
    const resumeUrl = '/resume.pdf';
    const [loaded, setLoaded] = useState(false);

    return (
        <section
            id="resume"
            className="min-h-screen w-full flex flex-col items-center justify-start py-28 px-5 md:px-20 relative z-10 border-t border-white/5"
        >
            <div className="max-w-5xl w-full mx-auto flex flex-col gap-8">

                {/* Header */}
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

                {/* PDF Viewer Card */}
                <div className="relative w-full rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a]/60 backdrop-blur-sm shadow-[0_0_50px_rgba(253,81,8,0.08)] transition-all duration-500">
                    {/* Top bar decoration */}
                    <div className="flex items-center gap-2 px-5 py-4 border-b border-white/5 bg-white/[0.02]">
                        <div className="w-3 h-3 rounded-full bg-[#fd5108]/50" />
                        <div className="w-3 h-3 rounded-full bg-white/10" />
                        <div className="w-3 h-3 rounded-full bg-white/10" />
                        <span className="ml-3 text-white/30 text-xs tracking-wider font-mono">
                            resume.pdf
                        </span>
                    </div>

                    {/* Skeleton Loader */}
                    {!loaded && (
                        <div className="absolute inset-0 top-[52px] flex flex-col items-center justify-center gap-4 bg-[#0a0a0a]/80 z-10 pointer-events-none">
                            <div className="w-12 h-12 border-2 border-[#fd5108]/40 border-t-[#fd5108] rounded-full animate-spin" />
                            <span className="text-white/30 text-sm tracking-wider">Loading resume…</span>
                        </div>
                    )}

                    {/* Embedded PDF */}
                    <iframe
                        src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                        title="Pratham Vernekar Resume"
                        className="w-full border-0"
                        style={{ height: 'min(85vh, 1100px)' }}
                        onLoad={() => setLoaded(true)}
                    />
                </div>

                {/* Fallback note */}
                <p className="text-center text-white/25 text-xs tracking-wider">
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
            </div>
        </section>
    );
};

export default Resume;
