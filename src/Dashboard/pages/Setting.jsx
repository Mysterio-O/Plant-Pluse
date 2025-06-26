import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaRegCircleUser } from 'react-icons/fa6';

const Setting = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className='bg-white dark:bg-gray-400 min-h-[calc(100vh-110px)] mt-20 py-10 rounded-tl-[35px] rounded-tr-[5px] rounded-bl-[50px] shadow-2xl relative'>

            {/* user photo */}
            <div className="absolute w-20 h-20 rounded-full -top-8 -right-2 bg-[#1E2939] p-1">
                {
                    user?.photoURL ? <img src={`${user?.photoURL}`} alt="" className='rounded-full' />
                        : <div className='flex justify-center items-center text-white'>

                            <FaRegCircleUser size={65} />
                        </div>
                }
            </div>
            <div className='absolute top-0 right-20'>
                <h4 className='font-bold text-2xl py-2 text-blue-600'>
                    {`${user?.displayName ? user.displayName : user?.email ? user.email : 'Anonymous User'}`}
                </h4>
            </div>

        </div>
    );
};

export default Setting;