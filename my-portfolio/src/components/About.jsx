import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-16 bg-gray-800 dark:bg-gray-700">
        <motion.section
            id="about"
            className="py-16 bg-gray-800 dark:bg-gray-700"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-mono text-white mb-6">About Me</h2>
            <p className="text-gray-300 mb-4">
            I’m a second-year Computer Science student at McMaster University with a Minor in Business, passionate about full-stack development and AI.
            </p>
            <h3 className="text-2xl font-mono text-white mb-2">Highlights of Qualifications</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Strong leadership and teamwork skills, demonstrated through event coordination and collaborative projects.</li>
            <li>Experience in full-stack development, including React, Flask, MongoDB, and API integrations.</li>
            <li>Excellent communication skills, effectively conveying technical concepts to non-technical audiences.</li>
            </ul>
        </div>
        </motion.section>
        </section>
        
    );
}
