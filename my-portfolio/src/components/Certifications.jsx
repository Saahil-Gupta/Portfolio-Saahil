import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
    'Google Professional Cybersecurity Certificate',
    'Intel AI for Youth Bootcamp',
    'Python Beginner to Advanced Complete Course',
];

export default function Certifications() {
    return (
        <section id="certifications" className="relative flex justify-center py-16 px-4">
        <motion.section
            id="about"
            className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 w-full max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-mono text-[#66FCF1]">Certifications</h2>
            <ul className="list-disc list-inside text-[#C5C6C7] space-y-2">
            {certifications.map((cert, i) => (
                <li key={i}>{cert}</li>
            ))}
            </ul>
        </div>
        </motion.section>
        </section>
    );
}
