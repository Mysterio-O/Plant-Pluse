import React from 'react';

const ProfileBox = ({ acc, isSelected, handleSelectAccount }) => {
    // console.log(acc);
    return (
        <div
            className={`flex items-center gap-3 p-2 hover:bg-gray-700 rounded-lg cursor-pointer ${isSelected ? 'bg-gray-700 border-2 border-blue-500' : ''
                }`}
            onClick={() => handleSelectAccount(acc)}
        >
            <div className='rounded-full p-1 bg-black'>
                <img src={acc?.photoURL} alt="" className='w-16 h-16 rounded-full' />
            </div>
            <div>
                <h3 className='text-lg font-medium'>{acc?.displayName || acc?.email}</h3>
                <p className='text-sm text-gray-400'>{acc?.email}</p>
                <p className='text-xs text-gray-500'>
                    {acc?.provider === 'google.com' ? 'Google Account' : 'Email/Password'}
                </p>
            </div>
        </div>
    );
};

export default ProfileBox;