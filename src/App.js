      import React, { useState, useEffect } from 'react';
      import Dashboard from './pages/Dashboard';

      import Login from './pages/Login';
      import Register from './pages/Register';

      import Employee from './pages/Employee';
      import EmployeeAdd from './pages/Employee/EmployeeAdd';

      import Project from './pages/Project';
      import AddProject from './pages/Project/AddProject';

      import Attendance from './pages/Attendance';
      import EmployeeAttendance from './pages/Attendance/EmployeeAttendance';

      import LeaveManagement from './pages/LeaveManagement';
      import AllLeaveRequest from './pages/LeaveManagement/AllLeaveRequest';

      import Holidays from './pages/Holidays';
      import AllHolidays from './pages/Holidays/AllHolidays';

      import Departments from './pages/Departments';
      import AllDepartments from './pages/Departments/AllDepartments';

      import Payroll from './pages/Payroll';
      import PaySlip from './pages/Payroll/PaySlip';

      import Resignation from './pages/Resignation';
      import AllResignation from './pages/Resignation/All Resignation';

      import Designation from './pages/Designation';
      import DesignationAdd from './pages/Designation/DesignationAdd';

      import Career from './pages/Career';
      
      
      import Protected from './components/protected';
      
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
                <Route path={"/Project/add"} element={
                <Protected isSignedIn={isSignedIn} >
                  <AddProject />
                </Protected>
              } />
                <Route path={"/Project"} element={
                <Protected isSignedIn={isSignedIn} >
                  <Project />
                </Protected>
              } />
                <Route path={"/Project/edit/:id"} element={
                <Protected isSignedIn={isSignedIn} >
                  <AddProject />
                </Protected>
              } />
                <Route path={"/attendance/add"} element={
                <Protected isSignedIn={isSignedIn} >
                  <EmployeeAttendance />
                </Protected>
              } />
                <Route path={"/Attendance"} element={
                <Protected isSignedIn={isSignedIn} >
                  <Attendance />
                </Protected>
              } />
                <Route path={"/attendance/edit/:id"} element={
                <Protected isSignedIn={isSignedIn} >
                  <EmployeeAttendance />
                </Protected>
              } />
               <Route path={"/leaveManagement/add"} element={
                <Protected isSignedIn={isSignedIn} >
                  <AllLeaveRequest />
                </Protected>
              } />
                <Route path={"/leaveManagement/edit/:id"} element={
                <Protected isSignedIn={isSignedIn} >
                  <AllLeaveRequest />
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
                  <Route path={"/Holidays/add"} element={
                <Protected isSignedIn={isSignedIn} >
                  <AllHolidays />
                </Protected>
              } />
               <Route path={"/Holidays/edit/:id"} element={
                <Protected isSignedIn={isSignedIn} >
                  <AllHolidays />
                </Protected>
              } />
                <Route path={"/Departments"} element={
                  <Protected isSignedIn={isSignedIn} >
                    <Departments />
                  </Protected>
                } />
                  <Route path={"/Departments/add"} element={
                <Protected isSignedIn={isSignedIn} >
                  <AllDepartments />
                </Protected>
              } />
               <Route path={"/departments/edit/:id"} element={
                <Protected isSignedIn={isSignedIn} >
                  <AllDepartments />
                </Protected>
              } />
            
              <Route path={"/payroll"} element={
                  <Protected isSignedIn={isSignedIn} >
                    <Payroll />
                  </Protected>
                } />
              <Route path={"/payroll/add"} element={
                  <Protected isSignedIn={isSignedIn} >
                    <PaySlip />
                  </Protected>
                } />
              <Route path={"/payroll/edit/:id"} element={
                  <Protected isSignedIn={isSignedIn} >
                    <PaySlip />
                  </Protected>
                } />
              <Route path={"/Resignation"} element={
                  <Protected isSignedIn={isSignedIn} >
                    <Resignation />
                  </Protected>
                } />
              <Route path={"/resignation/add"} element={
                  <Protected isSignedIn={isSignedIn} >
                    <AllResignation />
                  </Protected>
                } />
              <Route path={"/resignation/edit/:id"} element={
                  <Protected isSignedIn={isSignedIn} >
                    <AllResignation />
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
                <Route path={"/career"} element={
                  <Protected isSignedIn={isSignedIn} >
                    <Career/>
                  </Protected>
                } />
                {/* <Route path="/fahim" element={<Fahim />} />
                <Route path="/ramjan" element={<Ramjan />} /> */}
              </Routes>
            </BrowserRouter>
          
          
        );
      }

      export default App;
