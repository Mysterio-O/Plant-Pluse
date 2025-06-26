import React, { useContext, useState } from 'react';
import ThemeSwitch from '../Theme/ThemeSwitch'
import { Link, NavLink } from 'react-router';
import './header.css'
import { CiMenuKebab } from 'react-icons/ci';
import { MdOutlineCancel } from 'react-icons/md';
import { AuthContext } from '../../Provider/AuthProvider';
import { Tooltip } from 'react-tooltip';
const Header = () => {
    const { user } = useContext(AuthContext);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = <>
        <NavLink
            to='/'><li
                className='hover:text-green-500 font-extrabold transition duration-300 uppercase'>Home</li>
        </NavLink>
        <NavLink
            to='/all_plants'><li
                className='hover:text-green-500 font-extrabold transition duration-300 uppercase'>All Plants</li>
        </NavLink>
        <NavLink
            to='/about_us'><li
                className='hover:text-green-500 font-extrabold transition duration-300 uppercase'>About Us</li>
        </NavLink>
        <NavLink
            to='/contact_us'><li
                className='hover:text-green-500 font-extrabold transition duration-300 uppercase'>Contact Us</li>
        </NavLink>
        <NavLink
            to="/support"><li
                className='hover:text-green-500 font-extrabold transition duration-300 uppercase'>Support</li>
        </NavLink>
        {
            user && <NavLink to="/dashboard"><li className='hover:text-green-500 font-extrabold transition duration-300 uppercase'>Dashboard</li></NavLink>
        }
    </>


    

    // console.log(user);


    return (
        <nav className="dark:bg-gray-700 bg-white px-4 py-3 max-w-[1600px] mx-auto lg:rounded-xl flex justify-between items-center relative shadow-md transition-colors duration-300">

            {/* name and logo */}
            <div className="hidden md:flex gap-3 items-center">
                <img src="https://i.ibb.co/r24MJjCV/logo-1.webp" alt="Logo" className="h-14 rounded-full shadow-md hidden md:block" />
                <h2 className="text-3xl font-semibold rancho-regular text-gray-800 dark:text-green-300 ">
                    Plant_Pulse
                </h2>
            </div>


            {/* links of medium and large devices */}
            <div className="hidden md:block">
                <ul className="flex gap-6 text-gray-700 dark:text-gray-100 font-medium">
                    {links}
                </ul>
            </div>

            <div className='flex items-center justify-center'>
                {/* auth buttons, profile picture, tooltip */}
                <div className="flex items-center space-x-4">
                    <div data-tooltip-id='name_tooltip'>
                        <Tooltip
                            id='name_tooltip'
                            delayShow={300}
                            delayHide={200}
                            place='left'
                            style={{
                                backgroundColor: 'blue',
                                color: 'white',
                                fontWeight: 'bold',
                                textShadow: '0 0 5px rgba(0,0,0,0.7)',

                            }}
                        >
                            {user?.displayName}
                            <br />
                            {user?.email}
                        </Tooltip>
                        {
                            user && <img src={user?.photoURL} alt="" className='w-12 h-12 bg-cover rounded-full bg-black p-2 cursor-zoom-in' />
                        }
                    </div>
                    {
                        !user && <div className="space-x-3">
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
                    }
                </div>


                {/* theme control */}
                <div className="flex items-center gap-3 ml-4">

                    <ThemeSwitch />


                    <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden cursor-pointer text-gray-700 dark:text-white">
                        {isMenuOpen ? <MdOutlineCancel size={26} /> : <CiMenuKebab size={26} />}
                    </div>
                </div>
            </div>

            {/* links for small devices */}
            <div
                className={`absolute ${isMenuOpen ? 'top-16 opacity-100 scale-100' : 'top-10 opacity-0 scale-90 pointer-events-none'
                    } right-4 transition-all duration-500 ease-in-out bg-white dark:bg-gray-800 border dark:border-gray-600 p-4 rounded-xl z-20 backdrop-blur-md shadow-xl md:hidden`}
            >
                <ul className="space-y-2 text-gray-800 dark:text-gray-100 font-semibold">{links}</ul>
            </div>
        </nav>

    );
};

export default Header;