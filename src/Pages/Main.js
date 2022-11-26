import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Navbar from './Header/Navbar';
import Home from './Home/Home';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;