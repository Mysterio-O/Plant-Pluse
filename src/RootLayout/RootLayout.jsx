import React, { useContext } from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import Loader from '../pages/Loader';
import Scroll from '../pages/Scroll';
const RootLayout = () => {
    const { loading } = useContext(AuthContext);
    return (
        <ThemeProvider>
            <Scroll/>
            {
                loading ? <Loader />
                    : <div className='bg-[#FAFAFA] dark:bg-[#263238] min-h-screen raleway-regular'>
                        <Header />
                        <Outlet />
                    </div>
            }
        </ThemeProvider>
    );
};

export default RootLayout;