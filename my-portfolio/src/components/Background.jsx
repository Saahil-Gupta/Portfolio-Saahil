// src/components/Background.jsx
import React from 'react';
import ParticleBackground from './ParticleBackground';

export default function Background() {
    return (
        <>
            {/* Deep Ocean gradient background - always visible */}
            <div className="fixed inset-0 -z-20 bg-gradient-to-br from-[#0c1929] via-[#162a40] to-[#0c1929]" />

            {/* Subtle turquoise glow overlay */}
            <div className="fixed inset-0 -z-15 bg-gradient-to-t from-[#14b8a6]/5 via-transparent to-transparent" />

            {/* Particles - desktop only for performance */}
            <div className="hidden md:block fixed inset-0 -z-10">
                <ParticleBackground />
            </div>
        </>
    );
}