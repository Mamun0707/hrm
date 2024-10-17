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

function Dashboard() {
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
                    <h5 className="card-title">Employee</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-0">
              <div className="card">
                <div className="d-flex align-items-end row">
                  <div className="card-body">
                    <h1><i className="menu-icon bi bi-person-plus-fill"></i></h1>
                    <h5 className="card-title">Project</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-0">
              <div className="card">
                <div className="d-flex align-items-end row">
                  <div className="card-body">
                    <h1><i className="menu-icon bi bi-capsule"></i></h1>
                    <h5 className="card-title">Attendance</h5>
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
                    <h5 className="card-title">Leave Management</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-0">
              <div className="card">
                <div className="d-flex align-items-end row">
                  <div className="card-body">
                    <h1><i className="menu-icon bi bi-person-plus-fill"></i></h1>
                    <h5 className="card-title">Holidays</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-0">
              <div className="card">
                <div className="d-flex align-items-end row">
                  <div className="card-body">
                    <h1><i className="menu-icon bi bi-capsule"></i></h1>
                    <h5 className="card-title">Departments</h5>
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
                    <h5 className="card-title">Payroll</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-0">
              <div className="card">
                <div className="d-flex align-items-end row">
                  <div className="card-body">
                    <h1><i className="menu-icon bi bi-person-plus-fill"></i></h1>
                    <h5 className="card-title">Consultancy</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-0">
              <div className="card">
                <div className="d-flex align-items-end row">
                  <div className="card-body">
                    <h1><i className="menu-icon bi bi-capsule"></i></h1>
                    <h5 className="card-title">Setting</h5>
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

export default Dashboard;
