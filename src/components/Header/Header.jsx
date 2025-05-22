import React, { useContext, useState } from 'react';
import ThemeSwitch from '../Theme/ThemeSwitch'
import { Link, NavLink } from 'react-router';
import './header.css'
import { CiMenuKebab } from 'react-icons/ci';
import { MdOutlineCancel } from 'react-icons/md';
import { AuthContext } from '../../Provider/AuthProvider';
import { Tooltip } from 'react-tooltip';
import Swal from 'sweetalert2';

const Header = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = <>
        <NavLink to='/'><li className='hover:text-blue-500  transition duration-300'>Home</li></NavLink>
        <NavLink to='/all_plants'><li className='hover:text-blue-500 transition duration-300 '>All Plants</li></NavLink>
        <NavLink to='/add_plants'><li className='hover:text-blue-500  transition duration-300'>Add Plants</li></NavLink>
        <NavLink to={`/my_plants/${user?.email}`}><li className='hover:text-blue-500  transition duration-300'>My Plants</li></NavLink>
    </>


    const handleLogOut = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will be logged out!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#1a567a",
            cancelButtonColor: "#d33",
            confirmButtonText: "Log Out!",
            cancelButtonText: "Cancel",
            background: '#0a3b59',
            color: '#ffffff',
            customClass: {
                popup: 'text-sm md:text-base lg:text-lg rounded-xl p-4 shadow-xl animate__animated animate__fadeIn',
                title: 'text-white font-semibold',
                content: 'text-white',
                confirmButton: 'rounded-lg px-4 py-2 text-white font-semibold hover:bg-opacity-80 transition-all duration-200',
                cancelButton: 'rounded-lg px-4 py-2 text-white font-semibold hover:bg-opacity-80 transition-all duration-200'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                signOutUser().then(() => {
                    console.log('users signed out successful');
                    Swal.fire({
                        title: "Logged Out!",
                        text: "You have been successfully logged out.",
                        icon: "success",
                        background: '#0a3b59',
                        color: '#ffffff',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#1a567a',
                        customClass: {
                            popup: 'text-sm md:text-base lg:text-lg rounded-xl p-4 shadow-xl animate__animated animate__fadeIn',
                            title: 'text-white font-semibold',
                            content: 'text-white',
                            confirmButton: 'rounded-lg px-4 py-2 text-white font-semibold hover:bg-opacity-80 transition-all duration-200'
                        }
                    });
                }).catch(err => {
                    console.error(err.code, err.message);
                    Swal.fire({
                        title: "Logout Failed",
                        text: "An error occurred while logging out. Please try again.",
                        icon: "error",
                        background: '#0a3b59',
                        color: '#ffffff',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#1a567a',
                        customClass: {
                            popup: 'text-sm md:text-base lg:text-lg rounded-xl p-4 shadow-xl animate__animated animate__fadeIn',
                            title: 'text-white font-semibold',
                            content: 'text-white',
                            confirmButton: 'rounded-lg px-4 py-2 text-white font-semibold hover:bg-opacity-80 transition-all duration-200'
                        }
                    });
                })
            }
        });
    }

    // console.log(user);


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