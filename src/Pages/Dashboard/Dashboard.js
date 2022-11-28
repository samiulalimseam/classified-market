import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {

    const handleClick = event => {
        // 👇️ toggle class on click
        event.currentTarget.classList.add('tab-active');
    
        // 👇️ add class on click
        // event.currentTarget.classList.add('bg-salmon');
    
        // 👇️ remove class on click
        // event.currentTarget.classList.remove('bg-salmon');
      };
      const handleBlur = (event)=>{
        event.currentTarget.classList.remove('tab-active');
      }
    
    return (
        <div className='container m-auto h-screen'>
            <div className=" md:w-11/12 h-screen mx-auto ">
                <h2 className="text-2xl text-center m-2">Dashboard</h2>
                <div className="grid grid-cols-1 md:grid-cols-auto gap-3">
                    <div className="border w-[90vw] md:w-full h-full mx-auto    bg-slate-50 rounded-lg shadow p-2">
                    <ul>
                    <li className='flex  flex-row flex-wrap tabs'>
                        <Link onBlur={handleBlur} onFocus={handleClick} to={`/dashboard/orders`} className='tab tab-lifted   btn-sm  btn-ghost ' >Orders</Link>
                        <Link onBlur={handleBlur} onFocus={handleClick} to={`/dashboard/users`} className='tab tab-lifted   btn-sm  btn-ghost '>Users</Link>
                        <Link onBlur={handleBlur} onFocus={handleClick} to={`/dashboard/sellers`} className='tab tab-lifted   btn-sm  btn-ghost '>Sellers</Link>
                        <Link onBlur={handleBlur} onFocus={handleClick} to={`/dashboard/buyers`} className='tab tab-lifted   btn-sm  btn-ghost '>Buyers</Link>
                        <Link onBlur={handleBlur} onFocus={handleClick} to={`/dashboard/addproduct`} className='tab tab-lifted   btn-sm  btn-ghost '>Add Products</Link>
                    </li>
                    </ul>
                    </div>
                    <div className="border rounded-lg shadow w-[90vw] md:w-full h-full mx-auto my-2">
                    <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;