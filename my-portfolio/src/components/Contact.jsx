// src/components/Contact.jsx
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Background from './Background';

export default function Contact() {
    const formRef = useRef();
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
        .sendForm(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            formRef.current,
            'YOUR_PUBLIC_KEY'
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
            className="container mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 w-full max-w-md"
        >
            <h2 className="text-3xl font-mono text-center mb-6 text-[#66FCF1]">
            Contact Me
            </h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 rounded bg-white/20 backdrop-blur-sm placeholder-[#C5C6C7] focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 rounded bg-white/20 backdrop-blur-sm placeholder-[#C5C6C7] focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full px-4 py-2 rounded bg-white/20 backdrop-blur-sm placeholder-[#C5C6C7] focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <button
                type="submit"
                className="w-full px-4 py-2 bg-[#66FCF1] text-black rounded hover:bg-[#45A29E] transition focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
                Send Message
            </button>
            {status && <p className="mt-2 text-center text-black">{status}</p>}
            </form>
        </motion.div>
        </section>
    );
}
