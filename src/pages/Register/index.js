import React from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <AuthLayout>
        <div className="middle-box text-center loginscreen   animated fadeInDown">
            <img alt="image" className="rounded-circle" src="/assets/img/profile-hrm.jpg"/>
            <div>
                <div>
                    <h3>Register Here...</h3>
                </div>
            
                <p>Create account to see it in action.</p>
                
                <form className="m-t" role="form" action="login.html">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name" required=""/>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" required=""/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" required=""/>
                    </div>
                    <div className="form-group">
                            <div className="checkbox i-checks"><label> <input type="checkbox"/><i></i> Agree the terms and policy </label></div>
                    </div>
                    <button type="submit" className="btn btn-primary block full-width m-b">Register</button>

                    
                    <a className="btn btn-sm btn-white btn-block" href="login.html">
                        <Link to="/login"><strong>Login</strong></Link>
                    </a>

                </form>
                <p className="m-t"> <strong>Human Resource Management..</strong> </p>
            </div>
        </div> 
    </AuthLayout>
  )
}

export default Register