import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import { FaUserCircle, FaLeaf } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import { updatePassword } from 'firebase/auth';

const Profile = () => {
    const { user, setProfileInfo, changePassword } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        name: user?.displayName || '',
        email: user?.email || '',
        photoURL: user?.photoURL || '',
        password: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [passErr, setPassErr] = useState('');



    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleProfileUpdate = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photoURL.value;
        console.log(name, email, photo);

        const updatedDoc = {
            displayName: name,
            photoURL: photo,
            email: email
        }

        setProfileInfo(updatedDoc)
            .then(() => {
                console.log('profile updated');
                setTimeout(() => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Profile Updated!',
                        text: 'Your profile information has been saved.',
                        timer: 2000,
                        timerProgressBar: true,
                        showConfirmButton: false,
                        position: 'top-end',
                        toast: true,
                        customClass: {
                            popup: 'raleway-regular bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200',
                            title: 'text-xl font-semibold',
                            content: 'text-gray-600 dark:text-gray-300',
                        },
                    }).then(() => {
                        setIsSubmitting(false);
                    });
                }, 1000);
            })
            .catch(err => console.error(err))
    };

    console.log(formData.password)
    // Handle password change
    const handlePasswordChange = (e) => {
        e.preventDefault();

        const password = e.target.password.value;
        console.log(password);

        if (!/.{6,}/.test(password)) {
            setPassErr('Password must be at least 6 characters');
            return;
        } else if (!/[a-z]/.test(password)) {
            setPassErr('Password must contain at least 1 lowercase letter');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setPassErr('Password must contain at least one uppercase letter');
            return;
        } else {
            setPassErr('');
        }
        setIsSubmitting(true);
        changePassword(password)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Password Changed!',
                    text: 'Your password has been updated.',
                    timer: 2000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    position: 'top-end',
                    toast: true,
                    customClass: {
                        popup: 'raleway-regular bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200',
                        title: 'text-xl font-semibold',
                        content: 'text-gray-600 dark:text-gray-300',
                    },
                })
                setIsSubmitting(false);
            }).catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Password Change failed!',
                    text: 'Your action has been failed.',
                    timer: 2000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    position: 'top-end',
                    toast: true,
                    customClass: {
                        popup: 'raleway-regular bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200',
                        title: 'text-xl font-semibold',
                        content: 'text-gray-600 dark:text-gray-300',
                    },
                })
            })
    }

    // Simulate logout
    const handleLogout = () => {
        Swal.fire({
            icon: 'question',
            title: 'Log Out?',
            text: 'Are you sure you want to log out?',
            showCancelButton: true,
            confirmButtonText: 'Yes, Log Out',
            cancelButtonText: 'Cancel',
            customClass: {
                popup: 'raleway-regular bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200',
                confirmButton: 'px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600',
                cancelButton: 'px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg',
            },
            buttonsStyling: false,
        }).then((result) => {
            if (result.isConfirmed) {
                // Simulate logout (replace with actual logout logic)
                Swal.fire({
                    icon: 'success',
                    title: 'Logged Out',
                    text: 'You have been logged out successfully.',
                    timer: 2000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    position: 'top-end',
                    toast: true,
                    customClass: {
                        popup: 'raleway-regular bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200',
                    },
                });
            }
        });
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    // Sample plant stats (based on Plant Pulse context)
    const plantStats = {
        totalPlants: 5,
        activeCareSchedules: 3,
        favoritePlant: 'Aloe Vera',
    };

    return (
        <motion.div
            className="p-6 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 raleway-regular min-h-[calc(100vh-4rem)]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Header */}
            <motion.h1
                className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-6 flex items-center gap-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <FaLeaf /> Your Profile
            </motion.h1>

            {/* Main Content */}
            <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row gap-8">
                {/* Profile Update Form */}
                <motion.div
                    className="lg:w-1/2 bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <h2 className="text-2xl font-semibold mb-4">Update Profile</h2>
                    <div className="flex justify-center mb-4">
                        {formData.photoURL ? (
                            <img
                                src={formData.photoURL}
                                alt="Profile"
                                className="w-24 h-24 rounded-full object-cover"
                            />
                        ) : (
                            <FaUserCircle className="w-24 h-24 text-emerald-500" />
                        )}
                    </div>
                    <form onSubmit={handleProfileUpdate} className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <label htmlFor="name" className="block text-sm font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                defaultValue={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-emerald-500"
                                aria-required="true"
                                placeholder="Your Name"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <label htmlFor="email" className="block text-sm font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                defaultValue={formData.email}
                                required
                                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-emerald-500"
                                aria-required="true"
                                placeholder="your.email@example.com"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <label htmlFor="photoURL" className="block text-sm font-medium">
                                Photo URL
                            </label>
                            <input
                                type="url"
                                id="photoURL"
                                name="photoURL"
                                defaultValue={formData.photoURL}
                                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-emerald-500"
                                placeholder="https://example.com/photo.jpg"
                            />
                        </motion.div>
                        <motion.button
                            type="submit"
                            className="w-full px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-50"
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isSubmitting ? 'Saving...' : 'Save Profile'}
                        </motion.button>
                    </form>
                </motion.div>

                {/* Plant Stats and Account Settings */}
                <motion.div
                    className="lg:w-1/2 bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <h2 className="text-2xl font-semibold mb-4">Plant Collection</h2>
                    <div className="space-y-4 mb-6">
                        <p className="text-gray-600 dark:text-gray-300">
                            <span className="font-medium">Total Plants:</span> {plantStats.totalPlants}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                            <span className="font-medium">Active Care Schedules:</span> {plantStats.activeCareSchedules}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                            <span className="font-medium">Favorite Plant:</span> {plantStats.favoritePlant}
                        </p>
                    </div>

                    <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
                    <form onSubmit={handlePasswordChange} className="space-y-4 mb-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <label htmlFor="password" className="block text-sm font-medium">
                                New Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-emerald-500"
                                placeholder="Enter new password"
                            />
                            {
                                passErr && <p className="text-red-500">{passErr}</p>
                            }
                        </motion.div>
                        <motion.button
                            type="submit"
                            className="w-full px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-50"
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isSubmitting ? 'Changing...' : 'Change Password'}
                        </motion.button>
                    </form>
                    <motion.button
                        onClick={handleLogout}
                        className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Log Out
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
};



export default Profile;