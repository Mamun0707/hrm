import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Employee() {
  return (
    <AdminLayout>
        <div className="wrapper wrapper-content animated fadeInRight">
            <div className="row">
                <div className="col-lg-12">
                <div className="ibox ">
                    <div className="ibox-title">
                        <h5>Basic Table</h5>
                    </div>
                    <div className="ibox-content">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            </div>
            </div>
    </AdminLayout>       
  )
}

export default Employee