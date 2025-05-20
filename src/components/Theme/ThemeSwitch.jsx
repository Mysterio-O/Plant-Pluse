import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";


const ThemeSwitch = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className='fixed top-8 right-8'>
            <div onClick={toggleTheme} className='transition duration-500'>
                {
                    theme === 'light'
                        ? <CiLight className='text-yellow-600' size={24}/>
                        : <MdDarkMode className='text-yellow-500' size={24}/>
                }
            </div>
        </div>
    );
};

export default ThemeSwitch;