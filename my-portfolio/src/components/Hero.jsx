// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Spline from '@splinetool/react-spline';

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
        <motion.section
            id="home"
            className="relative h-screen overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            {/* 3D background */}
            <div className="fixed inset-0 -z-10">
                <Spline
                    scene="https://prod.spline.design/a-VPqVGLHdEpxlYV/scene.splinecode"
                    style={{ width: '100vw', height: '100vh' }}
                />
            </div>

            {/* Overlay content */}
            <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-4 pb-32">
                <h1 className="text-6xl sm:text-8xl font-bold text-[#b2cbd5] drop-shadow-lg mb-4">
                    Saahil Gupta
                </h1>
                <p className="text-2xl sm:text-3xl text-[#b2cbd5] drop-shadow-md mb-2 font-mono">
                    {text}
                    <Cursor cursorStyle="|" />
                </p>
                <p className="text-lg sm:text-xl text-[#b2cbd5] italic mb-8 max-w-xl">
                    Passionate about computer vision, cybersecurity, and building tools that empower users.
                </p>
                <button
                    onClick={() =>
                        document
                            .getElementById('projects')
                            ?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="px-8 py-4 bg-[#948979] text-[#222831] font-semibold rounded shadow hover:bg-[#DFD0B8] transition"
                >
                    View Projects
                </button>
            </div>
        </motion.section>
    );
}
