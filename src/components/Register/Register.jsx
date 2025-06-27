import React, { useContext, useEffect, useState } from 'react';
import { GiTreeBranch } from 'react-icons/gi';
import { MdFlipToBack } from 'react-icons/md';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import { RxEyeClosed, RxEyeOpen } from 'react-icons/rx';
import Swal from 'sweetalert2';
import { UAParser } from 'ua-parser-js';
import { setAccountToLocalStorage } from '../../hooks/getloggedAccounts';
import { saveUser } from '../../apis/loginUser';

const Register = () => {
    const { googleLogin, signUpNewUser, setProfileInfo } = useContext(AuthContext);
    const navigate = useNavigate();

    const [passErr, setPassErr] = useState('');
    const [confirmPassErr, setConfirmPassErr] = useState(false);
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [isEyeOpen, setIsEyeOpen] = useState(false);

    const getDeviceInfo = () => {
        const parser = new UAParser();
        const result = parser.getResult();
        return {
            browser: `${result?.browser?.name} ${result?.browser?.version}`,
            os: `${result?.os?.name} ${result?.os?.version}`,
            device: result?.device?.type || 'Desktop',
            screen: `${window.screen.width}x${window.screen.height}`,
        };
    };
    const deviceInfo = getDeviceInfo();

    const handleGoogle = async () => {
        try {
            // Step 1: Perform Google login and get user data
            const result = await googleLogin();
            const currentUser = result.user;
            const { uid, providerData, createdAt, lastLoginAt, apiKey } = currentUser;

            const userInfoToSave = { uid, providerData, createdAt, lastLoginAt, apiKey };

            // Step 2: Send user data to the server
            const response = await saveUser(userInfoToSave, deviceInfo)

            // Step 3: Check if the server request was successful
            if (!response.ok) {
                throw new Error(`Failed to save user data: ${response.statusText}`);
            }
            if (response.ok) {
                const accountInfo = {
                    uid, providerData, createdAt, lastLoginAt, apiKey
                }
                setAccountToLocalStorage(accountInfo)
            }

            const responseData = await response.json();
            console.log('Server response:', responseData);

            // Step 4: Show success notification
            await Swal.fire({
                title: 'User Created!',
                text: 'Your account was successfully created.',
                icon: 'success',
                background: 'rgba(10, 59, 89, 0.7)',
                color: '#ffffff',
                position: 'center',
                showConfirmButton: true,
                confirmButtonText: 'Explore',
                confirmButtonColor: '#34D399',
                customClass: {
                    popup: 'text-sm md:text-base lg:text-lg rounded-2xl p-6 shadow-2xl backdrop-blur-md',
                    title: 'text-white font-bold',
                    content: 'text-white',
                    confirmButton: 'text-black font-semibold px-6 py-2 rounded-md',
                },
            });

            // Step 5: Navigate to dashboard
            navigate('/dashboard');
        } catch (err) {
            console.error('Error during Google login:', err.code, err.message);
            await Swal.fire({
                title: 'Login Failed!',
                text: err.message || 'Something went wrong while logging in.',
                icon: 'error',
                background: 'rgba(89, 10, 10, 0.7)',
                color: '#ffffff',
                position: 'center',
                showConfirmButton: true,
                confirmButtonText: 'Try Again',
                confirmButtonColor: '#F87171',
                customClass: {
                    popup: 'text-sm md:text-base lg:text-lg rounded-2xl p-6 shadow-2xl backdrop-blur-md',
                    title: 'text-white font-bold',
                    content: 'text-white',
                    confirmButton: 'text-black font-semibold px-6 py-2 rounded-md',
                },
            });
        }
    };

    useEffect(() => {
        if (pass !== confirmPass) {
            setConfirmPassErr(true);
        } else {
            setConfirmPassErr(false);
        }
    }, [confirmPass, pass]);

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        const profileInfoObj = { displayName: name, photoURL: photo };

        // Password validation
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

        if (password !== confirmPassword) {
            setConfirmPassErr(true);
            Swal.fire({
                title: 'Password Mismatch!',
                text: 'Passwords do not match. Please try again.',
                icon: 'error',
                background: 'rgba(89, 10, 10, 0.7)',
                color: '#ffffff',
                position: 'center',
                confirmButtonText: 'OK',
                confirmButtonColor: '#F87171',
                customClass: {
                    popup: 'text-sm md:text-base lg:text-lg rounded-2xl p-6 shadow-2xl backdrop-blur-md',
                    title: 'text-white font-bold',
                    content: 'text-white',
                    confirmButton: 'text-black font-semibold px-6 py-2 rounded-md',
                },
            });
            return;
        }

        try {
            // Create user with email and password
            const userCredential = await signUpNewUser(email, password);
            const user = userCredential.user;

            const { uid, providerData, createdAt, lastLoginAt, apiKey } = user;
            const userInfoToSave = { uid, providerData, createdAt, lastLoginAt, apiKey };

            // Set profile info
            await setProfileInfo(profileInfoObj);

            // Send user data to server
            const response = await saveUser(userInfoToSave, deviceInfo)

            if (!response.ok) {
                throw new Error(`Failed to save user data: ${response.statusText}`);
            }
            if(response.ok){
                setAccountToLocalStorage(userInfoToSave)
            }

            const responseData = await response.json();
            console.log('Server response:', responseData);

            await Swal.fire({
                title: 'User Created!',
                text: 'Your account was successfully created.',
                icon: 'success',
                background: 'rgba(10, 59, 89, 0.7)',
                color: '#ffffff',
                position: 'center',
                showConfirmButton: true,
                confirmButtonText: 'Explore',
                confirmButtonColor: '#34D399',
                customClass: {
                    popup: 'text-sm md:text-base lg:text-lg rounded-2xl p-6 shadow-2xl backdrop-blur-md',
                    title: 'text-white font-bold',
                    content: 'text-white',
                    confirmButton: 'text-black font-semibold px-6 py-2 rounded-md',
                },
            });

            navigate('/dashboard');
        } catch (err) {
            console.error('Error during signup:', err.code, err.message);
            await Swal.fire({
                title: 'Signup Failed!',
                text: err.message || 'Unable to create your account. Please try again.',
                icon: 'error',
                background: 'rgba(89, 10, 10, 0.7)',
                color: '#ffffff',
                position: 'center',
                showConfirmButton: true,
                confirmButtonText: 'Retry',
                confirmButtonColor: '#F87171',
                customClass: {
                    popup: 'text-sm md:text-base lg:text-lg rounded-2xl p-6 shadow-2xl backdrop-blur-md',
                    title: 'text-white font-bold',
                    content: 'text-white',
                    confirmButton: 'text-black font-semibold px-6 py-2 rounded-md',
                },
            });
        }
    };

    return (
        <div className="min-h-screen bg-[url(https://i.ibb.co/XfnTWFs/auth-bg.png)] bg-cover">
            {/* main container */}
            <div className="max-w-6xl mx-auto gap-5 md:grid grid-cols-9 md:pt-20 p-4">
                {/* first content */}
                <div className="md:col-span-4 lg:col-span-3 backdrop-blur-md bg-white/10 rounded-xl p-8 shadow-lg w-full max-w-md text-white">
                    <h2 className="text-3xl font-bold mb-2 text-center">Sign Up to your new account</h2>

                    <form onSubmit={handleRegister} className="space-y-4">
                        <input
                            name="name"
                            type="text"
                            placeholder="Name"
                            className="input input-bordered w-full bg-white/20 text-white placeholder-white/70"
                            required
                        />

                        <input
                            name="photo"
                            type="text"
                            placeholder="Photo URL"
                            className="input input-bordered w-full bg-white/20 text-white placeholder-white/70"
                            required
                        />

                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            className="input input-bordered w-full bg-white/20 text-white placeholder-white/70"
                            required
                        />

                        <div className="relative">
                            <input
                                onChange={(e) => setPass(e.target.value)}
                                name="password"
                                type={isEyeOpen ? 'text' : 'password'}
                                placeholder="Password"
                                className="input input-bordered w-full bg-white/20 text-white placeholder-white/70"
                                required
                            />
                            <span
                                onClick={() => setIsEyeOpen(!isEyeOpen)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                            >
                                {isEyeOpen ? <RxEyeOpen /> : <RxEyeClosed />}
                            </span>
                        </div>

                        <div className="relative">
                            <input
                                onChange={(e) => setConfirmPass(e.target.value)}
                                name="confirmPassword"
                                type={isEyeOpen ? 'text' : 'password'}
                                placeholder="Confirm Password"
                                className={`input input-bordered w-full bg-white/20 text-white placeholder-white/70 ${confirmPassErr && 'input-error placeholder-red-500'
                                    }`}
                                required
                            />
                            <span
                                onClick={() => setIsEyeOpen(!isEyeOpen)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                            >
                                {isEyeOpen ? <RxEyeOpen /> : <RxEyeClosed />}
                            </span>
                        </div>

                        {confirmPassErr && <p className="text-red-500 text-center">Password Doesn't Match</p>}

                        <button type="submit" className="btn btn-success w-full">
                            Sign Up
                        </button>

                        <p className="text-red-500 text-center">{passErr}</p>
                    </form>

                    <div className="divider text-white/60 mt-6">Or Sign up with</div>

                    {/* social sign up options */}
                    <div className="flex flex-col gap-4 items-center justify-center mt-5 px-4">
                        <button
                            onClick={handleGoogle}
                            className="border border-[#e5eaf2] rounded-md py-2 px-4 flex items-center gap-[10px] text-[1rem] text-[#424242] hover:bg-gray-50 transition-all duration-200 w-full cursor-pointer"
                        >
                            <img
                                src="https://i.ibb.co/dQMmB8h/download-4-removebg-preview-1.png"
                                alt="google logo"
                                className="w-[23px]"
                            />
                            Sign up with Google
                        </button>

                        <button
                            className="border border-[#1777f2] text-[#1777f2] rounded-md py-[11px] px-[7px] flex items-center gap-[10px] text-[1rem] w-full hover:bg-[#1777f2] hover:text-white transition-all duration-300 cursor-pointer"
                        >
                            <img
                                src="https://assets.website-files.com/632c941ea9199f8985f3fd52/632c960d4839cf20aeafcad2_facebook.svg"
                                alt="Facebook logo"
                                className="w-[25px]"
                            />
                            Continue with Facebook
                        </button>
                    </div>

                    <div className="divider"></div>

                    {/* back to home */}
                    <div className="group relative w-full">
                        <Link to="/">
                            <button
                                style={{
                                    borderTopLeftRadius: '20px',
                                    borderBottomRightRadius: '20px',
                                    borderTopRightRadius: '6px',
                                }}
                                className="mt-8 btn-block bg-orange-400 px-5 py-3 cursor-pointer flex gap-2 items-center justify-center group"
                            >
                                Back to Home
                                <span className="group-hover:text-indigo-600">
                                    <MdFlipToBack size={22} />
                                </span>
                            </button>
                        </Link>
                        <div className="absolute bottom-0 left-0 h-1 w-[95%] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    </div>
                </div>

                {/* second content */}
                <div className="md:col-span-4 lg:col-span-6 backdrop-blur-md bg-white/10 rounded-xl md:p-8 shadow-lg text-white group mx-auto">
                    <div className="max-w-[400px] lg:max-w-[550px] p-3">
                        <h2 className="text-3xl text-center font-bold mb-4 items-center text-green-400 relative">
                            🌵 “Plant Smarter. Care Better. Live Greener.”
                            <span className="absolute text-black top-[-10px] left-1/2 transform -translate-x-1/2">
                                <GiTreeBranch size={36} className="text-green-500" />
                            </span>
                        </h2>
                        <img
                            src="https://i.ibb.co/4g4NsPf/register.webp"
                            alt=""
                            className="bg-cover overflow-hidden w-full md:h-[65%] md:w-[100%] rounded-2xl opacity-50 group-hover:opacity-70"
                        />
                        <p className="text-xl text-center mb-3 mt-6">Already have an account?</p>
                        <Link to="/auth/login">
                            <button className="btn backdrop-blur-sm bg-white/10 border-0 text-green-400 text-xl hover:bg-green-400 hover:text-black btn-block transition-all duration-400">
                                Sign In
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;