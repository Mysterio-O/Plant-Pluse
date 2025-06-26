import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router';
import { FaSignOutAlt } from 'react-icons/fa';

const LogoutButton = () => {

    const { signOutUser } = useContext(AuthContext);
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

    return (
        <button
            onClick={handleLogOut}
            className='flex items-center gap-2 mt-10 text-red-600 hover:text-red-700 font-semibold px-3 py-2 rounded-md hover:bg-red-100'
        >
            <FaSignOutAlt />
            Logout
        </button>
    );
};

export default LogoutButton;