import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';

const SellerRoute = ({children}) => {
    const {accData} = useContext(AuthContext);
    


    
    if(accData?.acType === "Seller"){
        return children
    }
    
    return <div className='m-auto'><p className='text-4xl text-center'>You are not a Seller!</p></div>
};

export default SellerRoute;