// src/components/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Background from './Background'; 

const experiences = [
    {
        role: 'AI Intern',
        company: 'Appolo Computers',
        location: 'Remote / Hamilton, ON',
        dates: 'May 2025 – Present',
        details: [
        'Conducted data preprocessing and preparation for AI model training workflows.',
        'Supported model evaluation and performance benchmarking tasks.',
        'Assisted in optimizing machine learning pipelines to improve efficiency and reliability.',
        ],
    },
    {
        role: 'Guest Registration Assistant',
        company: 'McMaster Housing and Conference Services',
        location: 'Hamilton, ON',
        dates: 'Mar 2024 – Present',
        details: [
        'Safeguarded students’ mental and physical well-being during overnight shifts by building strong relationships with 40 residents.',
        'Facilitated communication among emergency services, residence supervisors, and security to uphold student safety.',
        ],
    },
    {
        role: 'Front End Development Intern',
        company: 'InStoreIn Technologies Ltd',
        location: 'Delhi, India',
        dates: 'Jul 2022 – Aug 2022',
        details: [
        'Developed interactive mockups for the Admin module using HTML, CSS, and JavaScript, reducing user errors and enhancing UI.',
        'Increased engagement on the Telegram channel and Discord server by 8% through interactive content updates.',
        'Supported three projects, improving project efficiency by 4% and delivering all deadlines.',
        ],
    },
    {
        role: 'Software Engineering Intern',
        company: 'ProcMart',
        location: 'Noida, India',
        dates: 'Jun 2022 – Jul 2022',
        details: [
        'Identified and resolved software bugs, improving system stability and reducing reported issues within one month.',
        'Reduced development time for new features by 20% through efficient coding practices.',
        'Contributed to new features, enhancing user engagement on the ProcMart platform.',
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="relative flex justify-center py-16 px-4">
        <Background />
        <motion.section
            id="about"
            className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 w-full max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-mono text-[#66FCF1] mb-8">Experience</h2>
            <div className="space-y-8">
            {experiences.map(({ role, company, location, dates, details }) => (
                <div key={`${role}-${company}`}>
                <h3 className="text-2xl text-[#66FCF1] font-semibold">{role}</h3>
                <p className="text-[#45A29E] italic mb-2">
                    {company} · {location} · {dates}
                </p>
                <ul className="list-disc list-inside text-[#C5C6C7] space-y-1">
                    {details.map((point, i) => (
                    <li key={i}>{point}</li>
                    ))}
                </ul>
                </div>
            ))}
            </div>
        </div>
        </motion.section>
        </section>
    );
}
