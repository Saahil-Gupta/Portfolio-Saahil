// src/components/Resume.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Background from './Background';
import MagneticButton from './MagneticButton';

export default function Resume() {
    return (
        <section id="resume" className="relative flex justify-center py-16 px-4">
            <Background />
            <motion.section
                className="rounded-2xl shadow-lg p-6 w-full max-w-4xl"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)', border: '1px solid rgba(20,184,166,0.2)' }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
            >
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#14b8a6] via-[#5eead4] to-[#fb7185] bg-clip-text text-transparent">
                        Resume
                    </h2>
                    <MagneticButton strength={0.3}>
                        <motion.a
                            href="/Saahil Gupta's Resume.pdf"
                            download
                            className="inline-block px-8 py-4 bg-gradient-to-r from-[#14b8a6] to-[#fb7185] text-white font-semibold rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(20,184,166,0.4)] transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Download My Resume
                        </motion.a>
                    </MagneticButton>
                </div>
            </motion.section>
        </section>
    );
}
