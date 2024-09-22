import React from 'react'
import AdminLayout from '../../../layouts/AdminLayout'

function ViewEmployee() {
  return (
    <AdminLayout>
        <>
        <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="py-3 mb-4"><span className="text-muted fw-light">View Employee /</span></h4>

        <div className="card">
            <h5 className="card">Employee List</h5>
            <div className="table-responsive text-nowrap">
                <table className="table">
                <thead>
                    <tr>
                   
                    <th>SL</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Address</th>
                 
                    </tr>
                </thead>
                <tbody className="table-border-bottom-0">
                  
                    <tr>
                    
                        <td>1</td>
                        <td>Julfikar</td>
                        <td>01675437902</td>
                        <td>Hathazari</td>
                       
                       
                    </tr>

                    <tr>
                    
                        <td>2</td>
                        <td>Mamun</td>
                        <td>01303719888</td>
                        <td>Agrabad</td>
                       
                        
                    </tr>
                    <tr>
                    
                        <td>3</td>
                        <td>Nur</td>
                        <td>01703719801</td>
                        <td>Chittagong</td>
                       
                        
                    </tr>
                    <tr>
                    
                        <td>4</td>
                        <td>Mukut</td>
                        <td>01754910424</td>
                        <td>City-Gate</td>
                       
                        
                    </tr>

                </tbody>
                </table>
            </div>
        </div>
     

    </div>
        </>
    </AdminLayout>       
  )
}

export default ViewEmployee