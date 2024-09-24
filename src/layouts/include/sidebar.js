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
                    <a href=""> <i class="fa fa-users" aria-hidden="true"></i><span className="nav-label">Employees</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/AddEmployee")}`}>
                            <Link to="/AddEmployee" className="sidebar-link">
                                <i data-feather="home" width="20"></i>
                                <span>Add Employee</span>
                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/ViewEmployee")}`}>
                            <Link to="/ViewEmployee" className="sidebar-link">
                                <i data-feather="home" width="20"></i>
                                <span>View Employees</span>
                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Terminations")}`}>
                            <Link to="/Terminations" className="sidebar-link">
                                <i data-feather="home" width="20"></i>
                                <span>Terminations</span>
                            </Link>
                        </li>
                        
                    </ul>
                </li>

                <li>
                    <a href=""><i class="fa fa-user-plus" aria-hidden="true"></i> <span className="nav-label">Recruitment</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Job Postings</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Applicants</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Interviews</span>
                                            </Link>
                        </li>
                        
                    </ul>
                </li>

                <li>
                    <a href=""><i class="fa fa-check-square-o" aria-hidden="true"></i> <span className="nav-label">Attendance</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Attendance Records</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Leave Requests</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Time Tracking</span>
                                            </Link>
                        </li>
                        
                    </ul>
                </li>

                <li>
                    <a href=""><i class="fa fa-money" aria-hidden="true"></i> <span className="nav-label">Payroll</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Process Payroll</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Pay slips</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Deductions</span>
                                            </Link>
                        </li>
                        
                        
                    </ul>
                </li>


                <li>
                    <a href=""><i class="fa fa-clock-o" aria-hidden="true"></i> <span className="nav-label">Performance</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Reviews</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Goals</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Feedback</span>
                                            </Link>
                        </li>
                       
                        
                    </ul>
                </li>

    

                <li>
                    <a href=""> <i class="fa fa-building" aria-hidden="true"></i> <span className="nav-label">Training</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Programs</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Enrollment</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Feedback</span>
                                            </Link>
                        </li>
                        
                        
                    </ul>
                </li>
                <li>
                    <a href=""><i class="fa fa-file-text-o" aria-hidden="true"></i> <span className="nav-label">Compliance</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Policies</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Audits</span>
                                            </Link>
                        </li>
                        
                        
                    </ul>
                </li>

                <li>
                    <a href=""><i class="fa fa-building-o" aria-hidden="true"></i> <span className="nav-label">Reports</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Employee Reports</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Recruitment Reports</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Attendance Reports</span>
                                            </Link>
                        </li>
                        
                        
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
                                                <span>Permissions</span>
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