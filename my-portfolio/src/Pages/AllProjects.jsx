import React from 'react';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';

export default function AllProjects() {
    return (
        <>
            <Navbar />
            <Projects showAll />
        </>
    );
}
