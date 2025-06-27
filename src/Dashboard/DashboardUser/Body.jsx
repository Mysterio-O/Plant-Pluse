import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Body = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <div className='flex flex-col justify-center items-center gap-4'>
                <img src={user?.photoURL} alt="" className='h-28 w-28 rounded-full' />
                <h3 className='font-bold text-xl'>{user?.displayName}</h3>
            </div>
        </div>
    );
};

export default Body;