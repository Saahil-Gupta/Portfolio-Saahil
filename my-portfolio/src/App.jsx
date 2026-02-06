// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';
import Home from './Pages/Home';
import AllProjects from './Pages/AllProjects';
import { motion } from 'framer-motion';
import Background from './components/Background';
import CustomCursor from './components/CustomCursor';

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

    return (
        <>
            {/* Custom cursor - renders globally */}
            <CustomCursor />

            <AnimatePresence exitBeforeEnter>
                {showSplash ? (
                    <SplashScreen
                        key="splash"
                        onFinish={() => setShowSplash(false)}
                    />
                ) : (
                    // Wrap Home (and your router) in a motion.div
                    <motion.div
                        key="home"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <Background />
                        <BrowserRouter>
                            <ScrollToTop />
                            <Routes>
                                <Route path="/projects" element={<AllProjects />} />
                                <Route path="/" element={<Home />} />
                            </Routes>
                        </BrowserRouter>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
