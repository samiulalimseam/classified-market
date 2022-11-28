import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const SearchPage = () => {
    const searchTerm = useLoaderData();
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/search/${searchTerm}`)
        .then(res=>res.json())
        .then(data=> setProducts(data))
        .catch(err=>console.error(err))
    },[])
    return (
        <div className='container m-auto h-screen'>
            <h2 className="text-2xl font-light">Found {products.length} products</h2>
        </div>
    );
};

export default SearchPage;