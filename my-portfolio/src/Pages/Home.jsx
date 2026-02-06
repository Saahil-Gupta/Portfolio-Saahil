// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import AnimatedStats from '../components/AnimatedStats';

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <AnimatedStats />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Education />
            <Certifications />
            <Resume />
            <Contact />
        </>
    );
}
