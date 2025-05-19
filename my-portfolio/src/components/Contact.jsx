// src/components/Contact.jsx
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

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
        <section id="contact" className="py-16 bg-gray-900 dark:bg-black">
        <motion.section
            id="about"
            className="py-16 bg-gray-800 dark:bg-gray-700"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
        <div className="container mx-auto px-4 max-w-md">
            <h2 className="text-3xl font-mono text-white mb-6 text-center">Contact Me</h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <button
                type="submit"
                className="w-full px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
                Send Message
            </button>
            {status && <p className="mt-2 text-center text-cyan-400">{status}</p>}
            </form>
        </div>
        </motion.section>
        </section>
    );
}
