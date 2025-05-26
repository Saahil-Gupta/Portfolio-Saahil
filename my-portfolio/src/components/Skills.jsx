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
    SiHtml5,
    SiCss3
} from 'react-icons/si';
import Background from './Background';

const skills = [
    { Icon: SiPython, name: 'Python' },
    { Icon: SiJavascript, name: 'JavaScript' },
    { Icon: FaJava, name: 'Java' },
    { Icon: SiReact, name: 'React' },
    { Icon: SiHtml5, name: 'HTML5' },
    { Icon: SiCss3, name: 'CSS3' },
    { Icon: SiMysql, name: 'MySQL' },
    { Icon: SiFlask, name: 'Flask' },
    { Icon: SiMongodb, name: 'MongoDB' },
    { Icon: SiTailwindcss, name: 'Tailwind CSS' },
    { Icon: SiGit, name: 'Git' },

];

export default function Skills() {
    return (
        <section className="flex justify-center py-12 px-4 relative">
        <Background />
        <motion.section
            id="about"
            className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 w-full max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 w-full max-w-4xl">
            <h2 className="text-3xl font-bold mb-4 text-[#66FCF1]">Skills</h2>
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center">
            {skills.map(({ Icon, name }) => (
                <div
                key={name}
                className="flex flex-col items-center group"
                title={name}
                >
                <Icon className="text-5xl text-[#66FCF1] group-hover:scale-110 hover:text-[#45A29E] transition-transform" />
                <span className="mt-2 text-sm text-[#45A29E] opacity-0 group-hover:opacity-100 transition-opacity">
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