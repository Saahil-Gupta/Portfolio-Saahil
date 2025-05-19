import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Lights Camera Auction',
        description: 'Silent Auction platform',
        image: './assets/Lights Camera Auction.jpg',        // add your screenshots here
        codeUrl: 'https://github.com/Saahil-Gupta/Lights-Camera-Auction',
        demoUrl: 'https://devpost.com/software/lights-camera-auction',
    },
    {
        title: 'Egg-ucate Me',
        description: 'AI-powered personalized learning platform with adaptive flashcards and quizzes.',
        image: './assets/Eggucateme.png',        // add your screenshots here
        codeUrl: 'https://github.com/Saahil-Gupta/egg-ucate-me',
        demoUrl: 'https://devpost.com/software/egg-ucate-me',
    },
    {
        title: 'AuxiHelper',
        description: 'Full-stack web app to connect users with service providers.',
        image: './assets/AuxiHelper.jpg',
        codeUrl: 'https://github.com/Saahil-Gupta/auxihelper',
        demoUrl: null,
    },
    {
        title: 'Python Discord Bot (Swift Bot)',
        description: 'Discord bot that increased server engagement by 15% through interactive features.',
        image: './assets/discord-bot.png',
        codeUrl: 'https://github.com/Saahil-Gupta/swift-bot',
        demoUrl: null,
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-16 bg-gray-800 dark:bg-gray-700">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-mono text-white mb-8">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(({ title, description, image, codeUrl, demoUrl }) => (
                        <motion.div
                            key={title}
                            className="bg-gray-900 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                            style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
                            whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        >
                            <div className="h-48 bg-gray-700">
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl text-cyan-400 font-semibold mb-2 flex items-center">
                                    {title}
                                </h3>
                                <p className="text-gray-300 mb-4">{description}</p>
                                <div className="flex space-x-4">
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
            </div>
        </section>
    );
}