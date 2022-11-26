import React, { useEffect, useRef, useState } from 'react';
import './ads.css';

const LatestAds = () => {
    const products = [
        {
          id: 1,
          title: "Leather Premium Half Shoe For Men (Brown) ",
          img: "https://cdn.shopify.com/s/files/1/0583/9971/9619/products/2_12d1ccca-dbec-4db2-861f-fd59f69c4fed.jpg?v=1650761673",
          price: 1999,
          size: [
            39,
            41,
            43,
            44
          ]
        },
        {
          id: 1,
          title: "Leather Premium Half Shoe For Men (Brown) ",
          img: "https://cdn.shopify.com/s/files/1/0583/9971/9619/products/2_12d1ccca-dbec-4db2-861f-fd59f69c4fed.jpg?v=1650761673",
          price: 1999,
          size: [
            39,
            41,
            43,
            44
          ]
        },
        {
          id: 1,
          title: "Leather Premium Half Shoe For Men (Brown) ",
          img: "https://cdn.shopify.com/s/files/1/0583/9971/9619/products/2_12d1ccca-dbec-4db2-861f-fd59f69c4fed.jpg?v=1650761673",
          price: 1999,
          size: [
            39,
            41,
            43,
            44
          ]
        },
        {
          id: 1,
          title: "Leather Premium Half Shoe For Men (Brown) ",
          img: "https://cdn.shopify.com/s/files/1/0583/9971/9619/products/2_12d1ccca-dbec-4db2-861f-fd59f69c4fed.jpg?v=1650761673",
          price: 1999,
          size: [
            39,
            41,
            43,
            44
          ]
        },
        {
          id: 1,
          title: "Leather Premium Half Shoe For Men (Brown) ",
          img: "https://cdn.shopify.com/s/files/1/0583/9971/9619/products/2_12d1ccca-dbec-4db2-861f-fd59f69c4fed.jpg?v=1650761673",
          price: 1999,
          size: [
            39,
            41,
            43,
            44
          ]
        },
        {
          id: 1,
          title: "Leather Premium Half Shoe For Men (Brown) ",
          img: "https://cdn.shopify.com/s/files/1/0583/9971/9619/products/2_12d1ccca-dbec-4db2-861f-fd59f69c4fed.jpg?v=1650761673",
          price: 1999,
          size: [
            39,
            41,
            43,
            44
          ]
        },
        {
          id: 1,
          title: "Leather Premium Half Shoe For Men (Brown) ",
          img: "https://cdn.shopify.com/s/files/1/0583/9971/9619/products/2_12d1ccca-dbec-4db2-861f-fd59f69c4fed.jpg?v=1650761673",
          price: 1999,
          size: [
            39,
            41,
            43,
            44
          ]
        },
        {
          id: 1,
          title: "Leather Premium Half Shoe For Men (Brown) ",
          img: "https://cdn.shopify.com/s/files/1/0583/9971/9619/products/2_12d1ccca-dbec-4db2-861f-fd59f69c4fed.jpg?v=1650761673",
          price: 1999,
          size: [
            39,
            41,
            43,
            44
          ]
        },
        {
          id: 1,
          title: "Leather Premium Half Shoe For Men (Brown) ",
          img: "https://cdn.shopify.com/s/files/1/0583/9971/9619/products/2_12d1ccca-dbec-4db2-861f-fd59f69c4fed.jpg?v=1650761673",
          price: 1999,
          size: [
            39,
            41,
            43,
            44
          ]
        },
        {
          id: 1,
          title: "Leather Premium Half Shoe For Men (Brown) ",
          img: "https://cdn.shopify.com/s/files/1/0583/9971/9619/products/2_12d1ccca-dbec-4db2-861f-fd59f69c4fed.jpg?v=1650761673",
          price: 1999,
          size: [
            39,
            41,
            43,
            44
          ]
        },
        {
          id: 1,
          title: "Leather Premium Half Shoe For Men (Brown) ",
          img: "https://cdn.shopify.com/s/files/1/0583/9971/9619/products/2_12d1ccca-dbec-4db2-861f-fd59f69c4fed.jpg?v=1650761673",
          price: 1999,
          size: [
            39,
            41,
            43,
            44
          ]
        }
      ]
    return (
        <div className='container m-auto my-20'>
            <div className="divider"><span className="text-2xl font-light">Recently Added Products</span></div>
            <div className="h-96 carousel  carousel-horizontal flex overflow-x-scroll  py-5 xlg:ml-28 rounded-box">
        {
            products.map(product=>{
                return <div key={product.id} className='border mx-2  p-2'>
                        <div className="carousel-item  w-52 tohover ">
                    <img className=' hover:scale-105 duration-500' src={product.img} alt="" />
                </div>
                    <div className='flex flex-col justify-around items-start'>
                        <p className='font-medium'>{product.title.slice(0,22)}..</p>
                        <p className='font-medium'>Price: {product.price}</p>
                        <div>
                        {
                            product.size.map(s=> {
                                return <span key={s.id} className='text-xs mr-1 border rounded p-1'>{s}</span >
                            })
                        }
                        </div>
                        <button className="bg-base-200   w-full  p-1 mt-1 rounded">View</button>
                    </div>
                </div>
            })
        }

                
                
            </div>
        </div>
    );
};

export default LatestAds;