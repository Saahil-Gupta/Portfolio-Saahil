// src/components/SplashScreen.jsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const languages = [
    'Hello',
    'नमस्ते',
    'Bonjour',
    'Hola',
    'こんにちは',
    '안녕하세요',
    'Привет',
    'مرحبا',
    'Hallo',
    '你好'
];

const WORD_DELAY_MS = 850;
const FINISH_DELAY_MS = 1200;
const TRANSITION_SEC = 0.45;

export default function SplashScreen({ onFinish }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < languages.length - 1) {
            const timeout = setTimeout(() => {
                setIndex(i => i + 1);
            }, WORD_DELAY_MS);
            return () => clearTimeout(timeout);
        } else {
            const endTimeout = setTimeout(onFinish, FINISH_DELAY_MS);
            return () => clearTimeout(endTimeout);
        }
    }, [index, onFinish]);

    return (
        <motion.div
            className="flex items-center justify-center h-screen w-screen
                    bg-gradient-to-br from-[#0c1929] via-[#162a40] to-[#0c1929]
                    overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.12 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
            <AnimatePresence mode="wait">
                <motion.h1
                    key={index}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: TRANSITION_SEC, ease: 'easeOut' }}
                    className="pb-4 leading-none text-6xl sm:text-8xl font-bold
                            bg-gradient-to-r from-[#14b8a6] via-[#5eead4] to-[#fb7185]
                            bg-clip-text text-transparent text-center"
                >
                    {languages[index]}
                </motion.h1>
            </AnimatePresence>
        </motion.div>
    );
}
