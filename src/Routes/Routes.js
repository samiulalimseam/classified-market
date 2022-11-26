import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Main from '../Pages/Main';
import SignUp from '../Pages/SignUp/SignUp';

 export const router  = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element:<SignUp></SignUp>
            },
            {
                path: '*',
                element: <div className='h-[80vh] flex items-center justify-center'><p className="text-4xl font-light">404 Not Found</p></div>
            }
        ]
    }
 ]);
 
