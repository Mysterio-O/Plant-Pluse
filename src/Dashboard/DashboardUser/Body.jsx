import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Body = () => {

    const {user}=useContext(AuthContext);

    return (
        <div>
            body
        </div>
    );
};

export default Body;