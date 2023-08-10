import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {

    return (
        <div style={{width: "100%", margin: '0', padding: '0'}}>
        <Header />
        <Outlet />
        <Footer />
        </div>
    );
}