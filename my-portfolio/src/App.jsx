// src/App.jsx
import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Home from './Pages/Home';

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

    return showSplash
        ? <SplashScreen onFinish={() => setShowSplash(false)} />
        : <Home />;
}
