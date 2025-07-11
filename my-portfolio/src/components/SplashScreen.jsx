// src/components/SplashScreen.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const languages = [
    'Hello', 'नमस्ते', 'Bonjour', 'Hola', 'こんにちは',
    '안녕하세요', 'Привет', 'مرحبا', 'Hallo', '你好'
];

export default function SplashScreen({ onFinish }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const iv = setInterval(() => setIndex(i => i + 1), 400);
        if (index >= languages.length) {
        clearInterval(iv);
        setTimeout(onFinish, 200);
        }
        return () => clearInterval(iv);
    }, [index, onFinish]);

    return (
        <motion.div
            className="flex items-center justify-center h-screen w-screen bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 1.5 }}
        >
        <h1 className="text-6xl sm:text-8xl font-bold bg-gradient-to-r from-teal-400 via-gray-300 to-teal-600 bg-clip-text text-transparent animate-fade">
            {languages[Math.min(index, languages.length - 1)]}
        </h1>
        </motion.div>
    );
}
