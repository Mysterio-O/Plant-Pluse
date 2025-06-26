import React from 'react';
import { Link, useNavigate } from 'react-router';

const Footer = () => {

    const navigate = useNavigate();

    const handleContact = () => {
        navigate('/about_us')
    }
    return (
        <div id='footer' className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 py-12">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className='flex justify-center items-center gap-2'>
                            <h2 className="text-3xl font-bold text-green-400 rancho-regular">Plant Pulse</h2>
                            <img src="https://i.ibb.co/r24MJjCV/logo-1.webp" alt="Logo" className="h-14 rounded-full shadow-md" />
                        </div>
                        <p className="mt-4 text-gray-400 text-sm text-center md:text-left">
                            Nurturing your love for plants with care tips, inspiration, and community.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-100 mb-4">Explore</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li onClick={handleContact}><a className="hover:text-green-400 transition-colors " href="">About Us</a></li>
                            <li><a href="#new_plants" className="hover:text-green-400 transition-colors">Plant Catalog</a></li>
                            <li><a href="#care_section" className="hover:text-green-400 transition-colors">Care Guides</a></li>
                            <li onClick={()=> navigate('/contact_us')}><a href='' className="hover:text-green-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-100 mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.227-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.849 0-3.204.012-3.584.069-4.849.148-3.252 1.691-4.771 4.919-4.919 1.265-.058 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.013-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.072 1.689-.072 4.947 0 3.259.013 3.667.072 4.947.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.072 4.947.072s3.667-.013 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.072-1.689.072-4.947 0-3.259-.013-3.667-.072-4.947-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.892h-2.33v6.987C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Newsletter Signup */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-100 mb-4">Stay in Touch</h3>
                        <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for plant care tips and updates.</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 rounded-l-full bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                            <button className="px-4 py-2 bg-green-500 text-white rounded-r-full hover:bg-green-600 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Plant Pulse. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;