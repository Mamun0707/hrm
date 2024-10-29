// import React from 'react'
// import AdminLayout from '../../layouts/AdminLayout'

// function Dashboard() {
//   return (
//     <AdminLayout>
//         <>
//         <div className="container-xxl flex-grow-1 container-p-y">
//           <div className="row">

//                   <div className="col-lg-4  order-0">
//                     <div className="card">
//                       <div className="d-flex align-items-end row">
//                           <div className="card-body text-center">
//                             <h1><i className="menu-icon bi bi-person-workspace"></i></h1>
//                             <h5 className="card-title text-center">Employee</h5>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   <div className="col-lg-4  order-0">
//                     <div className="card">
//                       <div className="d-flex align-items-end row">
//                           <div className="card-body text-center">
//                             <h1><i className="menu-icon bi bi-person-plus-fill"></i></h1>
//                             <h5 className="card-title text-center">Project</h5>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   <div className="col-lg-4  order-0">
//                     <div className="card">
//                       <div className="d-flex align-items-end row">
//                           <div className="card-body text-center">
//                             <h1><i className="menu-icon bi bi-capsule"></i></h1>
//                             <h5 className="card-title text-center">Attendance</h5>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//             </div>

//             <div className="row">

//                   <div className="col-lg-4  order-0">
//                     <div className="card">
//                       <div className="d-flex align-items-end row">
//                           <div className="card-body text-center">
//                             <h1><i className="menu-icon bi bi-person-workspace"></i></h1>
//                             <h5 className="card-title text-center">Leave Management</h5>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   <div className="col-lg-4  order-0">
//                     <div className="card">
//                       <div className="d-flex align-items-end row">
//                           <div className="card-body text-center">
//                             <h1><i className="menu-icon bi bi-person-plus-fill"></i></h1>
//                             <h5 className="card-title text-center">Holidays</h5>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   <div className="col-lg-4  order-0">
//                     <div className="card">
//                       <div className="d-flex align-items-end row">
//                           <div className="card-body text-center">
//                             <h1><i className="menu-icon bi bi-capsule"></i></h1>
//                             <h5 className="card-title text-center">Departments</h5>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//             </div>

//             <div className="row">

//                   <div className="col-lg-4  order-0">
//                     <div className="card">
//                       <div className="d-flex align-items-end row">
//                           <div className="card-body text-center">
//                             <h1><i className="menu-icon bi bi-person-workspace"></i></h1>
//                            <h5 className="card-title text-center">Pay Roll</h5>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   <div className="col-lg-4  order-0">
//                     <div className="card">
//                       <div className="d-flex align-items-end row">
//                           <div className="card-body text-center">
//                             <h1><i className="menu-icon bi bi-person-plus-fill"></i></h1>
//                             <h5 className="card-title text-center">Consultancy</h5>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   <div className="col-lg-4  order-0">
//                     <div className="card">
//                       <div className="d-flex align-items-end row">
//                           <div className="card-body text-center">
//                             <h1><i className="menu-icon bi bi-capsule"></i></h1>
//                             <h5 className="card-title text-center">Setting</h5>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//             </div>
//         </div>  
//         </>
//     </AdminLayout>       
//   )
// }

// export default Dashboard



// import React from 'react';
// import AdminLayout from '../../layouts/AdminLayout';

// function Dashboard() {
//   return (
//     <AdminLayout>
//       <div className="container-xxl flex-grow-1 container-p-y">
//         <div className="row">
//           {renderCard("Suppliers", "bi-person-workspace", "supplier_add.php")}
//           {renderCard("Customer", "bi-person-plus-fill", "customer_add.php")}
//           {renderCard("Medicine", "bi-capsule", "medicine_add.php")}
//         </div>
//       </div>
//     </AdminLayout>
//   );
// }

// const renderCard = (title, icon, link) => (
//   <div className="col-lg-4 order-0">
//     <div className="card">
//       <div className="d-flex align-items-end row">
//         <div className="card-body text-center">
//           <h1><i className={`menu-icon bi ${icon}`}></i></h1>
//           <a href={link}>
//             <h5 className="card-title">{title}</h5>
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// // CSS styles
// const styles = `
// .container-xxl {
//   margin-top: 20px;
// }

// .card {
//   background-color: #fff;
//   border: 1px solid #e0e0e0;
//   border-radius: 10px;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
//   transition: transform 0.2s;
// }

// .card:hover {
//   transform: scale(1.05);
// }

// .card-title {
//   font-weight: bold;
//   color: #333;
// }

// .menu-icon {
//   font-size: 50px;
//   color: #007bff;
//   margin-bottom: 10px;
// }
// `;

// // Inject styles into the document
// const styleSheet = document.createElement("style");
// styleSheet.type = "text/css";
// styleSheet.innerText = styles;
// document.head.appendChild(styleSheet);

// export default Dashboard;




import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { Link,useLocation } from 'react-router-dom'

function Dashboard() {
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
    <AdminLayout>
      <>
        {/* Inline CSS in <style> tag */}
        <style>{`
          .container-xxl {
            padding: 2rem;
            background-color: #f4f7fc;
            min-height: 100vh;
          }
          .row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 2rem;
            flex-wrap: wrap;
          }
          .col-lg-4 {
            flex: 1;
            max-width: 30%;
            margin-bottom: 2rem;
          }
          .card {
            background-color: #fff;
            border: none;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
            padding: 2rem;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
          }
          .card-body {
            text-align: center;
          }
          .card-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: #343a40;
            margin-top: 1rem;
          }
          h1 {
            font-size: 3rem;
            color: #6c757d;
          }
          @media (max-width: 992px) {
            .col-lg-4 {
              max-width: 45%;
            }
          }
          @media (max-width: 768px) {
            .col-lg-4 {
              max-width: 100%;
            }
          }
        `}</style>

        {/* Content */}
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="row">
            <div className="col-lg-4 order-0">
              <div className="card">
                <div className="d-flex align-items-end row">
                  <div className="card-body">
                    <h1><i className="menu-icon bi bi-person-workspace"></i></h1>
                    <Link to="/Employee" className="sidebar-link">
                                            <i data-feather="home" width="20" class="fa fa-users"></i>
                                            <span>Employee</span>
                                        </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-0">
              <div className="card">
                <div className="d-flex align-items-end row">
                 <div className="card-body">
                    <h1><i className="menu-icon bi bi-person-workspace"></i></h1>
                    <Link to="/Project" className="sidebar-link">
                                            <i data-feather="home" width="20" class="fa fa-certificate"></i>
                                            <span>Project</span>
                                        </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-0">
              <div className="card">
                <div className="d-flex align-items-end row">
                  <div className="card-body">
                    <h1><i className="menu-icon bi bi-person-workspace"></i></h1>
                    <Link to="/Attendance" className="sidebar-link">
                                            <i data-feather="home" width="20" class="fa fa-book"></i>
                                            <span>Attendance</span>
                                        </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 order-0">
              <div className="card">
                <div className="d-flex align-items-end row">
                  <div className="card-body">
                    <h1><i className="menu-icon bi bi-person-workspace"></i></h1>
                    <Link to="/LeaveManagement" className="sidebar-link">
                                            <i data-feather="home" width="20" class="fa fa-columns"></i>
                                            <span>Leave Management</span>
                                        </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-0">
              <div className="card">
                <div className="card-body">
                    <h1><i className="menu-icon bi bi-person-workspace"></i></h1>
                    <Link to="/Holidays" className="sidebar-link">
                                            <i data-feather="home" width="20" class="fa fa-headphones"></i>
                                            <span>Holidays</span>
                                        </Link>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 order-0">
              <div className="card">
                <div className="d-flex align-items-end row">
                  <div className="card-body">
                    <h1><i className="menu-icon bi bi-person-workspace"></i></h1>
                    <Link to="/Departments" className="sidebar-link">
                                            <i data-feather="home" width="20" class="fa fa-university"></i>
                                            <span>Departments</span>
                                        </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 order-0">
              <div className="card">
                <div className="d-flex align-items-end row">
                 <div className="card-body">
                    <h1><i className="menu-icon bi bi-person-workspace"></i></h1>
                    <Link to="/Payroll" className="sidebar-link">
                                            <i data-feather="home" width="20" class="fa fa-money"></i>
                                            <span>Payroll</span>
                                        </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-0">
              <div className="card">
                <div className="d-flex align-items-end row">
                  <div className="card-body">
                    <h1><i className="menu-icon bi bi-person-workspace"></i></h1>
                    <Link to="/Resignation" className="sidebar-link">
                                            <i data-feather="home" width="20" class="fa fa-building"></i>
                                            <span>resignation</span>
                                        </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-0">
              <div className="card">
                <div className="d-flex align-items-end row">
                  <div className="card-body">
                    <h1><i className="menu-icon bi bi-person-workspace"></i></h1>
                    <Link to="/" className="sidebar-link">
                                            <i data-feather="home" width="20" class="fa fa-cogs"></i>
                                            <span>Setting</span>
                                        </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </AdminLayout>
  );
}

export default Dashboard
