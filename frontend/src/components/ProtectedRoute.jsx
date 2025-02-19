import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute({ allowedRole }) {
  
    const token = localStorage.getItem('token');
    const role = JSON.parse(localStorage.getItem('role')); // Parse the role

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    if (!allowedRole.includes(role)) {
        return <Navigate to="/" replace />; // Redirect if role is not allowed
    }

    return <Outlet />;
}

export default ProtectedRoute;
