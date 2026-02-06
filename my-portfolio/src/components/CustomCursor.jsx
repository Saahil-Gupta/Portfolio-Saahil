// src/components/CustomCursor.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.closest('a, button, [role="button"], input, textarea, select')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        // Hide default cursor
        document.body.style.cursor = 'none';

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
            document.body.style.cursor = 'auto';
        };
    }, []);

    return (
        <>
            {/* Main cursor dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
                animate={{
                    x: mousePosition.x - (isHovering ? 20 : 8),
                    y: mousePosition.y - (isHovering ? 20 : 8),
                    scale: isHovering ? 1 : 1,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5,
                }}
            >
                <div
                    className="rounded-full transition-all duration-200"
                    style={{
                        width: isHovering ? '40px' : '16px',
                        height: isHovering ? '40px' : '16px',
                        backgroundColor: isHovering ? 'rgba(20, 184, 166, 0.2)' : '#14b8a6',
                        boxShadow: isHovering
                            ? '0 0 20px rgba(20, 184, 166, 0.5), 0 0 40px rgba(20, 184, 166, 0.3)'
                            : '0 0 10px rgba(20, 184, 166, 0.8), 0 0 20px rgba(20, 184, 166, 0.4)',
                        border: isHovering ? '2px solid #14b8a6' : 'none',
                    }}
                />
            </motion.div>

            {/* Trailing glow effect */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998] hidden md:block"
                animate={{
                    x: mousePosition.x - 24,
                    y: mousePosition.y - 24,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 15,
                    mass: 0.8,
                }}
            >
                <div
                    className="w-12 h-12 rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, transparent 70%)',
                    }}
                />
            </motion.div>
        </>
    );
}
