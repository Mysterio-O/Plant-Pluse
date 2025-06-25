import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import { Outlet } from 'react-router';

const DashLayout = () => {
    return (
        <div className='flex gap-4 bg-gray-200 dark:bg-gray-800 transition-colors duration-300'>
            <div className='w-1/4'>
                <Dashboard />
            </div>
            <div className='w-3/4'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashLayout;