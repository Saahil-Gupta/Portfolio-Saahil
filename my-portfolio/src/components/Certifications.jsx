import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
    'Google Professional Cybersecurity Certificate',
    'Intel AI for Youth Bootcamp',
    'Python Beginner to Advanced Complete Course',
];

export default function Certifications() {
    return (
        <section id="certifications" className="py-16 bg-gray-900 dark:bg-gray-800">
        <motion.section
            id="about"
            className="py-16 bg-gray-800 dark:bg-gray-700"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-mono text-white mb-6">Certifications</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
            {certifications.map((cert, i) => (
                <li key={i}>{cert}</li>
            ))}
            </ul>
        </div>
        </motion.section>
        </section>
    );
}
