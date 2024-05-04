import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';
import Dashboard from './users/Dashboard';
import MedicineDisplay from './users/MedicineDisplay';
import Cart from './users/Cart';
import Profile from './users/Profile';
import Orders from './users/Orders';
import AdminDashboard from './Admin/AdminDashboard';
import AdminOrders from './Admin/AdminOrders';
import CustomerList from './Admin/CustomerList';
import Medicine from './Admin/Medicine';
export default function RouterPage() {
    return (
      <Router>
        <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/myorders" element={<Orders/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/products" element={<MedicineDisplay/>} />
        <Route path="/admindashboard" element={<AdminDashboard/>} />
        <Route path="/adminorders" element={<AdminOrders/>} />
        <Route path="/customers" element={<CustomerList/>} />
        <Route path="/Medicine" element={<Medicine/>} />
        </Routes>
      </Router>
    );
}
