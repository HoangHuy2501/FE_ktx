import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer.jsx'
import Header from '../components/header.jsx'


function LayoutCustomer() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default LayoutCustomer;