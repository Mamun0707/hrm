import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function TodayAttendance() {
    const [inputs, setInputs] = useState({id:'',name:'',employee_id:'',department:'',check_in:'',shift:'',status:''});
    const [employee, setEmployee] = useState([]);
    // for relation table
    const navigate=useNavigate();
    const {id} = useParams();
    
    function getDatas(){
        axios.get(`${process.env.REACT_APP_API_URL}/attendance/${id}`).then(function(response) {
            setInputs(response.data.data);
        });
    }
    function get_relation(){
        axios.get(`${process.env.REACT_APP_API_URL}/employee/index`).then(function(response) {
            setEmployee(response.data.data);
        });
        
    }
    // this function is relation table

    useEffect(() => {
        if(id){
            getDatas();
        }
        get_relation();
        //for relation table
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
                apiurl=`/attendance/edit/${inputs.id}`;
            }else{
                apiurl=`/attendance/create`;
            }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/attendance')
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
                                                    <label for="first-name-vertical">Employee Name</label>
                                                                 <select
                                                                    className="form-control"
                                                                    id="name"
                                                                    name="name"
                                                                    value={inputs.name}
                                                                    onChange={handleChange}>
                                                                    <option value="">Select Employee</option>
                                                                    {employee.map((d) => (
                                                                        <option key={d.id} value={d.id}>{d.name}</option>
                                                                    ))}
                                                                </select>
                                                    {/* <input type="text" id="first-name-vertical" className="form-control" defaultValue={inputs.name} name="name" onChange={handleChange} placeholder="Full Name"/> */}
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                         <label for="first-name-vertical">Employee ID</label>
                                                            <input type="text" id="first-name-vertical" className="form-control" defaultValue={inputs.employee_id} name="employee_id" onChange={handleChange} placeholder="Type Id"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical">Department</label>
                                                        <select className="form-control" defaultValue={inputs.department} name="department" onChange={handleChange}>
                                                                <option></option>
                                                                <option>Human Resources</option>
                                                                <option>Finance</option>
                                                                <option>Operations</option>
                                                                <option>IT (Information Technology)</option>
                                                                <option>Customer Service</option>
                                                                <option>Quality Assurance</option>
                                                                <option>Training and Development</option>
                                                            </select>
                                                    {/* <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.department} name="department" onChange={handleChange} placeholder="department"/> */}
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical">Check_in</label>
                                                    <input type="time" id="email-id-vertical" className="form-control" defaultValue={inputs.check_in} name="check_in" onChange={handleChange} placeholder="check_in"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical">Shift</label>
                                                            <select className="form-control" defaultValue={inputs.shift} name="shift" onChange={handleChange}>
                                                                <option></option>
                                                                <option>Morning</option>
                                                                <option>Day</option>
                                                                <option>Night</option>
                                                            </select>
                                                    {/* <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.shift} name="shift" onChange={handleChange} placeholder="shift"/> */}
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical">Status</label>
                                                            <select className="form-control" defaultValue={inputs.status} name="status" onChange={handleChange}>
                                                                <option></option>
                                                                <option>Active</option>
                                                                <option>Inactive</option>
                                                            </select>
                                                    {/* <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.status} name="status" onChange={handleChange} placeholder="status"/> */}
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

export default TodayAttendance