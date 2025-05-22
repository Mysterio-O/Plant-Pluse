import React from 'react';
import { Link } from 'react-router';

const AboutUs = () => {
    return (
        <section id="about" className="bg-gradient-to-br from-gray-50 to-green-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 py-16 min-h-screen">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-green-600 dark:text-green-400 mb-6">About Plant Pulse</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                        At Plant Pulse, we’re passionate about bringing greenery into every home. Our mission is to empower plant lovers—whether beginners or seasoned gardeners—with the knowledge, tools, and inspiration to nurture thriving plants.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {/* Mission */}
                    <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-green-500/30 dark:hover:shadow-green-400/20 transition-shadow">
                        <div className="w-16 h-16 mb-4 bg-green-500 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.22-1.79L9 14v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.91-1.39h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.09 5.39z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Our Mission</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            To foster a global community of plant enthusiasts by providing accessible care tips, sustainable practices, and a platform to share your green journey.
                        </p>
                    </div>

                    {/* Values */}
                    <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-green-500/30 dark:hover:shadow-green-400/20 transition-shadow">
                        <div className="w-16 h-16 mb-4 bg-green-500 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Our Values</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Sustainability, education, and community drive us. We believe every plant tells a story, and we’re here to help you write yours.
                        </p>
                    </div>

                    {/* Community */}
                    <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-green-500/30 dark:hover:shadow-green-400/20 transition-shadow">
                        <div className="w-16 h-16 mb-4 bg-green-500 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" />
                            <div className="w-16 h-16 mb-4 bg-green-500 rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 2.25 1.97 3.95V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Our Community</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Join thousands of plant lovers sharing tips, tricks, and stories. From urban jungles to cozy corners, we’re growing together.
                        </p>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Link to='/'>
                        <button
                            className="inline-block px-6 py-3 bg-green-500 text-white font-semibold rounded-full 
                         hover:bg-green-600 dark:bg-green-400 dark:text-gray-900 dark:hover:bg-green-500 
                         transition-all duration-300 transform hover:scale-105 active:scale-95 hover:-translate-y-1 hover:shadow-lg  hover:shadow-purple-700"
                        >
                            Back To Home
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;