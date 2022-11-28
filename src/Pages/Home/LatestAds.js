import { format } from 'date-fns';
import React, { useContext, useEffect, useRef, useState } from 'react';
import './ads.css';

import ProductCard from '../ProductCard/ProductCard';
import BookingModal from '../BookingModal/BookingModal';
import { AuthContext } from '../../Context/AuthContextProvider';

const LatestAds = ({products}) => {
  const {user}= useContext(AuthContext);
    const [product,setProduct]= useState({});
 
if(!user?.email){
  return <></>
}
if(user?.email){


  return (
    <div className='container m-auto my-20'>
      <div className="divider"><span className="text-2xl font-light">Recently Added Products</span></div>
      <div className=" carousel  carousel-horizontal flex flex-row-reverse overflow-x-scroll scroll-auto py-5  rounded-box">
        {
          products.map(product => {
            return <ProductCard key={product._id} setProduct={setProduct} product={product} ></ProductCard>
          })
          
        }
    

        <BookingModal product={product}></BookingModal>
      </div>
    </div>
  );
} };

export default LatestAds;