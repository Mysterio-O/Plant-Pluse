import React from 'react';
import { FaWpexplorer } from 'react-icons/fa';
import { MdFlipToBack } from 'react-icons/md';
import { Link, useLocation } from 'react-router';

const SignIn = () => {


    const location = useLocation();
    console.log(location);
    return (
        <div className='min-h-screen bg-[url(/signin-bg.png)]'>

            <div className='max-w-6xl mx-auto gap-5 md:grid grid-cols-9 md:pt-20 p-4'>
                <div className='md:col-span-4 lg:col-span-6 backdrop-blur-md bg-white/10 rounded-xl md:p-8 shadow-lg text-white group mx-auto'>
                    <div className='max-w-[400px] lg:max-w-[550px] p-3'>
                        <h2 className='text-3xl text-center font-bold mb-4 flex gap-2 items-center'>Explore more with us
                            <span className='text-green-600'>
                                <FaWpexplorer size={38} />
                            </span>
                        </h2>
                        <img src='/signin.png' alt="" className='bg-cover overflow-hidden w-full md:h-[65%] md:w-[100%] rounded-2xl opacity-50 group-hover:opacity-70' />
                        <p className="text-xl text-center mb-3 mt-6">
                            Don't have an account?
                        </p>
                        <Link to='/auth/register'>
                            <button className="btn backdrop-blur-sm bg-white/10 border-0 text-green-400 text-xl hover:bg-green-400 hover:text-black btn-block transition-all duration-400">
                                Register
                            </button>
                        </Link>
                    </div>

                </div>



                {/* second container */}
                <div className='md:col-span-4 lg:col-span-3 backdrop-blur-md bg-white/10 rounded-xl p-8 shadow-lg w-full max-w-md text-white'>
                    <h2 className="text-2xl font-bold mb-4 text-center">Get Started</h2>
                    <form>
                        <input name="email" type="email" placeholder="Email" className="input input-bordered w-full mb-4 bg-white/20 text-white placeholder-white" />
                        <input name='password' type="password" placeholder="Password" className="input input-bordered w-full mb-6 bg-white/20 text-white placeholder-white" />
                        <button type='submit' className="btn btn-success w-full mb-4">Sign In</button>

                        {/* {
                            isErr && <p className='text-red-600 text-center'>Invalid email or password</p>
                        } */}

                    </form>
                    <div className="divider text-white">Or Sign in with</div>

                    {/* social button container */}
                    <div className='flex flex-col gap-4 items-center justify-center mt-5 px-4'>
                        <button
                            
                            className="border border-[#e5eaf2] rounded-md py-2 px-4 flex items-center gap-[10px] text-[1rem] text-[#424242] hover:bg-gray-50 transition-all duration-200 w-full cursor-pointer">
                            <img src="https://i.ibb.co/dQMmB8h/download-4-removebg-preview-1.png" alt="google logo"
                                className="w-[23px]" />
                            Sign in with Google
                        </button>

                        <button
                            className="border border-[#1777f2] text-[#1777f2] rounded-md py-[11px] px-[7px] flex items-center gap-[10px] text-[1rem] w-full hover:bg-[#1777f2] hover:text-white transition-all duration-300 cursor-pointer">
                            <img
                                src="https://assets.website-files.com/632c941ea9199f8985f3fd52/632c960d4839cf20aeafcad2_facebook.svg"
                                alt="Facebook logo"
                                className="w-[25px]" />
                            Continue with Facebook
                        </button>
                    </div>

                    <div className="divider"></div>

                    <div className='group relative w-full'>
                        <Link to='/'>
                            <button
                                style={{
                                    borderTopLeftRadius: '20px',
                                    borderBottomRightRadius: '20px',
                                    borderTopRightRadius: '6px'
                                }}
                                className="mt-8 btn-block bg-orange-400 px-5 py-3 cursor-pointer flex gap-2 items-center justify-center group">Back to Home
                                <span className='group-hover:text-indigo-600'>
                                    <MdFlipToBack size={22} />
                                </span>
                            </button>
                        </Link>
                        <div className='absolute bottom-0 left-0 h-1 w-[95%] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500'></div>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default SignIn;