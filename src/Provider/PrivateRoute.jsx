import React, { Children, useContext } from 'react';
import { AuthContext } from './AuthProvider';
import Loader from '../pages/Loader';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);

    if(loading) return <Loader/>

    if(user && user?.email) return children


    return <Navigate state={location.pathname} to='/auth/login'/>
};

export default PrivateRoute;