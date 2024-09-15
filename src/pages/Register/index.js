import React, { useState } from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import { Link,useNavigate } from 'react-router-dom';
import { register } from '../../Api/AllApi';

function Register() {
    const [inputs, setInputs] = useState([]);
    const navigate=useNavigate();

    // let signup = async(inputs) => {
    //     await register(inputs);
    //     navigate('/signin');
    // }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        await register(inputs);
        navigate('/login')
    }
  return (
    <AuthLayout>
       <div className="middle-box text-center loginscreen   animated fadeInDown">
            <img alt="image" className="rounded-circle" src="/assets/img/human-resources .jpg"/>
            <div>
                <div>
                    <h3>Register Here...</h3>
                </div>
            
                <p>Create account to see it in action.</p>
                
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name" required="" name="name_en" onChange={handleChange}/>
                    </div>

                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" required="" name="email" onChange={handleChange}/>
                    </div>

                  
                    <div className="form-group">
                        <input type="text" id="contact_no_en" className="form-control" placeholder="Contact" required="" name="contact_no_en" onChange={handleChange}/>
                    </div>

                    <div className="form-group">
                    <input type="text" id="password" className="form-control" placeholder="Password" name="password" onChange={handleChange}/>
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