// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function Hero() {
    const [text] = useTypewriter({
        words: [
            'CS Student',
            'Cybersecurity Enthusiast',
            'Full-Stack Developer'
        ],
        loop: true,
        typeSpeed: 70,
        deleteSpeed: 50,
        delaySpeed: 1000
    });


    return (
        <section id="home" className="relative h-screen bg-black overflow-hidden">
        {/* <motion.section
            id="home"
            className="relative h-screen bg-black overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        ></motion.section> */}
            {/* Overlay content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <h1 className="text-5xl font-bold text-white drop-shadow-lg mb-4">
                    Saahil Gupta
                </h1>
                {/* Typewriter tagline */}
                <p className="text-xl text-gray-200 drop-shadow-md mb-2 font-mono">
                    {text}<Cursor cursorStyle="|" />
                </p>
                <p className="text-lg text-gray-300 italic mb-8 max-w-xl">
                    Passionate about computer vision, cybersecurity, and building tools that empower users.
                </p>
                <button
                    onClick={() =>
                        document
                            .getElementById('projects')
                            ?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="px-6 py-3 bg-cyan-400 text-black font-semibold rounded shadow hover:bg-cyan-500 transition"
                >
                    View Projects
                </button>
            </div>
        </section>
    );
}
