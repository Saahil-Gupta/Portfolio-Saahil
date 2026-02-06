// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import MagneticButton from './MagneticButton';
import Background from './Background';

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
            {/* Background with particles */}
            <Background />

            {/* content */}
            <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-4 pb-32">
                {/* avatar */}
                <div className="mb-8 md:mb-0 md:mr-8">
                    <motion.div
                        className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4"
                        style={{ borderColor: 'rgba(20,184,166,0.5)' }}
                        whileHover={{ scale: 1.05, borderColor: '#14b8a6' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                        <img
                            src="/Images/SaahilGupta.jpg"
                            alt="Saahil Gupta"
                            className="w-full h-full object-cover object-[50%_60%]"
                            draggable="false"
                        />
                    </motion.div>
                </div>

                {/* text */}
                <div>
                    <h1 className="text-6xl sm:text-8xl font-bold bg-gradient-to-r from-[#14b8a6] via-[#5eead4] to-[#fb7185] bg-clip-text text-transparent drop-shadow-lg mb-4">
                        Saahil Gupta
                    </h1>

                    <p className="text-2xl sm:text-3xl bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400 bg-clip-text text-transparent drop-shadow-md mb-2 font-mono">
                        {text}
                        <Cursor cursorStyle="|" />
                    </p>

                    <p className="text-lg sm:text-xl text-slate-400 italic mb-8 max-w-xl">
                        Passionate about computer vision, cybersecurity, and building tools that empower users.
                    </p>

                    <MagneticButton strength={0.4}>
                        <motion.button
                            onClick={() =>
                                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                            }
                            className="px-8 py-4 bg-gradient-to-r from-[#14b8a6] to-[#fb7185] text-white font-semibold rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(20,184,166,0.4)] transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Projects
                        </motion.button>
                    </MagneticButton>
                </div>
            </div>
        </motion.section>
    );
}
