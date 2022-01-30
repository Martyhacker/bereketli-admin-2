import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard'
import Login from './login/Login';
import Products from './products/Products';
import Profile from './profile/Profile'

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Dashboard />}></Route>
                <Route path='/profile' element={<Profile />}></Route>
                <Route path='/products' element={<Products/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default MyRoutes;
