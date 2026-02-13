// src/components/AnimatedStats.jsx
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaProjectDiagram, FaBriefcase, FaCertificate, FaCode, FaTrophy, FaGithub } from 'react-icons/fa';
import Background from './Background';

const stats = [
    { icon: FaProjectDiagram, value: 12, suffix: '+', label: 'Projects Built' },
    { icon: FaTrophy, value: 6, suffix: '+', label: 'Hackathons Attended' },
    { icon: FaGithub, value: 94, suffix: '+', label: 'GitHub Commits' },
    { icon: FaBriefcase, value: 3, suffix: '', label: 'Internships' },
    { icon: FaCertificate, value: 3, suffix: '', label: 'Certifications' },
    { icon: FaCode, value: 10, suffix: '+', label: 'Technologies' },
];

function CountUp({ target, suffix, duration = 2 }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    useEffect(() => {
        if (!isInView) return;

        let startTime;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

            // Easing function for smooth deceleration
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * target));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [isInView, target, duration]);

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    );
}

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: i * 0.15,
            type: 'spring',
            stiffness: 100,
            damping: 15,
        },
    }),
};

export default function AnimatedStats() {
    return (
        <section className="relative flex justify-center py-16 px-4">
            <Background />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-4xl"
            >
                <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#14b8a6] via-[#5eead4] to-[#fb7185] bg-clip-text text-transparent">
                    By The Numbers
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {stats.map(({ icon: Icon, value, suffix, label }, index) => (
                        <motion.div
                            key={label}
                            className="text-center p-6 rounded-xl transition-all duration-300 hover:shadow-[0_10px_40px_rgba(20,184,166,0.2)]"
                            style={{
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(20,184,166,0.2)'
                            }}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={index}
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <Icon
                                className="text-4xl mx-auto mb-4"
                                style={{ color: '#14b8a6' }}
                            />
                            <div
                                className="text-4xl md:text-5xl font-bold mb-2"
                                style={{ color: '#5eead4' }}
                            >
                                <CountUp target={value} suffix={suffix} />
                            </div>
                            <p className="text-slate-400 text-sm">
                                {label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
