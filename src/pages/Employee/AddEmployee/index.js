import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Employee() {
  return (
    <AdminLayout>
        <>
        <div className="error-pagewrap mt-3">
		<div className="error-page-int">
			<div className="text-center m-b-md custom-login">
          <h3>PLEASE REGISTER TO APP</h3>
        </div>
        <div className="content-error" style={{margin:"auto", width:"100% "}}>
          <div className="hpanel">
            <div className="panel-body">
              <form method="post" action="" enctype="multipart/form-data">
              <div className="form-group">
									<label for="ship_country" className="text-black">Country <span className="text-danger">*</span></label>
									<select id="ship_country" name="country" className="form-control">
										<option value="0">Select a country</option>    
										<option value="2">Bangladesh</option>    
										<option value="3">Algeria</option>    
										<option value="4">Afghanistan</option>    
										<option value="5">Ghana</option>    
										<option value="6">Albania</option>    
										<option value="7">Bahrain</option>    
										<option value="8">Colombia</option>    
										<option value="9">Dominican Republic</option>    
									</select>
								</div>
                <div className="form-group">
                    <label for="first_name" className="col-md-4" >First Name<span className="text-danger">*</span></label>
                    <input required="" type="text" name="first_name" className="form-control" id="first_name" placeholder="First Name" />
                </div>
                <div className="form-group">
                    <label for="last_name" >Last Name<span className="text-danger">*</span></label>
                    <input required="" type="text" name="last_name" className="form-control" id="last_name" placeholder="Last Name" />
                </div>
                <label for="img">Photo </label>
                    <input type="file" name="photo" className="form-control" id="img" placeholder="" />
                <div className="form-group">
                    <label for="password" >Password<span className="text-danger">*</span></label>
                    <input required="" type="password" name="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label for="company_name">Company Name</label>
                    <input type="text" name="Company Name" className="form-control" id="company_name" placeholder="Company Name" />
                </div>
                <div className="form-group">
                    <label for="address" >Address<span className="text-danger">*</span></label>
                    <input required="" type="text" name="address" className="form-control" id="address" placeholder="address" />
                </div>
                <div className="form-group">
                    <label for="state" >State<span className="text-danger">*</span></label>
                    <input required="" type="text" name="state" className="form-control" id="state" placeholder="state" />
                </div>
                <div className="form-group">
                    <label for="post" >Post<span className="text-danger">*</span></label>
                    <input required="" type="text" name="post" className="form-control" id="post" placeholder="Post" />
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

export default Employee