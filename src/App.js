import React, { useState, useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Employee from './pages/Employee';
import EmployeeAdd from './pages/Employee/EmployeeAdd';
import Project from './pages/Project';
import Attendance from './pages/Attendance';
import Clients from './pages/Clients';
import LeaveManagement from './pages/LeaveManagement';
import Holidays from './pages/Holidays';
import Accounts from './pages/Accounts';
import Departments from './pages/Departments';
import Payroll from './pages/Payroll';
import Job from './pages/Job';
import Consultancy from './pages/Consultancy';
import Forms from './pages/Forms';
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
          <Route path={"/employee/add"} element={
          <Protected isSignedIn={isSignedIn} >
            <EmployeeAdd />
          </Protected>
        } />
          <Route path={"/Employee"} element={
          <Protected isSignedIn={isSignedIn} >
            <Employee />
          </Protected>
        } />
        <Route path={"/employee/edit/:id"} element={
          <Protected isSignedIn={isSignedIn} >
            <EmployeeAdd />
          </Protected>
        } />
          <Route path={"/Project"} element={
          <Protected isSignedIn={isSignedIn} >
            <Project />
          </Protected>
        } />
          <Route path={"/Attendance"} element={
          <Protected isSignedIn={isSignedIn} >
            <Attendance />
          </Protected>
        } />
          <Route path={"/Clients"} element={
          <Protected isSignedIn={isSignedIn} >
            <Clients />
          </Protected>
        } />
          <Route path={"/LeaveManagement"} element={
          <Protected isSignedIn={isSignedIn} >
            <LeaveManagement />
          </Protected>
        } />
         <Route path={"/Holidays"} element={
            <Protected isSignedIn={isSignedIn} >
              <Holidays />
            </Protected>
          } />
         <Route path={"/Accounts"} element={
            <Protected isSignedIn={isSignedIn} >
              <Accounts />
            </Protected>
          } />
         <Route path={"/Departments"} element={
            <Protected isSignedIn={isSignedIn} >
              <Departments />
            </Protected>
          } />
         <Route path={"/Payroll"} element={
            <Protected isSignedIn={isSignedIn} >
              <Payroll />
            </Protected>
          } />
         <Route path={"/Job"} element={
            <Protected isSignedIn={isSignedIn} >
              <Job />
            </Protected>
          } />
         <Route path={"/Consultancy"} element={
            <Protected isSignedIn={isSignedIn} >
              <Consultancy />
            </Protected>
          } />
         <Route path={"/Forms"} element={
            <Protected isSignedIn={isSignedIn} >
              <Forms />
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
