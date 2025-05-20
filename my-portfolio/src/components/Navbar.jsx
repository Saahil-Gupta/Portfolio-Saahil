// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HashLink as Link } from 'react-router-hash-link';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // ▶️ Scroll-spy
    useEffect(() => {
        const ids = ['home', 'projects', 'about', 'contact'];
        const observers = [];
        ids.forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(id);
                },
                { rootMargin: '-40% 0px -60% 0px' }
            );
            obs.observe(el);
            observers.push(obs);
        });
        return () => observers.forEach(o => o.disconnect());
    }, []);

    const linkClass = id =>
        `hover:text-cyan-400 ${activeSection === id ? 'text-cyan-400' : ''}`;

    return (
        <nav className="fixed w-full z-20 bg-transparent px-6 py-4 flex items-center justify-between">
            <div className="text-white font-mono text-lg">Saahil Gupta</div>

            {/* Desktop links */}
            <div className="hidden md:flex items-center space-x-6">
                <Link smooth to="/#home"     className={linkClass('home')}>Home</Link>
                <Link smooth to="/#projects" className={linkClass('projects')}>Projects</Link>
                <Link smooth to="/#about"    className={linkClass('about')}>About</Link>
                <Link smooth to="/#contact"  className={linkClass('contact')}>Contact</Link>

                {/* Social icons */}
                <a href="mailto:gupts42@mcmaster.ca" className="hover:text-cyan-400">
                    <HiOutlineMail size={20} />
                </a>
                <a href="https://linkedin.com/in/saahil-gupta" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
                    <FaLinkedin size={20} />
                </a>
                <a href="https://github.com/Saahil-Gupta" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
                    <FaGithub size={20} />
                </a>
            </div>

            {/* Mobile menu button */}
            <button
                className="md:hidden text-white"
                onClick={() => setMenuOpen(o => !o)}
            >
                {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            {/* Mobile menu panel */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-gray-900 dark:bg-gray-800 flex flex-col p-6 space-y-4 md:hidden">
                    <Link smooth to="/#home"    onClick={() => setMenuOpen(false)} className={linkClass('home')}>Home</Link>
                    <Link smooth to="/#projects"onClick={() => setMenuOpen(false)} className={linkClass('projects')}>Projects</Link>
                    <Link smooth to="/#about"   onClick={() => setMenuOpen(false)} className={linkClass('about')}>About</Link>
                    <Link smooth to="/#contact" onClick={() => setMenuOpen(false)} className={linkClass('contact')}>Contact</Link>

                    {/* Mobile social icons */}
                    <div className="flex space-x-4 mt-4">
                        <a href="mailto:gupts42@mcmaster.ca" className="hover:text-cyan-400">
                            <HiOutlineMail size={20} />
                        </a>
                        <a href="https://linkedin.com/in/saahil-gupta" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
                            <FaLinkedin size={20} />
                        </a>
                        <a href="https://github.com/Saahil-Gupta" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
                            <FaGithub size={20} />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
