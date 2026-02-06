// src/components/Education.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Background from './Background';

const education = [
    {
        degree: 'B.A.Sc. Honours Computer Science Co-Op',
        institution: 'McMaster University, Hamilton, ON',
        period: 'Sept 2023 – Present',
    },
    {
        degree: 'High School Diploma',
        institution: 'DAV Public School, Ghaziabad, UP, India',
        period: '2021 – 2023',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            type: 'spring',
            stiffness: 100,
            damping: 15,
        },
    }),
};

export default function Education() {
    return (
        <section id="education" className="relative flex justify-center py-20 px-4">
            <Background />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="container mx-auto rounded-2xl shadow-lg p-6 w-full max-w-4xl"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)', border: '1px solid rgba(20,184,166,0.2)' }}
            >
                <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#14b8a6] via-[#5eead4] to-[#fb7185] bg-clip-text text-transparent">
                    Education
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.degree}
                            className="rounded-lg p-6 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(20,184,166,0.15)]"
                            style={{
                                background: 'linear-gradient(to bottom right, #0c1929, #162a40, #0c1929)',
                                border: '1px solid rgba(20,184,166,0.2)'
                            }}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={index}
                            whileHover={{ scale: 1.02 }}
                        >
                            <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-[#14b8a6] via-[#5eead4] to-[#fb7185] bg-clip-text text-transparent">
                                {edu.degree}
                            </h3>
                            <p className="italic text-slate-400">
                                {edu.institution}
                            </p>
                            <p className="mt-2 text-slate-300">
                                {edu.period}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
