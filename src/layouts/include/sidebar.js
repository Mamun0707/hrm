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
                    <a href="#"><i className="fa fa-bar-chart-o"></i> <span className="nav-label">Employee</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Employee Profiles</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Document Management (contracts, performance reviews)</span>
                                            </Link>
                        </li>
                        
                    </ul>
                </li>

                <li>
                    <a href="#"><i className="fa fa-bar-chart-o"></i> <span className="nav-label">Recruitment and Hiring</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Job Posting Management</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Interview Scheduling</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Candidate Assessment Tools</span>
                                            </Link>
                        </li>
                        
                    </ul>
                </li>

                <li>
                    <a href="#"><i className="fa fa-bar-chart-o"></i> <span className="nav-label">Time and Attendance</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Leave Management (sick leave, vacation)</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Overtime Management</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Shift Scheduling</span>
                                            </Link>
                        </li>
                        
                    </ul>
                </li>

                <li>
                    <a href="#"><i className="fa fa-bar-chart-o"></i> <span className="nav-label">Payroll Management</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Salary Calculations</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Tax Management</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Benefits and Deductions</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Pay slip Generation</span>
                                            </Link>
                        </li>
                        
                    </ul>
                </li>


                <li>
                    <a href="#"><i className="fa fa-bar-chart-o"></i> <span className="nav-label">Performance Management</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Goal Setting and Tracking</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Performance Reviews</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>360-Degree Feedback</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Employee Development Plans</span>
                                            </Link>
                        </li>
                        
                    </ul>
                </li>

                <li>
                    <a href="#"><i className="fa fa-bar-chart-o"></i> <span className="nav-label">Learning and Development</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Training Program Management</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Skill Assessments</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Course Enrollment</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Certification Tracking</span>
                                            </Link>
                        </li>
                        
                    </ul>
                </li>

                <li>
                    <a href="#"><i className="fa fa-bar-chart-o"></i> <span className="nav-label">Employee Engagement</span><span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level collapse">
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Surveys and Feedback Tools</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Recognition Programs</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Internal Communication Tools</span>
                                            </Link>
                        </li>
                        <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Employee")}`}>
                                            <Link to="/Employee" className="sidebar-link">
                                                <i data-feather="home" width="20"></i>
                                                <span>Wellness Programs</span>
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