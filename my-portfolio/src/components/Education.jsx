// src/components/Education.jsx
import React from 'react';
import { motion } from 'framer-motion';

const education = [
    {
        degree: 'B.A.Sc. Honours Computer Science Co-Op',
        institution: 'McMaster University, Hamilton, ON',
        period: 'Sept 2023 – Present'
    },
    {
        degree: 'High School Diploma',
        institution: 'DAV Public School, Ghaziabad, UP, India',
        period: '2021 – 2023'
    }
];

export default function Education() {
    return (
        <motion.section
            id="education"
            className="py-20 px-4 bg-gray-800 text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-mono font-bold mb-8 text-center">
                    Education
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {education.map((edu) => (
                        <div
                            key={edu.degree}
                            className="border border-gray-600 rounded-lg p-6 bg-gray-700 dark:bg-gray-800 shadow"
                        >
                            <h3 className="text-2xl font-semibold mb-2">
                                {edu.degree}
                            </h3>
                            <p className="italic text-gray-400">
                                {edu.institution}
                            </p>
                            <p className="text-gray-400 mt-2">
                                {edu.period}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
