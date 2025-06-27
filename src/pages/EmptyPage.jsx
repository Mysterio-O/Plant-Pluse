import React from 'react';
import { FaLeaf } from 'react-icons/fa';
import { Link } from 'react-router';

const EmptyPage = ({ message = "No plants found!", ctaText = "Add a Plant" }) => {
    return (
        <section className="min-h-[calc(100vh-96px)] flex items-center justify-center bg-gradient-to-b from-cream-100 to-gray-100 dark:from-green-950 dark:to-gray-900 transition-colors duration-500 py-16 max-w-6xl mx-auto mt-4 rounded-2xl">
            <div className="text-center px-4">
                <div className="mb-6 animate-bounce-slow">
                    <FaLeaf className="text-6xl md:text-8xl text-green-600 dark:text-green-400 mx-auto" />
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500 dark:from-green-400 dark:to-teal-400 mb-4 animate-slide-up">
                    {message}
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 animate-slide-up animate-delay-100">
                    It looks like this space is waiting for some green friends!
                </p>
                <Link to='/dashboard/add-plant'>
                    <button
                        className="btn btn-primary bg-gradient-to-r from-green-500 to-teal-500 dark:from-green-400 dark:to-teal-400 border-none text-white font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-300 px-6 py-3 rounded-lg animate-slide-up animate-delay-200"
                    >
                        {ctaText}
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default EmptyPage;