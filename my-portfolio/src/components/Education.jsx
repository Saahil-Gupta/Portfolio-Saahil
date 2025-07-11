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
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-teal-400 via-gray-300 to-teal-600 bg-clip-text text-transparent">
            Education
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu) => (
                <div
                key={edu.degree}
                className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 backdrop-blur-sm rounded-lg p-6"
                >
                <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-teal-300 via-gray-300 to-teal-500 bg-clip-text text-transparent">
                    {edu.degree}
                </h3>
                <p className="italic text-gray-300">
                {edu.institution}
                </p>
                <p className="mt-2 text-gray-100">
                {edu.period}
                </p>
                </div>
            ))}
            </div>
        </motion.div>
        </section>
    );
}
