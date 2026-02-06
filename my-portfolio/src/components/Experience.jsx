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

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            type: 'spring',
            stiffness: 80,
            damping: 15,
        },
    }),
};

export default function Experience() {
    return (
        <section id="experience" className="relative flex justify-center py-16 px-4">
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
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#14b8a6] via-[#5eead4] to-[#fb7185] bg-clip-text text-transparent">
                        Experience
                    </h2>
                    <div className="space-y-8">
                        {experiences.map(({ role, company, location, dates, details }, index) => (
                            <motion.div
                                key={`${role}-${company}`}
                                className="relative pl-6"
                                style={{ borderLeft: '2px solid rgba(20,184,166,0.4)' }}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={index}
                            >
                                {/* Timeline dot */}
                                <div
                                    className="absolute -left-[9px] top-0 w-4 h-4 rounded-full"
                                    style={{ backgroundColor: '#14b8a6', boxShadow: '0 0 10px rgba(20,184,166,0.5)' }}
                                />

                                <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#14b8a6] via-[#5eead4] to-[#fb7185] bg-clip-text text-transparent">
                                    {role}
                                </h3>
                                <p className="text-slate-400 italic mb-3">
                                    {company} · {location} · {dates}
                                </p>
                                <ul className="list-disc list-inside text-slate-300 space-y-2">
                                    {details.map((point, i) => (
                                        <li key={i} className="leading-relaxed">{point}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>
        </section>
    );
}
