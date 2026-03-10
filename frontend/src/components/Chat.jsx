import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import aiAvatar from '../assets/ai assitant.png';
import { checkRateLimit } from '../utils/rateLimiter';

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
    const [isListening, setIsListening] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);
    const recognitionRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
        // Save to local storage whenever messages change
        localStorage.setItem('pratChatHistory', JSON.stringify(messages));
    }, [messages]);

    // Initialize Speech Recognition
    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = false;
            recognitionRef.current.interimResults = true; // Show results as they speak

            recognitionRef.current.onresult = (event) => {
                const currentTranscript = Array.from(event.results)
                    .map(result => result[0])
                    .map(result => result.transcript)
                    .join('');

                setInput(currentTranscript);
            };

            recognitionRef.current.onerror = (event) => {
                console.error("Speech recognition error", event.error);
                setIsListening(false);
            };

            recognitionRef.current.onend = () => {
                setIsListening(false);
            };
        }
    }, []);

    const toggleListen = () => {
        if (!recognitionRef.current) {
            alert("Your browser does not support Speech Recognition. Please try Chrome.");
            return;
        }

        if (isListening) {
            recognitionRef.current.stop();
            setIsListening(false);
        } else {
            recognitionRef.current.start();
            setIsListening(true);
        }
    };

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

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        // Apply Rate Limit Check (5s cooldown, 15 msgs/hour max)
        const rateLimitResult = checkRateLimit('chat_api', 5, 15);
        if (!rateLimitResult.allowed) {
            const warningMsg = `⚠️ Rate Limit Exceeded: ${rateLimitResult.reason}`;
            setMessages(prev => [...prev, { role: 'ai', content: warningMsg }]);
            speak(rateLimitResult.reason);
            setInput('');
            return;
        }

        const userMsg = input.trim();
        const newMessages = [...messages, { role: 'user', content: userMsg }];

        setMessages(newMessages);
        setInput('');
        setIsLoading(true);

        try {
            const apiKey = import.meta.env.VITE_GROQ_API_KEY;

            if (!apiKey) {
                const errorMsg = "Error: Groq API key is missing. Please add VITE_GROQ_API_KEY to your .env file.";
                setMessages(prev => [...prev, { role: 'ai', content: errorMsg }]);
                speak(errorMsg);
                setIsLoading(false);
                return;
            }

            const systemPrompt = {
                role: "system",
                content: `You are "Prat AI", the personal AI assistant of Pratham Rajesh Vernekar.

About Pratham:
Name: Pratham Rajesh Vernekar
Age: 20
Date of Birth: 05 May 2005
Current Location: Bengaluru, India
Relationship Status: Single (but ready to mingle 😄)
sexual orientation: Straight


Education:
- Schooling: Rashtrotthana Vidya Kendra, Dharwad (Completed in 2021)
- Pre-University: Expert PU College, Mangaluru (Completed in 2023)
- B.Tech in Computer Science: RV University, Bengaluru (Expected Graduation 2027)

Academic Performance:
- Current CGPA: 8
- 5th Semester SGPA: 8.75
- 4th Semester SGPA: 8.45

Programming Languages:
C, C++, Java, Python

Technical Interests:
Artificial Intelligence
Machine Learning
Internet of Things (IoT)
Cloud Computing
Full Stack Development

Projects by Pratham (ALWAYS Provide GitHub Links):
1. Hospital Management System (HMS): A full-stack hospital management platform. [GitHub Repo](https://github.com/prv05/Hospital_Management_System)
2. SkillSpeak AI: An AI-powered interview and communication assessment platform. [GitHub Repo](https://github.com/prv05/SkillspeakAI)
3. Smart Road (IoT Project): An IoT-based smart road infrastructure concept.
4. SmartPass: Intelligent Crowd Safety & Stampede Prevention System. [GitHub Repo](https://github.com/prv05/smartpass)
5. VyapariAI: AI MBA Business Copilot for Bharat. [GitHub Repo](https://github.com/prv05/VyapariAI)
6. PathshalaAI: AI RAG-based tutor for grades 6-10. [GitHub Repo](https://github.com/prv05/PathShalaAI)
7. AI Resume Builder: An AI-powered resume generator using APIs. [GitHub Repo](https://github.com/prv05/AI-Powered-Resume-Builder)
8. Emojify: Real-Time Facial Emotion Detection and Emoji Reactions.[GitHub Repo](https://github.com/nghn0/Emojify)
9. Automotive E-Commerce: 3D car visualizations. [GitHub Repo](https://github.com/prv05/Automotive_E-Commerce_website_3d)

Personality & Interests:
- Passionate about solving real-world problems using AI and IoT
- Loves cars and technology
- Enjoys playing games in free time
- Interested in building innovative tech products

Availability:
Pratham is currently in his 6th semester. He is generally free:
- Wednesday and Thursday: 6 PM - 8 PM
- Saturday

PRATHAM'S LINKS & CONTACT:
- Email: [prathamvernekar05@gmail.com](mailto:prathamvernekar05@gmail.com)
- GitHub: [github.com/prv05](https://github.com/prv05)
- LinkedIn: [in/prathamvernekar](https://www.linkedin.com/in/pratham-vernekar))

CRITICAL INSTRUCTIONS FOR AI:
1. ACT HUMAN: Speak casually but professionally, like a friendly human colleague chatting over coffee.
2. BE CONCISE: Get straight to the point. Keep answers to 1-3 short paragraphs maximum.
3. PROVIDE LINKS: Whenever mentioning a project, ALWAYS provide the Markdown link to it.
4. PROMOTE PRATHAM: Highlight his role as a Cloud Engineer and Full Stack Developer with AI and IoT experience.
5. If someone asks something unrelated to Pratham or his tech stack, politely pivot back to discussing his work, projects, or how to contact him.`
            };

            // Format previous messages for the API
            const apiMessages = [
                systemPrompt,
                ...newMessages.map(msg => ({
                    role: msg.role === 'ai' ? 'assistant' : 'user',
                    content: msg.content
                }))
            ];

            const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: 'qwen/qwen3-32b',
                    messages: apiMessages,
                    temperature: 0.6,
                    max_tokens: 4096,
                    top_p: 0.95
                })
            });

            const data = await response.json();

            if (!response.ok) {
                const errorDetail = data?.error?.message || response.statusText;
                throw new Error(errorDetail);
            }

            let aiMsg = data.choices[0].message.content;

            // The qwen3-32b model is a reasoning model that outputs its thought process.
            // We strip out the <think>...</think> blocks so it isn't displayed or spoken.
            aiMsg = aiMsg.replace(/<think>[\s\S]*?<\/think>\n*/g, '').trim();

            // Clean markdown for speech synthesis (remove URLs and formatting)
            const textToSpeak = aiMsg
                .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Extract text from links: [text](url) -> text
                .replace(/[*_~`#]/g, '') // Remove common markdown formatting characters
                .replace(/(https?:\/\/[^\s]+)/g, 'a link') // Replace raw URLs if any exist
                .replace(/[\u1000-\uFFFF]+/g, '') // Remove wide range of characters including emojis
                .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, ''); // Remove surrogate pairs (most emojis)

            setMessages(prev => [...prev, { role: 'ai', content: aiMsg }]);
            speak(textToSpeak);

        } catch (error) {
            console.error("Error fetching from Groq:", error);
            const fallbackMsg = `Sorry, I'm having trouble connecting to my brain right now. The server reported the following error: ${error.message}`;
            setMessages(prev => [...prev, { role: 'ai', content: fallbackMsg }]);
            speak("I encountered a connection error. Please check the chat logs.");
        } finally {
            setIsLoading(false);
        }
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
                                {msg.role === 'ai' ? (
                                    <div className="flex flex-col gap-2 leading-relaxed">
                                        <ReactMarkdown
                                            components={{
                                                a: ({ node, ...props }) => <a className="text-[#fd5108] underline hover:text-orange-400 font-medium transition-colors" target="_blank" rel="noopener noreferrer" {...props} />,
                                                strong: ({ node, ...props }) => <strong className="font-semibold text-white" {...props} />,
                                                p: ({ node, ...props }) => <p className="mb-1 last:mb-0" {...props} />
                                            }}
                                        >
                                            {msg.content}
                                        </ReactMarkdown>
                                    </div>
                                ) : (
                                    msg.content
                                )}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="max-w-[75%] p-4 rounded-2xl text-sm bg-white/10 text-white/50 rounded-tl-sm border border-white/5 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-white/50 animate-bounce"></div>
                                <div className="w-2 h-2 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                <div className="w-2 h-2 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                            </div>
                        </div>
                    )}
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
                        <button
                            type="button"
                            onClick={toggleListen}
                            title="Voice Input"
                            className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${isListening
                                ? 'bg-red-500/20 text-red-500 border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.4)] animate-pulse'
                                : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            <svg viewBox="0 0 24 24" fill={isListening ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                                <line x1="12" y1="19" x2="12" y2="23"></line>
                                <line x1="8" y1="23" x2="16" y2="23"></line>
                            </svg>
                        </button>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={isListening ? "Listening..." : "Ask me about Pratham..."}
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
