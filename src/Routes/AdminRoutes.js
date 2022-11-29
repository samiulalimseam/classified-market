import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';

const AdminRoutes = ({children}) => {
    ;
    const {user,account} = useContext(AuthContext);
    


    
    if(account?.acType === "Seller"){
        return children
    }
    if(account?.acType === "Buyer"){
        return <Navigate to={`/login`} ></Navigate>
    }
    
   
};

export default AdminRoutes;