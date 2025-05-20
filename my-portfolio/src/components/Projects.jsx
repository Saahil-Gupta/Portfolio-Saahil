import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
    {
        title: 'Portfolio Website',
        description: 'My personal portfolio website showcasing my projects and skills. (a.k.a this website)',
        image: '/Images/Portfolio Website.jpg',        // add your screenshots here
        codeUrl: 'https://github.com/Saahil-Gupta/Portfolio-Saahil',
        demoUrl: 'https://portfolio-saahil.vercel.app/',
    },
    {
        title: 'Lights Camera Auction',
        description: 'Silent Auction platform',
        image: '/Images/Lights Camera Auction.jpg',        // add your screenshots here
        codeUrl: 'https://github.com/Saahil-Gupta/Lights-Camera-Auction',
        demoUrl: 'https://devpost.com/software/lights-camera-auction',
    },
    {
        title: 'Egg-ucate Me',
        description: 'AI-powered personalized learning platform with adaptive flashcards and quizzes.',
        image: '/Images/Eggucateme.png',        // add your screenshots here
        codeUrl: 'https://github.com/Saahil-Gupta/egg-ucate-me',
        demoUrl: 'https://devpost.com/software/egg-ucate-me',
    },
    {
        title: 'AuxiHelper',
        description: 'Full-stack web app to connect users with service providers.',
        image: '/Images/AuxiHelper.jpg',
        codeUrl: 'https://github.com/Saahil-Gupta/auxihelper',
        demoUrl: null,
    },
    {
        title: 'Python Discord Bot (Swift Bot)',
        description: 'Discord bot that increased server engagement by 15% through interactive features.',
        image: '/Images/discord.png',
        codeUrl: 'https://github.com/Saahil-Gupta/swift-bot',
        demoUrl: null,
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
            if (w < 768) setVisibleCount(3);
            else if (w < 1024) setVisibleCount(4);
            else setVisibleCount(5);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [showAll]);

    const list = showAll ? projects : projects.slice(0, visibleCount);

    return (
        <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-mono text-white mb-8">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {list.map(({ title, description, image, codeUrl, demoUrl }) => (
                        <motion.div
                            key={title}
                            className="bg-gray-900 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col"
                            whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(0,0,0,0.5)' }}
                        >
                            <div className="h-48 bg-gray-700">
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-2xl text-cyan-400 font-semibold mb-2">
                                    {title}
                                </h3>
                                <p className="text-gray-300 mb-4 flex-1">
                                    {description}
                                </p>
                                <div className="flex space-x-4 mt-auto">
                                    <a
                                        href={codeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-gray-300 hover:text-cyan-400 transition"
                                    >
                                        <FaGithub className="mr-1" /> Code
                                    </a>
                                    {demoUrl && (
                                        <a
                                            href={demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-gray-300 hover:text-cyan-400 transition"
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
                            className="px-6 py-3 bg-cyan-400 text-black font-semibold rounded shadow hover:bg-cyan-500 transition"
                        >
                            View More Projects
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}