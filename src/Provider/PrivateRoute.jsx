import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';
import Loader from '../pages/Loader';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const [locationState, setLocationState] = useState(null);

    // handling switch account by state
    const [isSwitch, setIsSwitch] = useState(false);


    const location = useLocation();
    console.log(location);
    console.log(locationState);


    useEffect(() => {
        if (location?.pathname) {
            setLocationState(location.pathname);
        }
        if (location.pathname === '/dashboard') {
            setIsSwitch(true);
        }
    }, [location])

    if (loading) return <Loader />

    if (user && user?.email) return children


    return <Navigate state={locationState} to={`${isSwitch ? '/switch_account' : "/auth/login"}`} />
};

export default PrivateRoute;