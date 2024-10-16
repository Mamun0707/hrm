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
//                             <a href="supplier_add.php"><h5 className="card-title text-center">Suppliers</h5></a> 
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   <div className="col-lg-4  order-0">
//                     <div className="card">
//                       <div className="d-flex align-items-end row">
//                           <div className="card-body text-center">
//                             <h1><i className="menu-icon bi bi-person-plus-fill"></i></h1>
//                             <a href="customer_add.php"><h5 className="card-title text-center">Customer</h5></a> 
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   <div className="col-lg-4  order-0">
//                     <div className="card">
//                       <div className="d-flex align-items-end row">
//                           <div className="card-body text-center">
//                             <h1><i className="menu-icon bi bi-capsule"></i></h1>
//                             <a href="medicine_add.php"><h5 className="card-title text-center">Medicine</h5></a> 
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
//                             <a href="supplier_add.php"><h5 className="card-title text-center">Suppliers</h5></a> 
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   <div className="col-lg-4  order-0">
//                     <div className="card">
//                       <div className="d-flex align-items-end row">
//                           <div className="card-body text-center">
//                             <h1><i className="menu-icon bi bi-person-plus-fill"></i></h1>
//                             <a href="customer_add.php"><h5 className="card-title text-center">Customer</h5></a> 
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   <div className="col-lg-4  order-0">
//                     <div className="card">
//                       <div className="d-flex align-items-end row">
//                           <div className="card-body text-center">
//                             <h1><i className="menu-icon bi bi-capsule"></i></h1>
//                             <a href="medicine_add.php"><h5 className="card-title text-center">Medicine</h5></a> 
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
//                             <a href="supplier_add.php"><h5 className="card-title text-center">Suppliers</h5></a> 
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   <div className="col-lg-4  order-0">
//                     <div className="card">
//                       <div className="d-flex align-items-end row">
//                           <div className="card-body text-center">
//                             <h1><i className="menu-icon bi bi-person-plus-fill"></i></h1>
//                             <a href="customer_add.php"><h5 className="card-title text-center">Customer</h5></a> 
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   <div className="col-lg-4  order-0">
//                     <div className="card">
//                       <div className="d-flex align-items-end row">
//                           <div className="card-body text-center">
//                             <h1><i className="menu-icon bi bi-capsule"></i></h1>
//                             <a href="medicine_add.php"><h5 className="card-title text-center">Medicine</h5></a> 
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



import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Dashboard() {
  return (
    <AdminLayout>
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row">
          {renderCard("Suppliers", "bi-person-workspace", "supplier_add.php")}
          {renderCard("Customer", "bi-person-plus-fill", "customer_add.php")}
          {renderCard("Medicine", "bi-capsule", "medicine_add.php")}
        </div>
      </div>
    </AdminLayout>
  );
}

const renderCard = (title, icon, link) => (
  <div className="col-lg-4 order-0">
    <div className="card">
      <div className="d-flex align-items-end row">
        <div className="card-body text-center">
          <h1><i className={`menu-icon bi ${icon}`}></i></h1>
          <a href={link}>
            <h5 className="card-title">{title}</h5>
          </a>
        </div>
      </div>
    </div>
  </div>
);

// CSS styles
const styles = `
.container-xxl {
  margin-top: 20px;
}

.card {
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.05);
}

.card-title {
  font-weight: bold;
  color: #333;
}

.menu-icon {
  font-size: 50px;
  color: #007bff;
  margin-bottom: 10px;
}
`;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Dashboard;
