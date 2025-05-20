import React, { useState } from 'react';
import ThemeSwitch from '../Theme/ThemeSwitch'
import { Link, NavLink } from 'react-router';
import './header.css'
import { CiMenuKebab } from 'react-icons/ci';
import { MdOutlineCancel } from 'react-icons/md';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = <>
        <NavLink to='/'><li className='hover:text-blue-500 text-black'>Home</li></NavLink>
        <NavLink to='/all_plants'><li className='hover:text-blue-500 text-black'>All Plants</li></NavLink>
        <NavLink to='/add_plants'><li className='hover:text-blue-500 text-black'>Add Plants</li></NavLink>
        <NavLink to='/my_plants'><li className='hover:text-blue-500 text-black'>My Plants</li></NavLink>
    </>


    const handleMenu = () => {
        // console.log('clicked')
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className='dark:bg-[#F5F5F5] px-4 py-2 max-w-6xl mx-auto lg:rounded-xl flex justify-between items-center relative'>
            <div className='flex gap-2 items-center'>
                <img src="/logo-1.webp" alt="Logo" className='h-14 rounded-full' />
                <h2 className='text-3xl font-semibold rancho-regular text-black dark:text-blue-400 hidden md:block'>Plant_Pulse</h2>
            </div>
            <div className='hidden lg:block'>
                <ul className='flex gap-5'>
                    {links}
                </ul>
            </div>
            <div>
                <div className='space-x-3'>
                    <Link to='/auth/register'>
                        <button className='btn btn-outline hover:bg-[#2E7D32] hover:text-white'>Register</button>
                    </Link>
                    <Link to='/auth/login'>
                        <button className='btn btn-outline hover:bg-[#2E7D32] hover:text-white'>SignIn</button>
                    </Link>
                </div>
            </div>
            <div className='flex gap-2 items-center flex-row-reverse'>
                <ThemeSwitch />
                <div
                    onClick={handleMenu}
                    className='lg:hidden'>

                        {
                            isMenuOpen ? <MdOutlineCancel size={24} /> : <CiMenuKebab size={24}/>
                        }
                    
                    
                </div>
            </div>
            <div className={`absolute ${isMenuOpen ? 'right-10 top-15' : ''} -top-150 -right-100 transition-all duration-700  bg-[#009688] p-2 rounded-xl`}>
                <ul>{links}</ul>
            </div>
        </nav>
    );
};

export default Header;