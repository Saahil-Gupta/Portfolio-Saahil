// src/components/TiltCard.jsx
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function TiltCard({ children, className = '', style = {} }) {
    const cardRef = useRef(null);
    const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate rotation (max 10 degrees)
        const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 10;
        const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * 10;

        setTilt({ rotateX, rotateY });
    };

    const handleMouseLeave = () => {
        setTilt({ rotateX: 0, rotateY: 0 });
    };

    return (
        <motion.div
            ref={cardRef}
            className={className}
            style={{
                ...style,
                transformStyle: 'preserve-3d',
                perspective: '1000px',
            }}
            animate={{
                rotateX: tilt.rotateX,
                rotateY: tilt.rotateY,
            }}
            transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Inner content with slight Z offset for depth */}
            <div style={{ transform: 'translateZ(20px)' }}>
                {children}
            </div>

            {/* Glare effect */}
            <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none"
                style={{
                    background: `linear-gradient(
                        ${135 + tilt.rotateY * 3}deg, 
                        rgba(20, 184, 166, 0.1) 0%, 
                        transparent 50%
                    )`,
                    opacity: Math.abs(tilt.rotateX) + Math.abs(tilt.rotateY) > 0 ? 0.5 : 0,
                }}
                transition={{ duration: 0.1 }}
            />
        </motion.div>
    );
}
