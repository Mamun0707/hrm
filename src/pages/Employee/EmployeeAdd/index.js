import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function EmployeeAdd() {
    const [inputs, setInputs] = useState({id:'',name:'',email:'',phone_no:'',date_of_birth:'',age:'',hire_date:'',job_location:'',designation_id:'',department_id:'',education:'',address:'',salary:''});
    const navigate=useNavigate();
    const {id} = useParams();
    
    function getDatas(){
        axios.get(`${process.env.REACT_APP_API_URL}/employee/${id}`).then(function(response) {
            setInputs(response.data.data);
        });
    }

    useEffect(() => {
        if(id){
            getDatas();
        }
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
                apiurl=`/employee/edit/${inputs.id}`;
            }else{
                apiurl=`/employee/create`;
            }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/employee')
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
                        <h3>Add New Employee</h3>
                    </div>
                    <div className="col-12 col-md-6 order-md-2 order-first">
                        <nav aria-label="breadcrumb" className='breadcrumb-header'>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
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
                                                    <label for="first-name-vertical">Full Name</label>
                                                    <input type="text" id="first-name-vertical" className="form-control" defaultValue={inputs.name} name="name" onChange={handleChange} placeholder="Full Name"/>
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical">Email</label>
                                                    <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.designation_id} name="email" onChange={handleChange} placeholder="Email"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical">Phone Number</label>
                                                    <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.phone_no} name="phone_no" onChange={handleChange} placeholder="Phone"/>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical">Date of Birth</label>
                                                    <input type="date" id="email-id-vertical" className="form-control" defaultValue={inputs.date_of_birth} name="date_of_birth" onChange={handleChange} placeholder=""/>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical">Age</label>
                                                    <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.age} name="age" onChange={handleChange} placeholder=""/>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical">Hire Date</label>
                                                    <input type="date" id="email-id-vertical" className="form-control" defaultValue={inputs.hire_date} name="hire_date" onChange={handleChange} placeholder=""/>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical">Job Location</label>
                                                    <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.job_location} name="job_location" onChange={handleChange} placeholder=""/>
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label for="email-id-vertical">Designation</label>
                                                            <select className="form-control" defaultValue={inputs.designation_id} name="designation_id" onChange={handleChange}>
                                                                <option></option>
                                                                <option>Intern</option>
                                                                <option>Junior Associate</option>
                                                                <option>Associate</option>
                                                                <option>Senior Associate</option>
                                                                <option>Manager</option>
                                                                <option>Senior Manager</option>
                                                            </select>
                                                    {/* <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.leave_type} name="leave_type" onChange={handleChange} placeholder="Enter Reason"/> */}
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label for="email-id-vertical">Department</label>
                                                            <select className="form-control" defaultValue={inputs.department_id} name="department_id" onChange={handleChange}>
                                                                <option></option>
                                                                <option>Human Resources</option>
                                                                <option>Finance</option>
                                                                <option>Operations</option>
                                                                <option>IT (Information Technology)</option>
                                                                <option>Customer Service</option>
                                                                <option>Quality Assurance</option>
                                                                <option>Training and Development</option>
                                                            </select>
                                                    {/* <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.leave_type} name="leave_type" onChange={handleChange} placeholder="Enter Reason"/> */}
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label for="email-id-vertical">Education</label>
                                                            <select className="form-control" defaultValue={inputs.education} name="education" onChange={handleChange}>
                                                                <option></option>
                                                                <option>SSC</option>
                                                                <option>HSC</option>
                                                                <option>Degree</option>
                                                                <option>Honour's</option>
                                                                <option>Master's</option>
                                                            </select>
                                                    {/* <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.leave_type} name="leave_type" onChange={handleChange} placeholder="Enter Reason"/> */}
                                                    </div>
                                                </div>
                                                
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical">Adderss</label>
                                                    <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.address} name="address" onChange={handleChange} placeholder=""/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical">Salary</label>
                                                    <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.salary} name="salary" onChange={handleChange} placeholder="000.00"/>
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

export default EmployeeAdd