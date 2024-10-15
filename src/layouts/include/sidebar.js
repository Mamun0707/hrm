import React from 'react'
import { Link,useLocation } from 'react-router-dom'
function Sidebar() {

	const activeMenu=(e)=>{
        document.querySelectorAll('.submenu').forEach(
            function(e){
                e.classList.remove('active');
            }
        )
        const childElement = e.target.parentElement.querySelector('.submenu');
        if(childElement && childElement.classList.contains('submenu')){
            childElement.classList.add('active');
        }
    }

	const location = useLocation();
	const isLinkActive = (path)=>{
        return location.pathname == path ? 'active' : "";
    }
  return (
	<nav className="navbar-default navbar-static-side" role="navigation">
        <div className="">
            <ul className="nav metismenu" id="side-menu">
                <li className="nav-header">
                    <div className="dropdown profile-element">
                        <img alt="image" className="rounded-circle" src="/assets/img/human-resources .jpg"/>
                        <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                            <span className="block m-t-xs font-bold">Mamun</span>
                            <span className="text-muted text-xs block">WDP<b className=""></b></span>
                        </a>
                     
                    </div>
                    <div className="logo-element">
                        HRM
                    </div>
                </li>
                <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/")}`}>
                                        <Link to="/" className="sidebar-link">
                                            <i data-feather="home" width="20" class="fa fa-th-large"></i>
                                            <span>Dashboard</span>
                                        </Link>
                </li>



                <li>
                    <a href=""> <i class="fa fa-users" aria-hidden="true"></i>
                    <span className="nav-label">Employees</span>
                    <span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                            <Link to="/Employee" className="sidebar-link">
                                <i data-feather="home" width="20"></i>
                                <span>Employee Add </span>
                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                            <Link to="/Employee" className="sidebar-link">
                                <i data-feather="home" width="20"></i>
                                <span>All Employee</span>
                            </Link>
                        </li>
                        
                    </ul>
                </li>

        

                <li>
                    <a href=""><i class="fa fa-certificate" aria-hidden="true"></i> <span className="nav-label">Project</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Project")}`}>
                                            <Link to="/Project" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>All Project</span>
                                            </Link>
                        </li>
                        {/* <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Project")}`}>
                                            <Link to="/Project" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Add Project</span>
                                            </Link>
                        </li> */}
                        {/* <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Project")}`}>
                                            <Link to="/Project" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Edit Project</span>
                                            </Link>
                        </li> */}
                        
                    </ul>
                </li>

                <li>
                    <a href=""><i class="fa fa-book" aria-hidden="true"></i> <span className="nav-label">Attendance</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Attendance")}`}>
                                            <Link to="/Attendance" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Employee Attendance</span>
                                            </Link>
                        </li>
                        {/* <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Attendance")}`}>
                                            <Link to="/Attendance" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Time Tracking</span>
                                            </Link>
                        </li> */}
                        
                    </ul>
                </li>

                <li>
                    <a href=""><i class="fa fa-columns" aria-hidden="true"></i> <span className="nav-label">Leave Management</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/LeaveManagement")}`}>
                                            <Link to="/LeaveManagement" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>All Leave Request</span>
                                            </Link>
                        </li>
                        {/* <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/LeaveManagement")}`}>
                                            <Link to="/LeaveManagement" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Leave Balance</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/LeaveManagement")}`}>
                                            <Link to="/LeaveManagement" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Edit Leave Request</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/LeaveManagement")}`}>
                                            <Link to="/LeaveManagement" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Leave Types</span>
                                            </Link>
                        </li> */}
                        
                    </ul>
                </li>

                <li>
                    <a href=""><i class="fa fa-headphones" aria-hidden="true"></i> <span className="nav-label">Holidays</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Holidays")}`}>
                                            <Link to="/Holidays" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>All Holidays</span>
                                            </Link>
                        </li>
                        {/* <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Holidays")}`}>
                                            <Link to="/Holidays" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Add Holiday</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Holidays")}`}>
                                            <Link to="/Holidays" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Edit Holiday</span>
                                            </Link>
                        </li> */}
                        
                    </ul>
                </li>


                {/* <li>
                    <a href=""><i class="fa fa-suitcase" aria-hidden="true"></i> <span className="nav-label">Accounts</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Accounts")}`}>
                                            <Link to="/Accounts" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Income</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Accounts")}`}>
                                            <Link to="/Accounts" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Expenses</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Accounts")}`}>
                                            <Link to="/Accounts" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Invoices</span>
                                            </Link>
                        </li>
                        
                    </ul>
                </li> */}

                <li>
                    <a href=""><i class="fa fa-university" aria-hidden="true"></i> <span className="nav-label">Departments</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Departments")}`}>
                                            <Link to="/Departments" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>All Departments</span>
                                            </Link>
                        </li>
                        {/* <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Departments")}`}>
                                            <Link to="/Departments" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Add Department</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Departments")}`}>
                                            <Link to="/Departments" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Edit Departments</span>
                                            </Link>
                        </li> */}
                        
                    </ul>
                </li>

                <li>
                    <a href=""><i class="fa fa-money" aria-hidden="true"></i> <span className="nav-label">Payroll</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Payroll")}`}>
                                            <Link to="/Payroll" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Employee Salary</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Payroll")}`}>
                                            <Link to="/Payroll" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Pay slip</span>
                                            </Link>
                        </li>
                    </ul>
                </li>

    

                <li>
                    <a href=""> <i class="fa fa-building" aria-hidden="true"></i> <span className="nav-label">Consultancy</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Consultancy")}`}>
                                            <Link to="/Consultancy" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>All Consultancy</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Consultancy")}`}>
                                            <Link to="/Consultancy" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Add Consultancy</span>
                                            </Link>
                        </li>
                        {/* <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Edit Consultancy</span>
                                            </Link>
                        </li> */}
                    </ul>
                </li>

                <li>
                    <a href=""><i class="fa fa-cogs" aria-hidden="true"></i> <span className="nav-label">Settings</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/designation")}`}>
                                            <Link to="/designation" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Designation</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Report</span>
                                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>

        </div>
    </nav>
  );
}

export default Sidebar;