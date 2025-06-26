import React, { useContext } from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import Loader from '../pages/Loader';
import Scroll from '../pages/Scroll';
const RootLayout = () => {
    const { loading } = useContext(AuthContext);
    
    return (
        <>
            <Scroll />
            {
                loading ? <Loader />
                    : <div className='bg-[#FAFAFA] dark:bg-[#263238] min-h-screen raleway-regular'>
                        <div className='sticky top-0 z-50'>
                            <Header />
                        </div>
                        <Outlet />
                    </div>
            }
        </>
    );
};

export default RootLayout;