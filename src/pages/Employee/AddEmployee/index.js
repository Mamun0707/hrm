import React from 'react'
import AdminLayout from '../../../layouts/AdminLayout'

function AddEmployee() {
  return (
    <AdminLayout>
        <>
        <div className="error-pagewrap mt-3">
		<div className="error-page-int">
                <div className="text-center m-b-md custom-login">
                    <h3>Add Employee</h3>
                </div>
            <div className="content-error" style={{margin:"auto", width:"100% "}}>
                <div className="hpanel">
                    <div className="panel-body">
                        <form method="post" action="" enctype="multipart/form-data">
                            <div className="form-group">
                                <label for="first_name">First Name<span className="text-danger">*</span></label>
                                <input required="" type="text" name="first_name" className="form-control" id="first_name" placeholder="First Name" />
                            </div>
                            <div className="form-group">
                                <label for="last_name" >Last Name<span className="text-danger">*</span></label>
                                <input required="" type="text" name="last_name" className="form-control" id="last_name" placeholder="Last Name" />
                            </div>
                            <div className="form-group">
                            <label for="img">Photo </label>
                                <input type="file" name="photo" className="form-control" id="img" placeholder="" />
                                </div>
                            <div className="form-group">
                                <label for="password" >Password<span className="text-danger">*</span></label>
                                <input required="" type="password" name="password" className="form-control" id="password" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <label for="address" >Address<span className="text-danger">*</span></label>
                                <input required="" type="text" name="address" className="form-control" id="address" placeholder="address" />
                            </div>
                            
                            <div className="form-group">
                                <label for="email" >Email<span className="text-danger">*</span></label>
                                <input required="" type="email" name="email" className="form-control" id="email" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <label for="phone">Phone<span className="text-danger">*</span></label>
                                <input required="" type="number" name="phone" className="form-control" id="phone" placeholder="Phone" />
                            </div>
                            <div className="form-group mt-3">
                            <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                            <br/>
                            
                            
                        </form>
                    </div>
                </div>
			</div>
		</div>   
  </div>
        </>
    </AdminLayout>       
  )
}

export default AddEmployee