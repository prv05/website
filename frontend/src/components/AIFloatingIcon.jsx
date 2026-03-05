import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import aiAvatar from '../assets/ai assitant.png';

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
                Chat with PRAT
            </div>

            {/* Bubble Button */}
            <button
                onClick={() => navigate('/chat')}
                className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#fd5108] to-orange-400 p-[2px] cursor-pointer shadow-[0_0_20px_rgba(253,81,8,0.4)] hover:shadow-[0_0_35px_rgba(253,81,8,0.7)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group flex items-center justify-center bg-[#050505]"
            >
                <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center relative overflow-hidden group-hover:bg-[#fd5108]/10 transition-colors duration-300">
                    <img src={aiAvatar} alt="PRAT" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />

                    {/* Ring animation */}
                    <div className="absolute inset-0 border border-[#fd5108] rounded-full scale-110 opacity-0 group-hover:animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                </div>
            </button>
        </div>
    );
};

export default AIFloatingIcon;
