import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import ThemeSwitch from '../../components/Theme/ThemeSwitch';
import { FaLeaf, FaUser, FaPlusCircle, FaSeedling, FaSignOutAlt } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear tokens or user data
        // Navigate to login
        navigate('/login');
    };

    const navItems = [
        { name: 'Overview', icon: <FaLeaf />, path: '/dashboard',end:true },
        { name: 'Profile', icon: <FaUser />, path: '/dashboard/profile', end: true },
        { name: 'Add Plant', icon: <FaPlusCircle />, path: '/dashboard/add-plant', end: true },
        { name: 'My Plants', icon: <FaSeedling />, path: '/dashboard/my-plants', end: true },
    ];

    return (
        <div className='sticky top-0 flex flex-col justify-between py-8 px-4 bg-white dark:bg-gray-200 transition-colors duration-300 h-screen'>
            {/* Logo and Theme Toggle */}
            <div>
                <div className='flex items-center justify-center gap-2 mb-8'>
                    <div
                        data-tooltip-id='home_tooltip'
                        className='flex items-center justify-center gap-2'>
                        <Tooltip
                            id='home_tooltip'
                            delayShow={300}
                            delayHide={200}
                            place='top'
                            style={{
                                backgroundColor: 'blue',
                                color: 'white',
                                fontWeight: 'bold',
                                textShadow: '0 0 5px rgba(0,0,0,0.7)',

                            }}
                        >
                            Back to home
                        </Tooltip>
                        <Link to="/">
                            <img
                                className='h-12 rounded-full shadow-md'
                                src='https://i.ibb.co/r24MJjCV/logo-1.webp'
                                alt='Logo'
                            />
                        </Link>
                        <Link to="/">
                            <h2 className='text-2xl font-bold text-gray-800 dark:text-green-500 rancho-regular'>
                                Plant_Pulse
                            </h2>
                        </Link>
                    </div>
                    <ThemeSwitch />
                </div>

                {/* Navigation Links */}
                <nav className='flex flex-col gap-3'>
                    {navItems.map(item => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            end={item?.end}
                            className={({ isActive }) =>
                                `flex items-center gap-3 p-3 rounded-md font-medium ${isActive
                                    ? 'bg-green-100 text-green-700'
                                    : 'text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-800'
                                }`
                            }
                        >
                            {item.icon}
                            {item.name}
                        </NavLink>
                    ))}
                </nav>
            </div>

            {/* Logout */}
            <button
                onClick={handleLogout}
                className='flex items-center gap-2 mt-10 text-red-600 hover:text-red-700 font-semibold px-3 py-2 rounded-md hover:bg-red-100'
            >
                <FaSignOutAlt />
                Logout
            </button>
        </div>
    );
};

export default Dashboard;
