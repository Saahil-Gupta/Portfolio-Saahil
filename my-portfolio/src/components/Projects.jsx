import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Background from './Background';

const projects = [
    {
        title: 'Football Predictor',
        description: 'A web app that predicts football match outcomes in 2 leagues, La Liga and Premier League, using machine learning.',
        image: '/Images/Football_Predictor.jpg',
        codeUrl: 'https://github.com/Saahil-Gupta/Football-Predictor-V1',
        demoUrl: null,
        skills: ['Flask', 'Tailwind', 'Understats', 'scikit-learn', 'MongoDB'],

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
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 w-full max-w-4xl">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-teal-400 via-gray-300 to-teal-600 bg-clip-text text-transparent">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {list.map(({ title, description, skills, image, codeUrl, demoUrl }) => (
                <motion.div
                key={title}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-md flex flex-col"
                whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(0,0,0,0.5)' }}
                >
                <div className="h-48">
                    <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-2xl bg-gradient-to-r from-teal-400 via-gray-300 to-teal-600 bg-clip-text text-transparent font-semibold mb-2">{title}</h3>
                    <p className="text-white mb-4 flex-1 h-20 overflow-hidden">{description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {skills.map(skill => (
                            <span key={skill} className="px-2 py-1 bg-gray-700 text-gray-200 text-sm rounded shadow">
                                {skill}
                            </span>
                        ))}
                    </div>      
                    <div className="flex space-x-4 mt-auto">
                    <a
                        href={codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-[#66FCF1] hover:text-[#C5C6C7] transition"
                    >
                        <FaGithub className="mr-1" /> Code
                    </a>
                    {demoUrl && (
                        <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-[#66FCF1] hover:text-[#C5C6C7] transition"
                        >
                        <FaExternalLinkAlt className="mr-1" /> Demo
                        </a>
                    )}
                    </div>
                </div>
                </motion.div>
            ))}
            </div>

            {!showAll && projects.length > visibleCount && (
            <div className="text-center mt-6">
                <Link
                to="/projects"
                className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded shadow hover:bg-white/30 transition"
                >
                View More Projects
                </Link>
            </div>
            )}
        </div>
        </section>
    );
}