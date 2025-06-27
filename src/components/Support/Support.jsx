import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Swal from 'sweetalert2';
import { FaLeaf, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router';

const Support = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [chatMessages, setChatMessages] = useState([
        { id: 1, sender: 'bot', text: 'Hello! How can Plant Pulse assist you today?' },
    ]);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Simulate form submission with SweetAlert2
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            Swal.fire({
                icon: 'success',
                title: 'Message Sent!',
                text: 'Thank you for contacting Plant Pulse. We’ll respond soon!',
                timer: 2000,
                timerProgressBar: true,
                showConfirmButton: false,
                position: 'top-end',
                toast: true,
                customClass: {
                    popup: 'raleway-regular bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200',
                    title: 'text-xl font-semibold',
                    content: 'text-gray-600 dark:text-gray-300',
                },
            }).then(() => {
                setFormData({ name: '', email: '', message: '' });
                setIsSubmitting(false);
            });
        }, 1000);
    };

    // Simulate sending a chat message
    const handleChatSubmit = (e) => {
        e.preventDefault();
        const message = e.target.message.value;
        if (!message.trim()) return;
        setChatMessages((prev) => [
            ...prev,
            { id: prev.length + 1, sender: 'user', text: message },
            { id: prev.length + 2, sender: 'bot', text: 'Thanks for your message! Our team is reviewing it and will get back to you soon.' },
        ]);
        e.target.reset();
    };

    // Animation variants for chat messages
    const chatMessageVariants = {
        hidden: { opacity: 0, x: 0 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    };

    return (
        <motion.div
            className="p-6 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 raleway-regular min-h-screen"
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
            }}
            initial="hidden"
            animate="visible"
        >
            {/* Header */}
            <motion.h1
                className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-6 flex items-center gap-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <FaLeaf /> Plant Pulse Support
            </motion.h1>

            {/* Main Content */}
            <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row gap-8">
                {/* Contact Form */}
                <motion.div
                    className="lg:w-1/2 bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
                    <p className="mb-4 text-gray-600 dark:text-gray-300">
                        Need help with your plants or app? We’re here for you!
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <label htmlFor="name" className="block text-sm font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-emerald-500"
                                aria-required="true"
                                placeholder="Your Name"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <label htmlFor="email" className="block text-sm font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-emerald-500"
                                aria-required="true"
                                placeholder="your.email@example.com"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <label htmlFor="message" className="block text-sm font-medium">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows="4"
                                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-emerald-500"
                                aria-required="true"
                                placeholder="How can we help you?"
                            ></textarea>
                        </motion.div>
                        <motion.button
                            type="submit"
                            className="w-full px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-50"
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </motion.button>
                    </form>
                </motion.div>

                {/* Live Chat Simulation */}
                <motion.div
                    className="lg:w-1/2 bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <h2 className="text-2xl font-semibold mb-4">Live Chat Support</h2>
                    <p className="mb-4 text-gray-600 dark:text-gray-300">Chat with our support bot for quick help!</p>
                    <div className="h-64 overflow-y-auto mb-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <AnimatePresence>
                            {chatMessages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    className={`mb-2 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                    variants={chatMessageVariants}
                                    initial={{ opacity: 0, x: msg.sender === 'user' ? 20 : -20 }}
                                    animate="visible"
                                    exit={{ opacity: 0, x: msg.sender === 'user' ? 20 : -20 }}
                                >
                                    <div
                                        className={`max-w-xs p-2 rounded-lg ${msg.sender === 'user'
                                                ? 'bg-emerald-500 text-white'
                                                : 'bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200'
                                            }`}
                                    >
                                        {msg.sender === 'user' ? (
                                            <span>{msg.text}</span>
                                        ) : (
                                            <div className="flex items-center gap-2">
                                                <FaUserCircle className="text-emerald-500" />
                                                <span>{msg.text}</span>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                    <form onSubmit={handleChatSubmit} className="flex gap-2">
                        <input
                            type="text"
                            name="message"
                            className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-emerald-500"
                            placeholder="Type your message..."
                        />
                        <motion.button
                            type="submit"
                            className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Send
                        </motion.button>
                    </form>
                </motion.div>
            </div>

            {/* Back to Home */}
            <motion.div
                className="mt-8 flex justify-center items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                <Link to="/">
                    <button className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500">
                        Back to Home
                    </button>
                </Link>
            </motion.div>
        </motion.div>
    );
};

export default Support;