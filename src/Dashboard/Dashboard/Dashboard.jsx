import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import ThemeSwitch from '../../components/Theme/ThemeSwitch';
import { FaLeaf, FaUser, FaPlusCircle, FaSeedling, FaSignOutAlt, FaTree } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Dashboard = () => {

    const { user,signOutUser } = useContext(AuthContext);

    const navigate = useNavigate();

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
                    // console.log('users signed out successful');
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
                    navigate('/')
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

    const navItems = [
        { name: 'Overview', icon: <FaLeaf />, path: '/dashboard', end: true },
        { name: 'Profile', icon: <FaUser />, path: '/dashboard/profile', end: true },
        { name: 'Add Plant', icon: <FaPlusCircle />, path: '/dashboard/add-plant', end: true },
        { name: 'My Plants', icon: <FaSeedling />, path: `/dashboard/my_plants/${user?.email}`, end: true },
        { name: 'All Plants', icon: <FaTree />, path: "/dashboard/all_plants", end: true }
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
                onClick={handleLogOut}
                className='flex items-center gap-2 mt-10 text-red-600 hover:text-red-700 font-semibold px-3 py-2 rounded-md hover:bg-red-100'
            >
                <FaSignOutAlt />
                Logout
            </button>
        </div>
    );
};

export default Dashboard;
