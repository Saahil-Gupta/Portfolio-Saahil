// src/components/ParticleBackground.jsx
import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticleBackground() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = {
        fullScreen: false,
        background: {
            color: {
                value: 'transparent',
            },
        },
        fpsLimit: 20,
        interactivity: {
            events: {
                onHover: {
                    enable: false,
                },
                resize: true,
            },
        },
        particles: {
            color: {
                value: '#14b8a6', // Turquoise for Deep Ocean
            },
            links: {
                enable: false,
            },
            move: {
                direction: 'none',
                enable: true,
                outModes: {
                    default: 'out',
                },
                random: false,
                speed: 0.15,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 2000,
                },
                value: 15,
            },
            opacity: {
                value: 0.6,
            },
            shape: {
                type: 'circle',
            },
            size: {
                value: { min: 1, max: 2 },
            },
        },
        detectRetina: false,
    };

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            options={options}
            className="absolute inset-0"
        />
    );
}
