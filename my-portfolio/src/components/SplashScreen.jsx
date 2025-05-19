// src/components/SplashScreen.jsx
import React, { useEffect, useState } from 'react';

const languages = [
    'Hello', 'नमस्ते', 'Bonjour', 'Hola', 'こんにちは',
    '안녕하세요', 'Привет', 'مرحبا', 'Hallo', '你好'
];

export default function SplashScreen({ onFinish }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const iv = setInterval(() => setIndex(i => i + 1), 500);
        if (index >= languages.length) {
        clearInterval(iv);
        setTimeout(onFinish, 500);
        }
        return () => clearInterval(iv);
    }, [index, onFinish]);

    return (
        <div className="flex items-center justify-center h-screen w-screen bg-black">
        <h1 className="text-white text-5xl font-bold animate-fade">
            {languages[Math.min(index, languages.length - 1)]}
        </h1>
        </div>
    );
}
