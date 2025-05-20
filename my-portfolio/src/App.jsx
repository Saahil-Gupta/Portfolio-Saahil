// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';
import Home from './Pages/Home';
import AllProjects from './Pages/AllProjects';

export default function App() {
    const [showSplash, setShowSplash] = useState(true);

    // ▶️ Orientation Sync: add 'portrait' or 'landscape' class to <html>
    useEffect(() => {
        const onOrientationChange = () => {
            const isPortrait = window.matchMedia('(orientation: portrait)').matches;
            document.documentElement.classList.toggle('portrait', isPortrait);
            document.documentElement.classList.toggle('landscape', !isPortrait);
        };
        window.addEventListener('orientationchange', onOrientationChange);
        onOrientationChange(); // set initial class
        return () => window.removeEventListener('orientationchange', onOrientationChange);
    }, []);

    if (showSplash) {
        return (
            <AnimatePresence>
                <SplashScreen
                    key="splash"
                    onFinish={() => setShowSplash(false)}
                />
            </AnimatePresence>
        );
    }


    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/projects" element={<AllProjects />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
