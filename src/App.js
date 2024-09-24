import React, { useState, useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import AddEmployee from './pages/Employee/AddEmployee';
import ViewEmployee from './pages/Employee/ViewEmployees';
import Terminations from './pages/Employee/Terminations';
import Employee from './pages/Employee';
import Designation from './pages/Designation';
import DesignationAdd from './pages/Designation/DesignationAdd';
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
          <Route path={"/AddEmployee"} element={
          <Protected isSignedIn={isSignedIn} >
            <AddEmployee />
          </Protected>
        } />
          <Route path={"/Employee"} element={
          <Protected isSignedIn={isSignedIn} >
            <Employee />
          </Protected>
        } />
          <Route path={"/ViewEmployee"} element={
          <Protected isSignedIn={isSignedIn} >
            <ViewEmployee />
          </Protected>
        } />
          <Route path={"/Terminations"} element={
          <Protected isSignedIn={isSignedIn} >
            <Terminations />
          </Protected>
        } />
         <Route path={"/designation"} element={
            <Protected isSignedIn={isSignedIn} >
              <Designation />
            </Protected>
          } />
         <Route path={"/designation/add"} element={
            <Protected isSignedIn={isSignedIn} >
              <DesignationAdd />
            </Protected>
          } />
          <Route path={"/designation/edit/:id"} element={
            <Protected isSignedIn={isSignedIn} >
              <DesignationAdd />
            </Protected>
          } />
          {/* <Route path="/fahim" element={<Fahim />} />
          <Route path="/ramjan" element={<Ramjan />} /> */}
        </Routes>
      </BrowserRouter>
    
    
  );
}

export default App;
