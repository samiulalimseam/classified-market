import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';
import LoadingSpinner from './LoadingSpinner';

const PrivateRoutes = ({children}) => {
    const {user,loading,setLoading} = useContext(AuthContext);
    const location = useLocation()
    // if(loading){
    //     if(user){
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 600);    
    //     }
    //     return <LoadingSpinner></LoadingSpinner>
    // }
    if(user){
        setLoading(false)
        return children;
    }
    return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
};

export default PrivateRoutes;