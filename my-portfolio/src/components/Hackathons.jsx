// src/components/Hackathons.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaShieldAlt, FaUsers } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import Background from './Background';

const hackathons = [
    { event: 'UofTHacks', date: 'Jan 2026', project: 'Prophet' },
    { event: 'DeltaHacks', date: 'Jan 2026', project: 'NeuroVault' },
    { event: 'MEC', date: 'Sep 2025', project: 'Life Link Live' },
    { event: 'QHacks', date: 'Jan 2025', project: 'Lights Camera Auction' },
    { event: 'HackVille', date: 'Jan 2025', project: 'Egg-ucate Me' },
    { event: 'DeltaHacks', date: 'Jan 2025', project: 'AuxiHelper' },
];

const ctfs = [
    { event: 'CyberSci Regionals', date: 'Nov 2025', result: 'Top 7 in Toronto' },
    { event: 'BronteCTF', date: 'Oct 2025', result: 'Top 25' },
];

const organized = [
    { event: 'Mac-a-thon', date: 'Feb 2026', role: 'Organised' },
    { event: 'Wat.dev DevFest', date: 'Oct 2025', role: 'Helped Organise' },
];

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: i * 0.08,
            type: 'spring',
            stiffness: 100,
            damping: 15,
        },
    }),
};

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

function EventCard({ icon: Icon, event, date, tag, tagColor, linkTo, index }) {
    const content = (
        <motion.div
            className="relative rounded-xl p-5 flex flex-col gap-3 group cursor-pointer"
            style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.1)',
            }}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            whileHover={{
                y: -4,
                boxShadow: '0 8px 30px rgba(20,184,166,0.15)',
                borderColor: 'rgba(20,184,166,0.4)',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            {/* Top row: icon + event name */}
            <div className="flex items-center gap-3">
                <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(20,184,166,0.15)' }}
                >
                    <Icon style={{ color: '#14b8a6' }} className="text-lg" />
                </div>
                <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold text-sm truncate">{event}</h4>
                    <p className="text-slate-500 text-xs">{date}</p>
                </div>
            </div>

            {/* Tag */}
            {tag && (
                <span
                    className="inline-flex self-start px-3 py-1 text-xs rounded-full font-medium"
                    style={{
                        backgroundColor: tagColor?.bg || 'rgba(20,184,166,0.15)',
                        color: tagColor?.text || '#5eead4',
                        border: `1px solid ${tagColor?.border || 'rgba(20,184,166,0.25)'}`,
                    }}
                >
                    {tag}
                </span>
            )}
        </motion.div>
    );

    if (linkTo) {
        return (
            <HashLink smooth to="/#projects" className="block no-underline">
                {content}
            </HashLink>
        );
    }

    return content;
}

export default function Hackathons() {
    return (
        <section id="hackathons" className="relative flex justify-center py-16 px-4">
            <Background />
            <motion.section
                className="rounded-2xl shadow-lg p-6 w-full max-w-4xl"
                style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(20,184,166,0.2)',
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-[#14b8a6] via-[#5eead4] to-[#fb7185] bg-clip-text text-transparent">
                        Hackathons &amp; CTFs
                    </h2>

                    {/* ── Hackathons Attended ── */}
                    <motion.div
                        className="mb-10"
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-semibold text-slate-300 mb-4 flex items-center gap-2">
                            <FaCode style={{ color: '#14b8a6' }} />
                            Hackathons Attended
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {hackathons.map((h, i) => (
                                <EventCard
                                    key={`${h.event}-${h.date}`}
                                    icon={FaCode}
                                    event={h.event}
                                    date={h.date}
                                    tag={h.project}
                                    tagColor={{
                                        bg: 'rgba(20,184,166,0.15)',
                                        text: '#5eead4',
                                        border: 'rgba(20,184,166,0.25)',
                                    }}
                                    linkTo
                                    index={i}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* ── CTFs ── */}
                    <motion.div
                        className="mb-10"
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-semibold text-slate-300 mb-4 flex items-center gap-2">
                            <FaShieldAlt style={{ color: '#fb7185' }} />
                            CTFs
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {ctfs.map((c, i) => (
                                <EventCard
                                    key={`${c.event}-${c.date}`}
                                    icon={FaShieldAlt}
                                    event={c.event}
                                    date={c.date}
                                    tag={c.result}
                                    tagColor={{
                                        bg: 'rgba(251,113,133,0.15)',
                                        text: '#fb7185',
                                        border: 'rgba(251,113,133,0.25)',
                                    }}
                                    index={i}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Organised ── */}
                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-semibold text-slate-300 mb-4 flex items-center gap-2">
                            <FaUsers style={{ color: '#5eead4' }} />
                            Organised
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {organized.map((o, i) => (
                                <EventCard
                                    key={`${o.event}-${o.date}`}
                                    icon={FaUsers}
                                    event={o.event}
                                    date={o.date}
                                    tag={o.role}
                                    tagColor={{
                                        bg: 'rgba(94,234,212,0.15)',
                                        text: '#5eead4',
                                        border: 'rgba(94,234,212,0.25)',
                                    }}
                                    index={i}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </section>
    );
}
