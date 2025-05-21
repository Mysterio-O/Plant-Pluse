import React, { useContext, useState } from 'react';
import ThemeSwitch from '../Theme/ThemeSwitch'
import { Link, NavLink } from 'react-router';
import './header.css'
import { CiMenuKebab } from 'react-icons/ci';
import { MdOutlineCancel } from 'react-icons/md';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = <>
        <NavLink to='/'><li className='hover:text-blue-500 text-black transition duration-300'>Home</li></NavLink>
        <NavLink to='/all_plants'><li className='hover:text-blue-500 transition duration-300 text-black'>All Plants</li></NavLink>
        <NavLink to='/add_plants'><li className='hover:text-blue-500 text-black transition duration-300'>Add Plants</li></NavLink>
        <NavLink to='/my_plants'><li className='hover:text-blue-500 text-black transition duration-300'>My Plants</li></NavLink>
    </>


    const handleLogOut = () => {
        signOutUser().then(() => {
            console.log('users signed out successful');
        }).catch(err => {
            console.error(err.code, err.message);
        })
    }


    return (
        <nav className="dark:bg-gray-700 bg-white px-4 py-3 max-w-6xl mx-auto lg:rounded-xl flex justify-between items-center relative shadow-md transition-colors duration-300">
            <div className="flex gap-3 items-center">
                <img src="/logo-1.webp" alt="Logo" className="h-14 rounded-full shadow-md" />
                <h2 className="text-3xl font-semibold rancho-regular text-gray-800 dark:text-green-300 hidden md:block">
                    Plant_Pulse
                </h2>
            </div>

            <div className="hidden md:block">
                <ul className="flex gap-6 text-gray-700 dark:text-gray-100 font-medium">
                    {links}
                </ul>
            </div>

            <div className="flex items-center space-x-4">
                {user ? (
                    <button
                        onClick={handleLogOut}
                        className="btn btn-outline border-green-600 text-green-700 hover:bg-green-600 hover:text-white transition-colors duration-300"
                    >
                        LogOut
                    </button>
                ) : (
                    <div className="space-x-3">
                        <Link to="/auth/register">
                            <button className="btn btn-outline border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">
                                Register
                            </button>
                        </Link>
                        <Link to="/auth/login">
                            <button className="btn btn-outline border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white transition-colors duration-300">
                                SignIn
                            </button>
                        </Link>
                    </div>
                )}
            </div>

            <div className="flex items-center gap-3 ml-4">

                <ThemeSwitch />


                <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden cursor-pointer text-gray-700 dark:text-white">
                    {isMenuOpen ? <MdOutlineCancel size={26} /> : <CiMenuKebab size={26} />}
                </div>
            </div>

            <div
                className={`absolute ${isMenuOpen ? 'top-16 opacity-100 scale-100' : 'top-10 opacity-0 scale-90 pointer-events-none'
                    } right-4 transition-all duration-500 ease-in-out bg-white dark:bg-gray-800 border dark:border-gray-600 p-4 rounded-xl z-20 backdrop-blur-md shadow-xl md:hidden`}
            >
                <ul className="space-y-2 text-gray-800 dark:text-gray-100 font-medium">{links}</ul>
            </div>
        </nav>

    );
};

export default Header;