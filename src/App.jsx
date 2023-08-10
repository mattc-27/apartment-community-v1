import React from "react";
import './style.css'

import {
    createBrowserRouter,
    RouterProvider,
    Routes,
    Route,
    BrowserRouter
} from 'react-router-dom';

import Layout from "./components/Layout";
import Home from "./pages/Home";
import HomeGrid from "./pages/HomeGrid";
//import Floorplans from "./pages/Floorplans";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/gridlayout',
        element: <HomeGrid />
    }
])

export default function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/gridlayout' element={<HomeGrid />} />
                 
                   
                </Route>

            </Routes>
        </BrowserRouter>

    );
}