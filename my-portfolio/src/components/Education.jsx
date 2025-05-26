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

export default function Education() {
    return (
        <section id="education" className="relative flex justify-center py-20 px-4">
        <Background />
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="container mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 w-full max-w-4xl"
        >
            <h2 className="text-4xl font-mono font-bold mb-8 text-center text-[#66FCF1]">
            Education
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu) => (
                <div
                key={edu.degree}
                className="bg-white/20 backdrop-blur-sm rounded-lg p-6"
                >
                <h3 className="text-2xl font-semibold mb-2 text-[#66FCF1]">
                    {edu.degree}
                </h3>
                <p className="italic text-[#45A29E]">
                {edu.institution}
                </p>
                <p className="mt-2 text-[#C5C6C7]">
                {edu.period}
                </p>
                </div>
            ))}
            </div>
        </motion.div>
        </section>
    );
}
