import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';

import ProductCard from '../ProductCard/ProductCard';

const CategoryPage = () => {
    const [product,setCardProduct]=useState({});
    const products = useLoaderData();
    return (
        <div className='container m-auto h-screen'>
            <p className="text-2xl font-extralight text-center">Total {products.length} Products </p>
            <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6">
                {
                    products.map(product=>{
                        return <ProductCard setCardProduct={setCardProduct} key={product._id} product={product}></ProductCard>
                    })
                }
                <BookingModal product={product}></BookingModal>
            </div>
            
        </div>
    );
};

export default CategoryPage;