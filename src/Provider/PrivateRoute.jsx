import React, { Children, useContext } from 'react';
import { AuthContext } from './AuthProvider';
import Loader from '../pages/Loader';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading) return <Loader/>

    if(user && user?.email) return children


    return <Navigate to='/auth/login'/>
};

export default PrivateRoute;