import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router';
const RootLayout = () => {
    return (
        <ThemeProvider>
            <div className='bg-[#FAFAFA] dark:bg-[#263238] min-h-screen'>
                <Header/>
                <Outlet/>
            </div>
        </ThemeProvider>
    );
};

export default RootLayout;