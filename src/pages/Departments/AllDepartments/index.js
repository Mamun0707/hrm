import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function AllDepartments() {
    const [inputs, setInputs] = useState({id:'',dept_name:'',head_of_dept:'',phone:'',email:'',total_emp:''});
    // const [employee, setEmployee] = useState([]);

    const navigate=useNavigate();
    const {id} = useParams();
    
    function getDatas(){
        axios.get(`${process.env.REACT_APP_API_URL}/departments/${id}`).then(function(response) {
            setInputs(response.data.data);
        });
    }
    // function get_relation(){
    //     axios.get(`${process.env.REACT_APP_API_URL}/employee/index`).then(function(response) {
    //         setEmployee(response.data.data);
    //     });
        
    // }

    useEffect(() => {
        if(id){
            getDatas();
        }
        // get_relation();
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(inputs)
        
        try{
            let apiurl='';
            if(inputs.id!=''){
                apiurl=`/departments/edit/${inputs.id}`;
            }else{
                apiurl=`/departments/create`;
            }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/departments')
        } 
        catch(e){
            console.log(e);
        }
    }
  return (
    <AdminLayout>
        <div className="main-content container-fluid">
            <div className="page-title">
                <div className="row">
                    <div className="col-12 col-md-6 order-md-1 order-last">
                        <h3>Add Department</h3>
                    </div>
                    <div className="col-12 col-md-6 order-md-2 order-first">
                        <nav aria-label="breadcrumb" className='breadcrumb-header'>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Department</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Add New</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <section id="basic-vertical-layouts">
                <div className="row match-height">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-content">
                                <div className="card-body">
                                    <form className="form form-vertical" onSubmit={handleSubmit}>
                                        <div className="form-body">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label for="first-name-vertical">Dept.Name</label>
                                                                {/* <select
                                                                    className="form-control"
                                                                    id="dept_name"
                                                                    name="dept_name"
                                                                    value={inputs.dept_name}
                                                                    onChange={handleChange}>
                                                                
                                                                    <option value="">Select Department</option>
                                                                    {employee.map((d) => (
                                                                        <option key={d.id} value={d.id}>{d.department_id}</option> 
                                                                        //  d.email e muloto email er jaigai je colum niye kaz hbe oi colum er name bsbe
                                                                    ))}
                                                                </select> */}
                                                    <input type="text" id="first-name-vertical" className="form-control" defaultValue={inputs.dept_name} name="dept_name" onChange={handleChange} placeholder="Full Name"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical">Head of Dept</label>
                                                    <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.head_of_dept} name="head_of_dept" onChange={handleChange} placeholder="Type Name"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical">Phone Number</label>
                                                    <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.phone} name="phone" onChange={handleChange} placeholder="Phone"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical">Email</label>
                                                    <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.email} name="email" onChange={handleChange} placeholder="Type Email"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical">Total.Emp</label>
                                                    <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.total_emp} name="total_emp" onChange={handleChange} placeholder=""/>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-12 d-flex justify-content-end">
                                                    <button type="submit" className="btn btn-primary mr-1 mb-1">Submit</button>
                                                    <button type="reset" className="btn btn-light-secondary mr-1 mb-1">Reset</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </AdminLayout>    
  )
}

export default AllDepartments