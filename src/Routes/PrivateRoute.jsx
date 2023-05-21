import React from 'react'
import { AuthContext } from '../Context/AuthContextProvided';
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const isAuth=React.useContext(AuthContext);
    if(!isAuth.login){
        return <Navigate to="/"/>;
    }
    return children;
}

export default PrivateRoute