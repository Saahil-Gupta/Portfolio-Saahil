// src/components/Timeline.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaCode,
    FaShieldAlt,
    FaUsers,
    FaBriefcase,
    FaGraduationCap,
} from 'react-icons/fa';
import Background from './Background';

const categories = [
    { key: 'all', label: 'All' },
    { key: 'hackathon', label: 'Hackathons' },
    { key: 'ctf', label: 'CTFs' },
    { key: 'work', label: 'Work' },
    { key: 'education', label: 'Education' },
    { key: 'organised', label: 'Organised' },
];

const categoryStyles = {
    hackathon: {
        icon: FaCode,
        color: '#14b8a6',
        bg: 'rgba(20,184,166,0.15)',
        border: 'rgba(20,184,166,0.4)',
        glow: 'rgba(20,184,166,0.5)',
    },
    ctf: {
        icon: FaShieldAlt,
        color: '#fb7185',
        bg: 'rgba(251,113,133,0.15)',
        border: 'rgba(251,113,133,0.4)',
        glow: 'rgba(251,113,133,0.5)',
    },
    work: {
        icon: FaBriefcase,
        color: '#60a5fa',
        bg: 'rgba(96,165,250,0.15)',
        border: 'rgba(96,165,250,0.4)',
        glow: 'rgba(96,165,250,0.5)',
    },
    education: {
        icon: FaGraduationCap,
        color: '#a78bfa',
        bg: 'rgba(167,139,250,0.15)',
        border: 'rgba(167,139,250,0.4)',
        glow: 'rgba(167,139,250,0.5)',
    },
    organised: {
        icon: FaUsers,
        color: '#fbbf24',
        bg: 'rgba(251,191,36,0.15)',
        border: 'rgba(251,191,36,0.4)',
        glow: 'rgba(251,191,36,0.5)',
    },
};

// Sort key: YYYY-MM for chronological sorting (descending)
const events = [
    // Organised
    { date: 'Feb 2026', sortKey: '2026-02', title: 'Mac-a-thon', subtitle: 'Organised', type: 'organised' },
    // Hackathons 2026
    { date: 'Jan 2026', sortKey: '2026-01', title: 'UofTHacks', subtitle: 'Built Prophet', type: 'hackathon' },
    { date: 'Jan 2026', sortKey: '2026-01', title: 'DeltaHacks', subtitle: 'Built NeuroVault', type: 'hackathon' },
    // CTFs
    { date: 'Nov 2025', sortKey: '2025-11', title: 'CyberSci Regionals', subtitle: 'Top 7 in Toronto', type: 'ctf' },
    { date: 'Oct 2025', sortKey: '2025-10', title: 'BronteCTF', subtitle: 'Top 25', type: 'ctf' },
    // Organised
    { date: 'Oct 2025', sortKey: '2025-10', title: 'Wat.dev DevFest', subtitle: 'Helped Organise', type: 'organised' },
    // Hackathons 2025
    { date: 'Sep 2025', sortKey: '2025-09', title: 'MEC', subtitle: 'Built Life Link Live', type: 'hackathon' },
    // Work
    { date: 'May 2025', sortKey: '2025-05', title: 'AI Intern — Appolo Computers', subtitle: 'Remote / Hamilton, ON', type: 'work' },
    // Hackathons Jan 2025
    { date: 'Jan 2025', sortKey: '2025-01', title: 'QHacks', subtitle: 'Built Lights Camera Auction', type: 'hackathon' },
    { date: 'Jan 2025', sortKey: '2025-01', title: 'HackVille', subtitle: 'Built Egg-ucate Me', type: 'hackathon' },
    { date: 'Jan 2025', sortKey: '2025-01', title: 'DeltaHacks', subtitle: 'Built AuxiHelper', type: 'hackathon' },
    // Education
    { date: 'Sep 2023', sortKey: '2023-09', title: 'McMaster University', subtitle: 'B.A.Sc. Honours Computer Science Co-Op', type: 'education' },
    // Work
    { date: 'Jul 2022', sortKey: '2022-07', title: 'Frontend Intern — InStoreIn Technologies', subtitle: 'Delhi, India', type: 'work' },
    { date: 'Jun 2022', sortKey: '2022-06', title: 'SWE Intern — ProcMart', subtitle: 'Noida, India', type: 'work' },
    // Education
    { date: '2021', sortKey: '2021-01', title: 'DAV Public School', subtitle: 'High School Diploma', type: 'education' },
];

const cardVariants = {
    hidden: (isLeft) => ({
        opacity: 0,
        x: isLeft ? -60 : 60,
    }),
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 80,
            damping: 18,
        },
    },
    exit: {
        opacity: 0,
        scale: 0.9,
        transition: { duration: 0.2 },
    },
};

const dotVariants = {
    hidden: { scale: 0 },
    visible: {
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 200,
            damping: 15,
        },
    },
};

export default function Timeline() {
    const [filter, setFilter] = useState('all');

    const filtered = filter === 'all' ? events : events.filter(e => e.type === filter);

    return (
        <section id="timeline" className="relative flex justify-center py-16 px-4">
            <Background />
            <motion.div
                className="rounded-2xl shadow-lg p-6 w-full max-w-4xl"
                style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(20,184,166,0.2)',
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6 }}
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#14b8a6] via-[#5eead4] to-[#fb7185] bg-clip-text text-transparent">
                        My Journey
                    </h2>

                    {/* Filter buttons */}
                    <div className="flex flex-wrap gap-2 mb-10">
                        {categories.map(cat => {
                            const isActive = filter === cat.key;
                            const style = cat.key !== 'all' ? categoryStyles[cat.key] : null;
                            return (
                                <button
                                    key={cat.key}
                                    onClick={() => setFilter(cat.key)}
                                    className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300"
                                    style={{
                                        backgroundColor: isActive
                                            ? (style?.bg || 'rgba(20,184,166,0.2)')
                                            : 'rgba(255,255,255,0.05)',
                                        color: isActive
                                            ? (style?.color || '#5eead4')
                                            : '#94a3b8',
                                        border: `1px solid ${isActive
                                            ? (style?.border || 'rgba(20,184,166,0.4)')
                                            : 'rgba(255,255,255,0.1)'}`,
                                        boxShadow: isActive
                                            ? `0 0 12px ${style?.glow || 'rgba(20,184,166,0.3)'}`
                                            : 'none',
                                    }}
                                >
                                    {cat.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical line — center on desktop, left on mobile */}
                        <div
                            className="absolute top-0 bottom-0 left-4 md:left-1/2 w-px"
                            style={{
                                background: 'linear-gradient(to bottom, rgba(20,184,166,0.4), rgba(251,113,133,0.4), rgba(20,184,166,0.1))',
                            }}
                        />

                        <AnimatePresence mode="popLayout">
                            {filtered.map((event, index) => {
                                const style = categoryStyles[event.type];
                                const Icon = style.icon;
                                const isLeft = index % 2 === 0;

                                return (
                                    <motion.div
                                        key={`${event.title}-${event.date}`}
                                        className="relative mb-8 last:mb-0"
                                        layout
                                    >
                                        {/* Desktop layout */}
                                        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-6 items-center">
                                            {/* Left content or spacer */}
                                            {isLeft ? (
                                                <motion.div
                                                    className="rounded-xl p-5 transition-all duration-300"
                                                    style={{
                                                        backgroundColor: style.bg,
                                                        border: `1px solid ${style.border}`,
                                                    }}
                                                    variants={cardVariants}
                                                    initial="hidden"
                                                    whileInView="visible"
                                                    viewport={{ once: true }}
                                                    exit="exit"
                                                    custom={true}
                                                    whileHover={{
                                                        boxShadow: `0 8px 30px ${style.glow}`,
                                                        borderColor: style.color,
                                                    }}
                                                >
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <Icon style={{ color: style.color }} className="text-lg" />
                                                        <h4 className="text-white font-semibold">{event.title}</h4>
                                                    </div>
                                                    <p className="text-slate-400 text-sm">{event.subtitle}</p>
                                                    <span
                                                        className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-medium"
                                                        style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: style.color }}
                                                    >
                                                        {event.date}
                                                    </span>
                                                </motion.div>
                                            ) : (
                                                <div />
                                            )}

                                            {/* Center dot */}
                                            <motion.div
                                                className="w-4 h-4 rounded-full z-10 flex-shrink-0"
                                                style={{
                                                    backgroundColor: style.color,
                                                    boxShadow: `0 0 12px ${style.glow}`,
                                                }}
                                                variants={dotVariants}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                            />

                                            {/* Right content or spacer */}
                                            {!isLeft ? (
                                                <motion.div
                                                    className="rounded-xl p-5 transition-all duration-300"
                                                    style={{
                                                        backgroundColor: style.bg,
                                                        border: `1px solid ${style.border}`,
                                                    }}
                                                    variants={cardVariants}
                                                    initial="hidden"
                                                    whileInView="visible"
                                                    viewport={{ once: true }}
                                                    exit="exit"
                                                    custom={false}
                                                    whileHover={{
                                                        boxShadow: `0 8px 30px ${style.glow}`,
                                                        borderColor: style.color,
                                                    }}
                                                >
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <Icon style={{ color: style.color }} className="text-lg" />
                                                        <h4 className="text-white font-semibold">{event.title}</h4>
                                                    </div>
                                                    <p className="text-slate-400 text-sm">{event.subtitle}</p>
                                                    <span
                                                        className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-medium"
                                                        style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: style.color }}
                                                    >
                                                        {event.date}
                                                    </span>
                                                </motion.div>
                                            ) : (
                                                <div />
                                            )}
                                        </div>

                                        {/* Mobile layout — all cards on the right */}
                                        <div className="md:hidden grid grid-cols-[auto_1fr] gap-4 items-start">
                                            {/* Dot */}
                                            <motion.div
                                                className="w-3 h-3 rounded-full mt-5 ml-2.5 z-10 flex-shrink-0"
                                                style={{
                                                    backgroundColor: style.color,
                                                    boxShadow: `0 0 10px ${style.glow}`,
                                                }}
                                                variants={dotVariants}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                            />

                                            {/* Card */}
                                            <motion.div
                                                className="rounded-xl p-4 transition-all duration-300"
                                                style={{
                                                    backgroundColor: style.bg,
                                                    border: `1px solid ${style.border}`,
                                                }}
                                                variants={cardVariants}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                                exit="exit"
                                                custom={false}
                                            >
                                                <div className="flex items-center gap-2 mb-1">
                                                    <Icon style={{ color: style.color }} className="text-sm" />
                                                    <h4 className="text-white font-semibold text-sm">{event.title}</h4>
                                                </div>
                                                <p className="text-slate-400 text-xs">{event.subtitle}</p>
                                                <span
                                                    className="inline-block mt-2 px-2 py-0.5 rounded-full text-xs"
                                                    style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: style.color }}
                                                >
                                                    {event.date}
                                                </span>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
