// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function Hero() {
    const [text] = useTypewriter({
        words: ['CS Student', 'Cybersecurity Enthusiast', 'Full-Stack Developer'],
        loop: true,
        typeSpeed: 70,
        deleteSpeed: 50,
        delaySpeed: 1000,
    });

    return (
        <motion.section
        id="home"
        className="relative h-screen overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        >
        {/* background */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900" />

        {/* content */}
        <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-4 pb-32">
            {/* avatar */}
            <div className="mb-8 md:mb-0 md:mr-8">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-gray-600">
                <img
                src="/Images/SaahilGupta.jpg"
                alt="Saahil Gupta"
                className="w-full h-full object-cover object-[50%_60%]"
                draggable="false"
                />
            </div>
            </div>

            {/* text */}
            <div>
            <h1 className="text-6xl sm:text-8xl font-bold bg-gradient-to-r from-teal-400 via-gray-300 to-teal-600 bg-clip-text text-transparent drop-shadow-lg mb-4">
                Saahil Gupta
            </h1>

            <p className="text-2xl sm:text-3xl bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 bg-clip-text text-transparent drop-shadow-md mb-2 font-mono">
                {text}
                <Cursor cursorStyle="|" />
            </p>

            <p className="text-lg sm:text-xl text-[#C5C6C7] italic mb-8 max-w-xl">
                Passionate about computer vision, cybersecurity, and building tools that empower users.
            </p>

            <button
                onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-8 py-4 bg-gray-500 text-gray-200 font-semibold rounded shadow hover:bg-gray-600 transition"
            >
                View Projects
            </button>
            </div>
        </div>
        </motion.section>
    );
}
