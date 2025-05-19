// src/components/Resume.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Resume() {
    return (
        <section id="resume" className="py-16 bg-gray-800 dark:bg-gray-700">
        <motion.section
            id="about"
            className="py-16 bg-gray-800 dark:bg-gray-700"
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
