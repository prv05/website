import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AIFloatingIcon = () => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="fixed bottom-8 right-8 z-50 flex items-center gap-3"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Hover Tooltip */}
            <div
                className={`
                    bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl text-white text-sm font-medium
                    transition-all duration-300 transform origin-right
                    ${isHovered ? 'scale-100 opacity-100 translate-x-0' : 'scale-90 opacity-0 translate-x-4 pointer-events-none'}
                `}
            >
                Chat with my AI
            </div>

            {/* Bubble Button */}
            <button
                onClick={() => navigate('/chat')}
                className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#fd5108] to-orange-400 p-[2px] cursor-pointer shadow-[0_0_20px_rgba(253,81,8,0.4)] hover:shadow-[0_0_35px_rgba(253,81,8,0.7)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group flex items-center justify-center bg-[#050505]"
            >
                <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center relative overflow-hidden group-hover:bg-[#fd5108]/10 transition-colors duration-300">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="w-8 h-8 text-[#fd5108] group-hover:animate-pulse"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>

                    {/* Ring animation */}
                    <div className="absolute inset-0 border border-[#fd5108] rounded-full scale-110 opacity-0 group-hover:animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                </div>
            </button>
        </div>
    );
};

export default AIFloatingIcon;
