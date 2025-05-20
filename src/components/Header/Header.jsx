import React from 'react';
import ThemeSwitch from '../Theme/ThemeSwitch'
import { Link, NavLink } from 'react-router';
import './header.css'

const Header = () => {
    const links = <>
        <NavLink to='/'><li className='hover:text-blue-500 text-black'>Home</li></NavLink>
        <NavLink to='/all_plants'><li className='hover:text-blue-500 text-black'>All Plants</li></NavLink>
        <NavLink to='/add_plants'><li className='hover:text-blue-500 text-black'>Add Plants</li></NavLink>
        <NavLink to='/my_plants'><li className='hover:text-blue-500 text-black'>My Plants</li></NavLink>
    </>
    return (
        <nav className='dark:bg-[#F5F5F5] px-4 py-2 max-w-6xl mx-auto rounded-xl flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
                <img src="/logo-1.webp" alt="Logo" className='h-14 rounded-full' />
                <h2 className='text-3xl font-semibold rancho-regular text-black dark:text-blue-400'>Plant_Pulse</h2>
            </div>
            <div>
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
            <div>
                <ThemeSwitch />
            </div>
        </nav>
    );
};

export default Header;