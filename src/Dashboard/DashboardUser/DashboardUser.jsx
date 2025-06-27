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
import { getAccountsFromLocalStorage } from '../../hooks/getloggedAccounts';
import ProfileBox from './ProfileBox';


const DashboardUser = ({handleUserDashClose}) => {

    const { user, signOutUser, signInUser, googleLogin } = useContext(AuthContext);
    // console.log(user);

    const navigate = useNavigate();

    const [isArrowOpen, setIsArrowOpen] = useState(false);


    const [isModalOpen, setIsModalOpen] = useState(false);

    const [savedAcc, setSavedAcc] = useState([]);

    const [selectedAccount, setSelectedAccount] = useState(null);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const arrowVariant = {
        initial: { y: -20, opacity: 0, scale: 0.7 },
        animate: { y: 0, opacity: 1, scale: 1 },
        exit: { y: -20, opacity: 0, scale: 0.7 },
        transition: { duration: 0.3, ease: 'easeInOut' }

    }

    const modalVariant = {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.8 },
        transition: { duration: 0.3, ease: 'easeInOut' },
    };




    const handleSwitch = () => {
        setIsModalOpen(true); // Open the modal
        const savedAccounts = getAccountsFromLocalStorage()
        const accounts = savedAccounts.filter(acc => acc?.email !== user?.email)
        setSavedAcc(accounts);
        setSelectedAccount(null);
        setPassword('');
        setPasswordError('');
    };
    const handleCancelSwitch = () => {
        setIsModalOpen(false); // Close the modal
        setSelectedAccount(null);
        setPassword('');
        setPasswordError('');
    };
    const handleSelectAccount = (acc) => {
        setSelectedAccount(acc);
        setPassword('');
        setPasswordError('');
    };
    const handleConfirmSwitch = async () => {
        if (!selectedAccount) {
            Swal.fire({
                title: 'No Account Selected',
                text: 'Please select an account to switch to.',
                icon: 'warning',
                background: '#0a3b59',
                color: '#ffffff',
                confirmButtonColor: '#1a567a',
            });
            return;
        }

        if (selectedAccount?.provider === 'password' && !password) {
            setPasswordError('Please enter a password.');
            return;
        }

        Swal.fire({
            title: 'Switching Account...',
            text: 'Please wait while we process your request.',
            icon: 'info',
            showConfirmButton: false,
            background: '#0a3b59',
            color: '#ffffff',
            timer: 1500,
        });

        try {
            await signOutUser();

            if (selectedAccount.provider === 'google.com') {
                // Handle Google sign-in
                await googleLogin();
            } else {
                if (!password) {
                    setPasswordError('Please enter a password.');
                    Swal.close();
                    return;
                }
                await signInUser(selectedAccount?.email, password);
            }


            Swal.fire({
                title: 'Account Switched!',
                text: 'You have successfully switched accounts.',
                icon: 'success',
                background: '#0a3b59',
                color: '#ffffff',
                confirmButtonColor: '#1a567a',
            });
            setIsModalOpen(false);
            setSelectedAccount(null);
            setPassword('');
            navigate('/dashboard');
        } catch (err) {
            console.error('Switch account failed:', err);
            setPasswordError('Invalid password. Please try again.');
            Swal.fire({
                title: 'Switch Failed',
                text: 'Invalid password or an error occurred. Please try again.',
                icon: 'error',
                background: '#0a3b59',
                color: '#ffffff',
                confirmButtonColor: '#1a567a',
            });
        }

    }
    // console.log(savedAcc)
    console.log('selected user from dashboard user->', selectedAccount)

    return (
        <div className='pt-16 pr-4 '>

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            variants={modalVariant}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                            className='bg-gray-800 rounded-xl p-6 w-full max-w-md text-white shadow-xl'
                        >
                            <h2 className='text-2xl font-semibold mb-4 text-center'>Switch Account</h2>
                            <p className='text-center mb-6'>Select an account to switch to:</p>

                            <div className='max-h-64 overflow-y-auto space-y-4'>
                                {savedAcc.length > 0 ? (
                                    savedAcc.map((acc, idx) => (
                                        <ProfileBox
                                            key={idx}
                                            acc={acc}
                                            isSelected={selectedAccount?.email === acc.email}
                                            handleSelectAccount={handleSelectAccount}
                                        />
                                    ))
                                ) : (
                                    <p className='text-center text-gray-400'>No other accounts available.</p>
                                )}
                            </div>

                            {selectedAccount?.provider === 'password' && (
                                <div className='mt-4'>
                                    <label className='block text-sm font-medium mb-1'>Password for {selectedAccount.email}</label>
                                    <input
                                        type='password'
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                            setPasswordError('');
                                        }}
                                        className='w-full p-2 rounded bg-gray-700 text-white'
                                        placeholder='Enter password'
                                    />
                                    {passwordError && (
                                        <p className='text-red-500 text-sm mt-1'>{passwordError}</p>
                                    )}
                                </div>
                            )}

                            <div className='flex justify-center gap-4 mt-6'>
                                {selectedAccount && (
                                    <button
                                        onClick={handleConfirmSwitch}
                                        className='px-4 py-2 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 transition-all duration-200'
                                    >
                                        Switch Account
                                    </button>
                                )}
                                <button
                                    onClick={handleCancelSwitch}
                                    className='px-4 py-2 bg-red-600 rounded-lg text-white font-semibold hover:bg-red-700 transition-all duration-200'
                                >
                                    Cancel
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

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
                        <span onClick={handleUserDashClose} className='cursor-pointer'>
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
                    <div className="bg-gray-400 dark:bg-white p-1 rounded-full">
                        <img
                            className='w-8 h-8 rounded-full'
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
