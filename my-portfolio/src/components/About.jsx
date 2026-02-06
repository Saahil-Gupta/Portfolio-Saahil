import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="flex justify-center py-12 px-4 relative">
            <motion.section
                className="rounded-2xl shadow-lg p-6 w-full max-w-4xl"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)', border: '1px solid rgba(20,184,166,0.2)' }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
            >
                <div
                    className="rounded-2xl shadow-lg p-6 w-full max-w-4xl"
                    style={{ backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)' }}
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-[#14b8a6] via-[#5eead4] to-[#fb7185] bg-clip-text text-transparent drop-shadow-lg mb-6">
                        About Me
                    </h2>
                    <p className="text-slate-300 mb-4 drop-shadow-lg">
                        I'm a third-year Computer Science student at McMaster University with a Minor in Business, passionate about full-stack development and AI.
                    </p>
                    <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#14b8a6] via-[#5eead4] to-[#fb7185] bg-clip-text text-transparent mb-3">
                        Highlights of Qualifications
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-slate-300 drop-shadow-lg">
                        <li>Strong leadership and teamwork skills, demonstrated through event coordination and collaborative projects.</li>
                        <li>Experience in full-stack development, including React, Flask, MongoDB, and API integrations.</li>
                        <li>Excellent communication skills, effectively conveying technical concepts to non-technical audiences.</li>
                    </ul>
                </div>
            </motion.section>
        </section>
    );
}
