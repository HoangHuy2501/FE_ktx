import React from 'react';
import { Outlet } from 'react-router-dom';

function LayoutAuth() {
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default LayoutAuth;