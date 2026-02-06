// src/components/Skills.jsx
import React from 'react';
import { FaJava, FaDocker } from 'react-icons/fa';
import { motion } from 'framer-motion';
import {
    SiPython,
    SiReact,
    SiJavascript,
    SiMysql,
    SiFlask,
    SiMongodb,
    SiTailwindcss,
    SiGit,
    SiHtml5,
    SiCss3
} from 'react-icons/si';
import Background from './Background';

const skills = [
    { Icon: SiPython, name: 'Python' },
    { Icon: FaDocker, name: 'Docker' },
    { Icon: SiJavascript, name: 'JavaScript' },
    { Icon: FaJava, name: 'Java' },
    { Icon: SiReact, name: 'React' },
    { Icon: SiHtml5, name: 'HTML5' },
    { Icon: SiCss3, name: 'CSS3' },
    { Icon: SiMysql, name: 'MySQL' },
    { Icon: SiFlask, name: 'Flask' },
    { Icon: SiMongodb, name: 'MongoDB' },
    { Icon: SiTailwindcss, name: 'Tailwind CSS' },
    { Icon: SiGit, name: 'Git' }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 12,
        },
    },
};

const floatVariants = {
    animate: (i) => ({
        y: [0, -8, 0],
        transition: {
            duration: 2.5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: i * 0.15,
        },
    }),
};

export default function Skills() {
    return (
        <section className="flex justify-center py-12 px-4 relative">
            <Background />

            <motion.section
                id="about"
                className="rounded-2xl shadow-lg p-6 w-full max-w-4xl"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)', border: '1px solid rgba(20,184,166,0.2)' }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <div
                    className="rounded-2xl shadow-lg p-6 w-full max-w-4xl"
                    style={{ backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)', border: '1px solid rgba(20,184,166,0.2)' }}
                >
                    <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#14b8a6] via-[#5eead4] to-[#fb7185] bg-clip-text text-transparent">
                        Skills
                    </h2>

                    <motion.div
                        className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {skills.map(({ Icon, name }, index) => (
                            <motion.div
                                key={name}
                                className="flex flex-col items-center group cursor-pointer"
                                title={name}
                                variants={itemVariants}
                                custom={index}
                            >
                                <motion.div
                                    variants={floatVariants}
                                    animate="animate"
                                    custom={index}
                                    whileHover={{ scale: 1.25 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Icon
                                        className="text-5xl transition-all duration-300 ease-out"
                                        style={{ color: '#5eead4' }}
                                    />
                                </motion.div>
                                <span className="mt-2 text-sm text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>
        </section>
    );
}
