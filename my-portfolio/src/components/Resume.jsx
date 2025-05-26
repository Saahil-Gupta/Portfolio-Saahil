// src/components/Resume.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Background from './Background';

export default function Resume() {
    return (
        <section id="resume" className="relative flex justify-center py-16 px-4">
        <Background />
        <motion.section
            id="about"
            className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 w-full max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-mono text-white mb-6">Resume</h2>
            <a
            href="/Saahil Gupta's Resume.pdf"
            download
            className="inline-block px-6 py-3 bg-cyan-500 text-white rounded shadow-lg hover:bg-cyan-600 transition focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
            Download My Resume
            </a>
        </div>
        </motion.section>
        </section>
    );
}
