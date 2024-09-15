import React,{useState,useEffect} from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import { Link,useNavigate,Navigate } from 'react-router-dom';
import { login } from '../../Api/AllApi';
function Login() {
    const navigate = useNavigate();
    const [inputs, setInputs ] = useState([]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values =>({...values, [name]: value}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        let check = await login(inputs);
        console.log(check)
        if(check){
            window.location="http://localhost:3000/"
        }else{
            alert("Sorry password or email address is wrong!");
        }
    }
  return (
    <AuthLayout>
        <div className="middle-box text-center loginscreen animated fadeInDown">
        <img alt="image" className="rounded-circle" src="/assets/img/human-resources .jpg"/>

        <div>
            <div>
                <h3>Welcome to HRM</h3>  
            </div>
           
           
            <p>Login in. To see it in action.</p>
            <form  onSubmit={handleSubmit} >
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="User-Email" required="" id="email"  name="email" onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" required="" id="password" name="password" onChange={handleChange}/>
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