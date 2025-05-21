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
        <nav className='dark:bg-gray-500 px-4 py-2 max-w-6xl mx-auto lg:rounded-xl flex justify-between items-center relative'>
            <div className='flex gap-2 items-center'>
                <img src="/logo-1.webp" alt="Logo" className='h-14 rounded-full' />
                <h2 className='text-3xl font-semibold rancho-regular text-black dark:text-blue-400 hidden md:block'>Plant_Pulse</h2>
            </div>
            <div className='hidden md:block'>
                <ul className='flex gap-5'>
                    {links}
                </ul>
            </div>
            <div>
                {
                    user ? <button
                        onClick={handleLogOut}
                        className='btn btn-outline hover:bg-[#FFCA28] hover:text-white'>LogOut</button>
                        : <div className='space-x-3'>
                            <Link to='/auth/register'>
                                <button className='btn btn-outline hover:bg-[#2E7D32] hover:text-white'>Register</button>
                            </Link>
                            <Link to='/auth/login'>
                                <button className='btn btn-outline hover:bg-[#2E7D32] hover:text-white'>SignIn</button>
                            </Link>
                        </div>
                }



            </div>
            <div className='flex gap-2 items-center flex-row-reverse'>
                <ThemeSwitch />
                <div
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className='md:hidden'>

                    {
                        isMenuOpen ? <MdOutlineCancel size={24} /> : <CiMenuKebab size={24} />
                    }


                </div>
            </div>
            <div className={`absolute ${isMenuOpen ? 'right-4 top-16' : '-top-40 right-4'} transition-all duration-700  bg-[#009688]/20 p-2 rounded-xl z-10 backdrop-blur-sm md:hidden`}>
                <ul>{links}</ul>
            </div>
        </nav>
    );
};

export default Header;