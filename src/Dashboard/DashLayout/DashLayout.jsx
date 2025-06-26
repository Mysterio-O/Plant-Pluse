import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import { Outlet } from 'react-router';
import DashboardUser from '../DashboardUser/DashboardUser';

const DashLayout = () => {
    return (
        <div className='flex gap-4 bg-gray-200 dark:bg-gray-800 transition-colors duration-300 raleway-regular'>
            <div className='w-1/4'>
                <Dashboard />
            </div>
            <div className='w-2/4'>
                <Outlet />
            </div>

            {/* dashboard user */}
            <div className='w-1/4 max-h-screen sticky top-0 bg-white dark:bg-gray-400'>
                <DashboardUser />
            </div>
        </div>
    );
};

export default DashLayout;