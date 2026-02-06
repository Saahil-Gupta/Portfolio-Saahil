import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Background from './Background';

const projects = [
    {
        title: 'Prophet',
        description: 'Prophet is an AI-powered decision support tool built to help student entrepreneurs avoid costly inventory and financial mistakes. Using a multi-agent system, it analyzes risk and uncertainty to guide smarter decisions without relying on guesswork. Designed to reduce stress and burnout, Prophet gives individuals access to the kind of analysis usually reserved for larger organizations.',
        image: '/Images/Prophet.png',
        codeUrl: 'https://github.com/Saahil-Gupta/UofTHacks2026',
        demoUrl: 'https://devpost.com/software/prophet-067kwr',
        skills: ['LangGraph', 'Next.js', 'Shopify Admin API', 'FastAPI']
    },
    {
        title: 'NeuroVault',
        description: 'NeuroVault is a caregiver-assisted memory system designed for people with memory loss. Caregivers upload photos with short explanations to capture context once, and patients simply take a photo to receive instant, simple reminders of who or what they are looking at. Built for speed, privacy, and minimal steps, NeuroVault focuses on fast recall without friction.',
        image: '/Images/NeuroVault.png',
        codeUrl: 'https://devpost.com/software/project-iv3jdx',
        demoUrl: 'https://neurovault-v1.vercel.app/',
        skills: ['Next.js', 'FastAPI', 'MongoDB', 'ElevenLabs TTS', 'Moorcheh.ai']
    },
    {
        title: 'Football Predictor',
        description: 'A web app that predicts football match outcomes in 2 leagues, La Liga and Premier League, using machine learning.',
        image: '/Images/Football_Predictor.jpg',
        codeUrl: 'https://github.com/Saahil-Gupta/Football-Predictor-V1',
        demoUrl: 'https://laliga-predictor.onrender.com/',
        skills: ['Flask', 'Tailwind', 'Understats', 'scikit-learn', 'MongoDB'],
    },
    {
        title: 'Life Link Live',
        description: 'An offline-first, community-driven disaster prevention app that enables real-time hazard reporting and safety alerts during emergencies.',
        image: '/Images/life-link-live.png',
        codeUrl: 'https://github.com/Saahil-Gupta/MEC--2025',
        demoUrl: 'https://life-link-live.vercel.app/',
        skills: ['Mapbox', 'React', 'Local Storage', 'PWA'],
    },
    {
        title: 'Umee Social App Clone',
        description: 'A project for a social media app clone with features like User Profiles, Matching, Chatting, and more.',
        image: '/Images/Umee.jpg',
        codeUrl: 'https://github.com/Saahil-Gupta/Umee-social',
        demoUrl: null,
        skills: ['Flutter', 'Firebase'],
    },
    {
        title: 'Portfolio Website',
        description: 'My personal portfolio website showcasing my projects and skills. (a.k.a this website)',
        image: '/Images/Portfolio Website.jpg',
        codeUrl: 'https://github.com/Saahil-Gupta/Portfolio-Saahil',
        demoUrl: 'https://portfolio-saahil.vercel.app/',
        skills: ['React', 'Tailwind CSS', 'Framer Motion'],
    },
    {
        title: 'Lights Camera Auction',
        description: 'Silent Auction platform',
        image: '/Images/Lights Camera Auction.jpg',
        codeUrl: 'https://github.com/Saahil-Gupta/Lights-Camera-Auction',
        demoUrl: 'https://devpost.com/software/lights-camera-auction',
        skills: ['Flask', 'Node.js', 'MongoDB', 'Spline', 'Websockets', 'Firebase'],
    },
    {
        title: 'Egg-ucate Me',
        description: 'AI-powered personalized learning platform with adaptive flashcards and quizzes.',
        image: '/Images/Eggucateme.png',
        codeUrl: 'https://github.com/Saahil-Gupta/egg-ucate-me',
        demoUrl: 'https://devpost.com/software/egg-ucate-me',
        skills: ['Django', 'OAuth', 'Gemini API', 'Whisper API', 'HTML/CSS'],
    },
    {
        title: 'AuxiHelper',
        description: 'Full-stack web app to connect users with service providers.',
        image: '/Images/AuxiHelper.jpg',
        codeUrl: 'https://github.com/Saahil-Gupta/auxihelper',
        demoUrl: null,
        skills: ['Django', 'MongoDB', 'Firebase', 'Gemini API', 'HTML/CSS'],
    },
    {
        title: 'Simple Security Information and Event Management (SIEM) dashboard',
        description: 'A simple SIEM dashboard that collects and analyzes security events from various sources.',
        image: '/Images/SIEM-dashboard.jpg',
        codeUrl: 'https://github.com/Saahil-Gupta/SIEM',
        demoUrl: null,
        skills: ['FastAPI', 'React', 'TailwindCSS'],
    },
    {
        title: 'Simple Keylogger',
        description: 'A simple keylogger that captures keystrokes and saves them to a file.',
        image: '/Images/Keylogger.jpg',
        codeUrl: 'https://github.com/Saahil-Gupta/simple-keylogger',
        demoUrl: null,
        skills: ['Keylogger-python'],
    },
    {
        title: 'Python Discord Bot (Swift Bot)',
        description: 'Discord bot that increased server engagement by 15% through interactive features.',
        image: '/Images/discord.png',
        codeUrl: 'https://github.com/Saahil-Gupta/swift-bot',
        demoUrl: null,
        skills: ['Discord.py', 'Python'],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
        },
    },
};

export default function Projects({ showAll = false }) {
    const [visibleCount, setVisibleCount] = useState(projects.length);

    useEffect(() => {
        if (showAll) {
            setVisibleCount(projects.length);
            return;
        }
        const handleResize = () => {
            const w = window.innerWidth;
            if (w < 768) setVisibleCount(2);
            else if (w < 1024) setVisibleCount(4);
            else setVisibleCount(5);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [showAll]);

    const list = showAll ? projects : projects.slice(0, visibleCount);

    return (
        <section id='projects' className="relative flex justify-center py-12 px-4">
            <Background />
            <div
                className="rounded-2xl shadow-lg p-6 w-full max-w-4xl"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)', border: '1px solid rgba(20,184,166,0.2)' }}
            >
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#14b8a6] via-[#5eead4] to-[#fb7185] bg-clip-text text-transparent">
                    Projects
                </h2>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {list.map(({ title, description, skills, image, codeUrl, demoUrl }) => (
                        <motion.div
                            key={title}
                            className="rounded-xl overflow-hidden shadow-md flex flex-col group transition-all duration-300 hover:shadow-[0_10px_40px_rgba(20,184,166,0.2)]"
                            style={{
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                backdropFilter: 'blur(8px)',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}
                            variants={cardVariants}
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-2xl bg-gradient-to-r from-[#14b8a6] via-[#5eead4] to-[#fb7185] bg-clip-text text-transparent font-semibold mb-2">
                                    {title}
                                </h3>
                                <p className="text-slate-300 mb-4 flex-1 h-20 overflow-hidden text-sm">
                                    {description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {skills.map(skill => (
                                        <span
                                            key={skill}
                                            className="px-2 py-1 text-xs rounded-full"
                                            style={{ backgroundColor: 'rgba(20,184,166,0.2)', color: '#5eead4', border: '1px solid rgba(20,184,166,0.3)' }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex space-x-4 mt-auto">
                                    <a
                                        href={codeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center transition-colors duration-300"
                                        style={{ color: '#5eead4' }}
                                    >
                                        <FaGithub className="mr-1" /> Code
                                    </a>
                                    {demoUrl && (
                                        <a
                                            href={demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center transition-colors duration-300"
                                            style={{ color: '#5eead4' }}
                                        >
                                            <FaExternalLinkAlt className="mr-1" /> Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {!showAll && projects.length > visibleCount && (
                    <div className="text-center mt-8">
                        <Link
                            to="/projects"
                            className="inline-block px-8 py-3 bg-gradient-to-r from-[#14b8a6] to-[#fb7185] text-white font-semibold rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(20,184,166,0.4)] transition-all duration-300"
                        >
                            View More Projects
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}