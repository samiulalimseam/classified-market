import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg'

const Navbar = () => {
    const menuitems = <>
        <li> <Link to={`/`} >Home</Link> </li>
        <li> <Link to={`/login`} >Login</Link> </li>
        <li> <Link to={`/dashboard`} >Dashboard</Link> </li>
    
    </>
    return (
        <div>
            <div className=" bg-accent">

            <div className="navbar container m-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                menuitems
                            }
                        </ul>
                    </div>
                    <img className='w-40' src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-white">
                        {
                            menuitems
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={`/`} className="btn btn-primary">Post Your Ad</Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Navbar;