import React, { useContext, useState } from 'react';
import { CiSettings } from 'react-icons/ci';
import { GoQuestion } from 'react-icons/go';
import { AuthContext } from '../../Provider/AuthProvider';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { AnimatePresence, motion } from 'motion/react';
import LogoutButton from '../shared/LogoutButton';
import { PiUserSwitchLight } from 'react-icons/pi';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import Body from './Body';
import { Tooltip } from 'react-tooltip';


const DashboardUser = () => {

    const { user, signOutUser } = useContext(AuthContext);
    // console.log(user);

    const navigate = useNavigate();

    const [isArrowOpen, setIsArrowOpen] = useState(false);

    const arrowVariant = {
        initial: { y: -20, opacity: 0, scale: 0.7 },
        animate: { y: 0, opacity: 1, scale: 1 },
        exit: { y: -20, opacity: 0, scale: 0.7 },
        transition: { duration: 0.3, ease: 'easeInOut' }

    }

    const handleSwitch = () => {
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

                Swal.fire({
                    title: "Switching Account...",
                    text: 'Action in progress, Please wait..',
                    icon: 'question',
                    customClass: {
                        popup: 'text-sm md:text-base lg:text-lg rounded-xl p-4 shadow-xl animate__animated animate__fadeIn',
                        title: 'text-white font-semibold',
                        content: 'text-white'
                    },
                    timer: 1800,
                    position: 'top-end'
                })

                setTimeout(() => {
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
                        navigate('/switch_account')
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
                }, 2000);


            }
        });
    }

    return (
        <div className='pt-16 pr-4 '>
            {/* setting icon and account toggle */}
            <div className='flex  gap-6 items-center justify-end relative'>

                {/* info tooltip box */}
                <div
                    data-tooltip-id="info_tip"
                    data-tooltip-content={`${user?.displayName ? user.displayName : user?.email}'s Dashboard`} // Add tooltip content
                    data-tooltip-place="top" // Use data-tooltip-place instead of place prop
                >
                    <span>
                        <GoQuestion size={24} />
                    </span>
                    <Tooltip
                        id="info_tip"
                        delayShow={100}
                        delayHide={200}
                        style={{
                            backgroundColor: '#374151',
                            color: 'white',
                            fontWeight: 800,
                            textShadow: '0 0 5px rgba(0,0,0,0.7)',
                        }}
                    />
                </div>


                {/* setting tooltip box */}
                <div
                    data-tooltip-id="setting_tip"
                    data-tooltip-content="Setting"// Add tooltip content
                    data-tooltip-place="top" // Use data-tooltip-place instead of place prop
                >
                    <Link to="/dashboard/setting">
                        <span className='cursor-pointer'>
                            <CiSettings size={30} />
                        </span>
                    </Link>
                    <Tooltip
                        id="setting_tip"
                        delayShow={100}
                        delayHide={200}
                        style={{
                            backgroundColor: '#374151',
                            color: 'white',
                            fontWeight: 800,
                            textShadow: '0 0 5px rgba(0,0,0,0.7)',
                        }}
                    />
                </div>

                <div className='flex items-center justify-center gap-3'>
                    <div className="bg-gray-400 p-1 rounded-full">
                        <img
                            className='w-12 h-12 rounded-full'
                            src={user?.photoURL}
                            alt={`${user?.displayName ? user.displayName : user.email}'s photo`} />
                    </div>
                    <span
                        onClick={() => setIsArrowOpen(!isArrowOpen)}
                        className={`cursor-pointer transition-transform duration-300 transform ${isArrowOpen ? '-rotate-360' : 'rotate-0'
                            }`}
                    >
                        {
                            isArrowOpen ? <IoIosArrowUp size={30} />
                                : <IoIosArrowDown size={30} />
                        }


                    </span>

                    <AnimatePresence>
                        {
                            isArrowOpen && <motion.div
                                className='absolute right-0 top-full mt-2 w-[100px] z-10 text-center'
                                variants={arrowVariant}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition="transition"
                            >
                                <div className='absolute right-0 top-full mt-2 w-[350px] z-10 bg-gray-300 py-6 space-y-2'>

                                    {
                                        user?.displayName ? <p className='text-2xl font-extrabold text-center'>{user.email}</p>
                                            : <p className='text-2xl font-extrabold text-center'>{user.email}</p>
                                    }

                                    <div className='flex items-center justify-center'>
                                        <motion.p
                                            onClick={handleSwitch}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.8 }}
                                            transition={{ duration: 0.3 }}
                                            className='flex items-center justify-center gap-2 text-xl font-medium cursor-pointer'>
                                            <span><PiUserSwitchLight size={30} /></span>
                                            Switch Account
                                        </motion.p>
                                    </div>

                                    <div className='flex justify-center items-center'>
                                        <LogoutButton />
                                    </div>
                                </div>
                            </motion.div>
                        }
                    </AnimatePresence>

                </div>
            </div>
            <div className='mt-10 flex justify-center items-center'>
                <Body />
            </div>
        </div>
    );
};

export default DashboardUser;
