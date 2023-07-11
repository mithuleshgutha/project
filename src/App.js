import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Admin from './pages/Admin'
import Customer from './pages/Customer'
import Dashboard from './pages/Dashboard'
import Employee from './pages/Employee'
import Invoice from './pages/Invoice'
import Payment from './pages/Payment'
import Quote from './pages/Quote';


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Customer" element={<Customer />} />
          <Route path="/Employee" element={<Employee />} />
          <Route path="/Invoice" element={<Invoice />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Quote" element={<Quote />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
