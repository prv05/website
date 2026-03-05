import React, { useState, useEffect, useRef } from 'react';
import aiAvatar from '../assets/ai assitant.png';

const Chat = () => {
    const [messages, setMessages] = useState(() => {
        const savedMessages = localStorage.getItem('pratChatHistory');
        if (savedMessages) {
            return JSON.parse(savedMessages);
        }
        return [
            { role: 'ai', content: 'Welcome! I am PRAT (Portfolio Response & Assistance Tool). You can ask me anything about Pratham\'s skills, experience, projects, or how to get in touch!' }
        ];
    });
    const [input, setInput] = useState('');
    const [isSpeaking, setIsSpeaking] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
        // Save to local storage whenever messages change
        localStorage.setItem('pratChatHistory', JSON.stringify(messages));
    }, [messages]);

    const speak = (text) => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);

            utterance.onstart = () => setIsSpeaking(true);
            utterance.onend = () => setIsSpeaking(false);
            utterance.onerror = () => setIsSpeaking(false);
            window.speechSynthesis.speak(utterance);
        }
    };

    useEffect(() => {
        // Only say welcome when user first opens chat page and there is no history
        if (messages.length <= 1) {
            const welcomeText = "Welcome! I am PRAT, the Portfolio Response and Assistance Tool. You can ask me anything about Pratham's skills, experience, projects, or how to get in touch!";
            speak(welcomeText);
        }

        return () => {
            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
            }
        };
    }, []);

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
            speak(aiMsg);
        }, 1000);
    };

    return (
        <section id="chat" className="min-h-screen w-full flex flex-col items-center justify-start pt-28 pb-20 px-5 md:px-20 relative z-10 border-t border-white/5">
            <div className="max-w-4xl w-full mx-auto flex flex-col h-[75vh] bg-[#0a0a0a]/60 backdrop-blur-md border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(253,81,8,0.1)] overflow-hidden">

                {/* Header */}
                <div className="p-5 border-b border-white/10 bg-white/[0.02] flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-tr from-[#fd5108] to-orange-500 p-[2px] shrink-0 transition-all duration-300 ${isSpeaking ? 'shadow-[0_0_20px_rgba(253,81,8,0.8)] scale-110' : ''}`}>
                        <div className="w-full h-full bg-[#050505] rounded-full flex items-center justify-center relative overflow-hidden">
                            <img src={aiAvatar} alt="PRAT Avatar" className="w-full h-full object-cover" />
                            {isSpeaking && (
                                <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] flex items-center justify-center gap-[3px]">
                                    <div className="w-1 h-3 bg-[#fd5108] animate-[bounce_1s_infinite] rounded-full"></div>
                                    <div className="w-1 h-5 bg-[#fd5108] animate-[bounce_1.2s_infinite_0.1s] rounded-full"></div>
                                    <div className="w-1 h-3 bg-[#fd5108] animate-[bounce_1s_infinite_0.2s] rounded-full"></div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-white font-semibold text-xl flex items-center gap-2">
                            PRAT
                            <span className="text-white/30 text-[10px] hidden md:inline font-normal tracking-wider uppercase bg-white/5 px-2 py-0.5 rounded-full border border-white/10">Portfolio Response & Assistance Tool</span>
                        </h2>
                        <p className="text-white/50 text-xs flex items-center gap-1 mt-0.5">
                            <span className={`w-2 h-2 rounded-full box-content ${isSpeaking ? 'bg-[#fd5108] animate-pulse' : 'bg-green-500'}`}></span>
                            {isSpeaking ? 'Speaking...' : 'Online'}
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
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-white/10 bg-black/40">
                    <form onSubmit={handleSend} className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={() => {
                                localStorage.removeItem('pratChatHistory');
                                setMessages([{ role: 'ai', content: 'Welcome! I am PRAT (Portfolio Response & Assistance Tool). You can ask me anything about Pratham\'s skills, experience, projects, or how to get in touch!' }]);
                                speak("Chat history cleared. How can I help you?");
                            }}
                            title="Clear Chat History"
                            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-colors"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                        </button>
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
                            className="w-12 h-12 rounded-full bg-[#fd5108] flex items-center justify-center text-white hover:bg-orange-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
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
