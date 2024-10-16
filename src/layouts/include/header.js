import React from 'react'
import { logout } from '../../Api/AllApi'
import {useLocation, Link, useNavigate } from 'react-router-dom'




function Header() {
    const navigate=useNavigate();
    const handelLogout = () => {
        logout();
        navigate('/login');
    }

    const activeMenu = (e) => {
        document.querySelectorAll('.submenu').forEach(
            function (e) {
                e.classList.remove('active');
            }
        )
        const childElement = e.target.parentElement.querySelector('.submenu');
        if (childElement && childElement.classList.contains('submenu')) {
            childElement.classList.add('active');
        }
    }

    const location = useLocation();
    const isLinkActive = (path) => {
        return location.pathname == path ? 'active' : "";
    }
  return (
    <div className="row border-bottom">
    <nav className="navbar navbar-static-top" role="navigation" style={{marginBottom: "0"}}>
      <div className="navbar-header">
          <a className="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i className="fa fa-bars"></i> </a>
          <form role="search" className="navbar-form-custom" action="search_results.html">
              <div className="form-group">
                  <input type="text" placeholder="Search for something..." className="form-control" name="top-search" id="top-search"/>
              </div>
          </form>
      </div>
        <ul className="nav navbar-top-links navbar-right">
            <li style={{padding: "20px"}}>
                <span className="m-r-sm text-muted welcome-message">Welcome to HRM </span>
            </li>
            <li className="dropdown">
                <a className="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                    <i className="fa fa-envelope"></i>  <span className="label label-warning"></span>
                </a>
                <ul className="dropdown-menu dropdown-messages dropdown-menu-right">
                    <li>
                        <div className="dropdown-messages-box">
                            <a className="dropdown-item float-left" href="profile.html">
                                <img alt="image" className="rounded-circle" src="img/a7.jpg"/>
                            </a>
                            <div className="media-body">
                                <small className="float-right">46h ago</small>
                                <strong></strong> started following <strong></strong>. <br/>
                                <small className="text-muted"></small>
                            </div>
                        </div>
                    </li>
                    <li className="dropdown-divider"></li>
                    <li>
                        <div className="dropdown-messages-box">
                            <a className="dropdown-item float-left" href="profile.html">
                                <img alt="image" className="rounded-circle" src="img/a4.jpg"/>
                            </a>
                            <div className="media-body ">
                                <small className="float-right text-navy"></small>
                                <strong></strong><strong></strong>. <br/>
                                <small className="text-muted"></small>
                            </div>
                        </div>
                    </li>
                    <li className="dropdown-divider"></li>
                    <li>
                        <div className="dropdown-messages-box">
                            <a className="dropdown-item float-left" href="profile.html">
                                <img alt="image" className="rounded-circle" src="img/profile.jpg"/>
                            </a>
                            <div className="media-body ">
                                <small className="float-right"></small>
                                <strong></strong> <strong></strong>. <br/>
                                <small className="text-muted"></small>
                            </div>
                        </div>
                    </li>
                    <li className="dropdown-divider"></li>
                    <li>
                        <div className="text-center link-block">
                            <a href="mailbox.html" className="dropdown-item">
                                <i className="fa fa-envelope"></i> <strong></strong>
                            </a>
                        </div>
                    </li>
                </ul>
            </li>
            <li className="dropdown">
                <a className="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                    <i className="fa fa-bell"></i>  <span className="label label-primary"></span>
                </a>
                <ul className="dropdown-menu dropdown-alerts">
                    <li>
                        <a href="mailbox.html" className="dropdown-item">
                            <div>
                                <i className="fa fa-envelope fa-fw"></i>
                                <span className="float-right text-muted small"></span>
                            </div>
                        </a>
                    </li>
                    <li className="dropdown-divider"></li>
                    <li>
                        <a href="profile.html" className="dropdown-item">
                            <div>
                                <i className="fa fa-twitter fa-fw"></i>
                                <span className="float-right text-muted small"></span>
                            </div>
                        </a>
                    </li>
                    <li className="dropdown-divider"></li>
                    <li>
                        <a href="grid_options.html" className="dropdown-item">
                            <div>
                                <i className="fa fa-upload fa-fw"></i> 
                                <span className="float-right text-muted small"></span>
                            </div>
                        </a>
                    </li>
                    <li className="dropdown-divider"></li>
                    <li>
                        <div className="text-center link-block">
                            <a href="notifications.html" className="dropdown-item">
                                <strong></strong>
                                <i className="fa fa-angle-right"></i>
                            </a>
                        </div>
                    </li>
                </ul>
            </li>

            <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/login")}`}>
                                        <Link to="/login" className="sidebar-link" onClick={handelLogout}>
                                            <i data-feather="home" width="20"></i>
                                            <span>Log out</span>
                                        </Link>
            </li>
              


          
        </ul>

    </nav>
  </div> 
  );
}

export default Header