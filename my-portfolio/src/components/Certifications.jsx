// src/components/Certifications.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Background from './Background';
import { FaCertificate } from 'react-icons/fa';

const certifications = [
    'Google Professional Cybersecurity Certificate',
    'Intel AI for Youth Bootcamp',
    'Python Beginner to Advanced Complete Course',
];

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.1,
            type: 'spring',
            stiffness: 100,
            damping: 15,
        },
    }),
};

export default function Certifications() {
    return (
        <section id="certifications" className="relative flex justify-center py-16 px-4">
            <Background />
            <motion.section
                className="rounded-2xl shadow-lg p-6 w-full max-w-4xl"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)', border: '1px solid rgba(20,184,166,0.2)' }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#14b8a6] via-[#5eead4] to-[#fb7185] bg-clip-text text-transparent">
                        Certifications
                    </h2>
                    <ul className="space-y-4">
                        {certifications.map((cert, i) => (
                            <motion.li
                                key={i}
                                className="flex items-center gap-3 text-slate-300 p-3 rounded-lg transition-colors duration-300"
                                style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={i}
                                whileHover={{ x: 5 }}
                            >
                                <FaCertificate style={{ color: '#14b8a6' }} className="text-xl flex-shrink-0" />
                                <span>{cert}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </motion.section>
        </section>
    );
}
