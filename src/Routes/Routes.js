import React from 'react';
import { createBrowserRouter, Link } from 'react-router-dom';
import CategoryPage from '../Pages/CategoryPage/CategoryPage';
import AddProducts from '../Pages/Dashboard/AddProducts/AddProducts';
import Dashboard from '../Pages/Dashboard/Dashboard';
import MainDashboard from '../Pages/Dashboard/MainDashboard/MainDashboard';
import OrderTable from '../Pages/Dashboard/MainDashboard/OrderTable/OrderTable';
import ProductTable from '../Pages/Dashboard/MainDashboard/ProductTable/ProductTable';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Main from '../Pages/Main';
import SearchPage from '../Pages/SearchPage/SearchPage';
import SignUp from '../Pages/SignUp/SignUp';
import AdminRoutes from './AdminRoutes';
import PrivateRoutes from './PrivateRoutes';

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
                path: '/search/:id',
                element: <SearchPage></SearchPage>,
                loader: ({params})=> params.id
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/category/:id',
                element: <CategoryPage></CategoryPage>,
                loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/dashboard',
                element: <PrivateRoutes>  <Dashboard></Dashboard></PrivateRoutes>,
                // children: [
                //     {
                //         path:'/dashboard/',
                //         element: <MainDashboard></MainDashboard>,
                //         children:[
                //             {
                //                 path:'*',
                //                 element: <div><p className="text-2xl">Cooming Soon</p></div>
                //             },
                //             {
                //                 path:'/dashboard/orders',
                //                 element: <OrderTable></OrderTable>                        },
                //             {
                //                 path:'/dashboard/products',
                //                 element: <ProductTable></ProductTable>,
                //                 loader: ()=> fetch('http://localhost:5000/products')
                //             },
                //             {
                //                 path:'/dashboard/profile',
                //                 element: <div><p>No Details till now</p></div>
                //             },
                //         ]
                //     },
                //     {
                //         path:'/dashboard/orders',
                //         element: <MainDashboard></MainDashboard>
                //     },
                //     {
                //         path:'/dashboard/addproduct',
                //         element: <AddProducts></AddProducts>
                //     },
                // ]
            },
            {
                path: '/signUp',
                element:<SignUp></SignUp>
            },
            {
                path: '*',
                element: <div className='h-[80vh] flex flex-col items-center justify-center'><p className="text-4xl font-light">404 Not Found</p> <Link className='btn btn-ghost text-accent'>Go Back</Link></div>
            }
        ]
    }
 ]);
 
