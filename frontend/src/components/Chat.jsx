import React, { useState } from 'react';

const Chat = () => {
    const [messages, setMessages] = useState([
        { role: 'ai', content: 'Hi there! I am Pratham\'s AI Assistant. You can ask me anything about his skills, experience, projects, or how to get in touch!' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = input.trim();
        setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
        setInput('');

        // Simulate a simple AI response focusing on Pratham's profile
        setTimeout(() => {
            let aiMsg = "I'm still learning about Pratham, but I know he is a skilled full-stack developer passionate about building great products. Check out his Resume or Skills page to learn more!";
            if (userMsg.toLowerCase().includes('skill') || userMsg.toLowerCase().includes('tech')) {
                aiMsg = "Pratham is skilled in React.js, Node.js, Python, TailwindCSS, AWS, and much more. You can see the full list on the Skills page!";
            } else if (userMsg.toLowerCase().includes('contact') || userMsg.toLowerCase().includes('reach')) {
                aiMsg = "You can reach Pratham at prathamvernekar05@gmail.com, or find him on LinkedIn and GitHub!";
            } else if (userMsg.toLowerCase().includes('project')) {
                aiMsg = "Pratham has worked on some cool projects like the Pathshala AI platform and other full-stack web applications.";
            }

            setMessages(prev => [...prev, { role: 'ai', content: aiMsg }]);
        }, 1000);
    };

    return (
        <section id="chat" className="min-h-screen w-full flex flex-col items-center justify-start pt-28 pb-20 px-5 md:px-20 relative z-10 border-t border-white/5">
            <div className="max-w-4xl w-full mx-auto flex flex-col h-[75vh] bg-[#0a0a0a]/60 backdrop-blur-md border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(253,81,8,0.1)] overflow-hidden">

                {/* Header */}
                <div className="p-5 border-b border-white/10 bg-white/[0.02] flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#fd5108] to-orange-500 p-[2px]">
                        <div className="w-full h-full bg-[#050505] rounded-full flex items-center justify-center">
                            <span className="text-[#fd5108] font-bold text-lg">AI</span>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-white font-semibold text-xl">Pratham's AI Assistant</h2>
                        <p className="text-white/50 text-xs flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-green-500 box-content"></span>
                            Online
                        </p>
                    </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[75%] p-4 rounded-2xl text-sm ${msg.role === 'user'
                                    ? 'bg-[#fd5108] text-white rounded-tr-sm'
                                    : 'bg-white/10 text-white/90 rounded-tl-sm border border-white/5'
                                }`}>
                                {msg.content}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-white/10 bg-black/40">
                    <form onSubmit={handleSend} className="flex items-center gap-3">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask me about Pratham..."
                            className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#fd5108]/50 focus:bg-white/10 transition-all"
                        />
                        <button
                            type="submit"
                            disabled={!input.trim()}
                            className="w-12 h-12 rounded-full bg-[#fd5108] flex items-center justify-center text-white hover:bg-orange-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 ml-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Chat;
