import React, { useEffect, useState } from 'react';
import { BiSupport } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const ContactUs = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            Swal.fire({
                icon: 'success',
                title: 'Message Sent!',
                text: 'Thank you for contacting Plant Pulse. We’ll get back to you soon!',
                timer: 2000,
                timerProgressBar: true,
                showConfirmButton: false,
                position: 'top-end',
                toast: true,
                customClass: {
                    popup: 'swal2-custom-popup',
                },
            }).then(() => {
                setFormData({ name: '', email: '', message: '' });
                setIsSubmitting(false);
            });
        }, 1000);
    };

    useEffect(()=> {
        document.title = 'Contact Us || Plant_Pulse'
    },[])

    return (
        <div className="min-h-screen bg-base-100 text-base-content dark:bg-neutral dark:text-neutral-content transition-all duration-300 flex flex-col items-center py-16 px-4">
            {/* Header Section */}
            <div className="text-center mb-16">
                <h1 className="text-5xl font-extrabold text-primary dark:text-green-400">Contact Plant Pulse</h1>
                <p className="mt-4 text-lg text-base-content/70 dark:text-neutral-content/70 max-w-2xl mx-auto">
                    Have questions about your plants or our app? Reach out to us, and we’ll help you keep your plants thriving!
                </p>
            </div>

            {/* Main Content */}
            <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-10">
                {/* Contact Form */}
                <div className="lg:w-1/2 card bg-base-200 dark:bg-neutral-800 shadow-2xl p-8 rounded-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-base-content dark:text-neutral-content">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="input input-bordered w-full mt-2 dark:bg-neutral dark:border-gray-600 dark:placeholder-gray-400"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-base-content dark:text-neutral-content">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="input input-bordered w-full mt-2 dark:bg-neutral dark:border-gray-600 dark:placeholder-gray-400"
                                placeholder="your.email@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-base-content dark:text-neutral-content">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="textarea textarea-bordered w-full mt-2 h-32 dark:bg-neutral dark:border-gray-600 dark:placeholder-gray-400"
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary w-full capitalize text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="lg:w-1/2 space-y-6">
                    <div className="card bg-base-200 dark:bg-neutral-800 shadow-2xl p-8 rounded-2xl">
                        <h2 className="text-3xl font-bold text-primary dark:text-green-400 mb-4">Get in Touch</h2>
                        <p className="text-base text-base-content/70 dark:text-neutral-content/70">
                            We’re here to answer your questions about plant care, app features, or anything else!
                        </p>
                        <ul className="mt-6 space-y-5">
                            <li className="flex items-center gap-2">
                                <i className="fas fa-envelope text-primary dark:text-green-400 text-xl"><BiSupport size={28} /></i>
                                <a href="mailto:support@plantpulse.com" className="link link-hover text-base-content dark:text-neutral-content">
                                    support@plantpulse.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="fas fa-phone text-primary dark:text-green-400 text-xl"><FaPhoneSquareAlt size={28} /></i>
                                <span className="text-base-content dark:text-neutral-content">+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="fas fa-map-marker-alt text-primary dark:text-green-400 text-xl"><CiLocationOn size={28} /></i>
                                <span className="text-base-content dark:text-neutral-content">
                                    123 Green Thumb Lane, Plant City, FL 12345
                                </span>
                            </li>
                        </ul>
                    </div>
                    <Link to='/'>
                        <button
                            className="btn btn-outline btn-primary btn-block text-base font-semibold rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
