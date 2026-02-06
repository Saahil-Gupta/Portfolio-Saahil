// src/components/Contact.jsx
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Background from './Background';
import MagneticButton from './MagneticButton';

export default function Contact() {
    const formRef = useRef();
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_rr8mmu9',
                'template_udtg0ag   ',
                formRef.current,
                't8RsZKdZR8X5myt5E'
            )
            .then(
                () => setStatus('Message sent!'),
                () => setStatus('Oops, something went wrong.')
            );
    };

    return (
        <section id="contact" className="relative flex justify-center py-16 px-4">
            <Background />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="container mx-auto rounded-2xl shadow-lg p-6 w-full max-w-md"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)', border: '1px solid rgba(20,184,166,0.2)' }}
            >
                <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-[#14b8a6] via-[#5eead4] to-[#fb7185] bg-clip-text text-transparent">
                    Contact Me
                </h2>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-3 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#14b8a6] transition-all"
                        style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)' }}
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        required
                        className="w-full px-4 py-3 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#14b8a6] transition-all"
                        style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)' }}
                    />
                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        required
                        className="w-full px-4 py-3 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#14b8a6] transition-all resize-none"
                        style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)' }}
                    />
                    <MagneticButton strength={0.3} className="w-full">
                        <motion.button
                            type="submit"
                            className="w-full px-4 py-3 bg-gradient-to-r from-[#14b8a6] to-[#fb7185] text-white font-semibold rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(20,184,166,0.4)] transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Send Message
                        </motion.button>
                    </MagneticButton>
                    {status && (
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`mt-2 text-center ${status.includes('sent') ? 'text-green-400' : 'text-red-400'}`}
                        >
                            {status}
                        </motion.p>
                    )}
                </form>
            </motion.div>
        </section>
    );
}
