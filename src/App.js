import React, { useState, useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Protected from './components/protected';
// import Fahim from './pages/Fahim';
// import Ramjan from './pages/Ramjan';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const isSignedIn = localStorage.getItem("access_token") || false;
  return (
    <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Dashboard />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path={"/"} element={
          <Protected isSignedIn={isSignedIn} >
            <Dashboard />
          </Protected>
        } />
          {/* <Route path="/fahim" element={<Fahim />} />
          <Route path="/ramjan" element={<Ramjan />} /> */}
        </Routes>
      </BrowserRouter>
    
    
  );
}

export default App;
