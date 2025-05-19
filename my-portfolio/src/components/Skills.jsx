// src/components/Skills.jsx
import React from 'react';
import { FaJava } from 'react-icons/fa';
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
} from 'react-icons/si';


const skills = [
    { Icon: SiPython, name: 'Python' },
    { Icon: SiJavascript, name: 'JavaScript' },
    { Icon: FaJava, name: 'Java' },
    { Icon: SiReact, name: 'React' },
    { Icon: SiMysql, name: 'MySQL' },
    { Icon: SiFlask, name: 'Flask' },
    { Icon: SiMongodb, name: 'MongoDB' },
    { Icon: SiTailwindcss, name: 'Tailwind CSS' },
    { Icon: SiGit, name: 'Git' },
];

export default function Skills() {
    return (
        <section id="skills" className="py-16 bg-gray-900 dark:bg-gray-800">
        <motion.section
            id="about"
            className="py-16 bg-gray-800 dark:bg-gray-700"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-mono text-white mb-8">Skills</h2>
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center">
            {skills.map(({ Icon, name }) => (
                <div
                key={name}
                className="flex flex-col items-center group"
                title={name}
                >
                <Icon className="text-5xl text-cyan-400 group-hover:scale-110 transition-transform" />
                <span className="mt-2 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    {name}
                </span>
                </div>
            ))}
            </div>
        </div>
        </motion.section>
        </section>
    );
}