import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="flex justify-center py-12 px-4 relative">
        <motion.section
            id="about"
            className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 w-full max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 w-full max-w-4xl">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-400 via-gray-300 to-teal-600 bg-clip-text text-transparent drop-shadow-lg mb-6">About Me</h2>
            <p className="text-white mb-4 drop-shadow-lg">
            I’m a second-year Computer Science student at McMaster University with a Minor in Business, passionate about full-stack development and AI.
            </p>
            <h3 className="text-2xl text-bold bg-gradient-to-r from-teal-400 via-gray-300 to-teal-600 bg-clip-text text-transparent">Highlights of Qualifications</h3>
            <ul className="list-disc list-inside space-y-2 text-white drop-shadow-lg">
            <li>Strong leadership and teamwork skills, demonstrated through event coordination and collaborative projects.</li>
            <li>Experience in full-stack development, including React, Flask, MongoDB, and API integrations.</li>
            <li>Excellent communication skills, effectively conveying technical concepts to non-technical audiences.</li>
            </ul>
        </div>
        </motion.section>
        </section>
        
    );
}
