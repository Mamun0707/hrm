import React from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <AuthLayout>
           
        <div className="middle-box text-center loginscreen animated fadeInDown">
        <img alt="image" className="rounded-circle" src="/assets/img/profile-hrm.jpg"/>

        <div>
            <div>
                <h3>Welcome to HRM</h3>  
            </div>
           
           
            <p>Login in. To see it in action.</p>
            <form className="m-t" role="form" action="index.html">
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Username" required=""/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" required=""/>
                </div>
                <button type="submit" className="btn btn-primary block full-width m-b">Login</button>
                
                <a className="btn btn-sm btn-white btn-block" href="register.html">
                    <Link to="/register">Don't have an account?</Link>
                </a>
                
            </form>
            <p className="m-t"> <strong>Human Resource Management..</strong> </p>
        </div>
    </div>

    </AuthLayout>
  )
}

export default Login