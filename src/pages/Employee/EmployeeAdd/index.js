import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

function EmployeeAdd() {
    const [inputs, setInputs] = useState({
        id: '',
        name: '',
        email: '',
        phone_no: '',
        date_of_birth: '',
        age: '',
        hire_date: '',
        job_location: '',
        designation_id: '',
        department_id: '',
        education: '',
        address: '',
        basic: '',
        provident_fund: '',
        medical: '',
        h_rent: ''
    });

    const [department, setDepartment] = useState([]);
    const [designation, setDesignation] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/employee/${id}`).then(function (response) {
            setInputs(response.data.data);
        });
    }

    function get_relation() {
        axios.get(`${process.env.REACT_APP_API_URL}/departments/index`).then(function (response) {
            setDepartment(response.data.data);
        });
        axios.get(`${process.env.REACT_APP_API_URL}/designation/index`).then(function (response) {
            setDesignation(response.data.data);
        });
    }

    useEffect(() => {
        if (id) {
            getDatas();
        }
        get_relation();
    }, [id]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(prevState => ({
            ...prevState,
            [name]: value
        }));

        // Calculate age if the Date of Birth is changed
        if (name === 'date_of_birth') {
            calculateAge(value);
        }
    };

    const calculateAge = (dob) => {
        if (!dob) return; // Return if no date is selected

        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();

        // Adjust age if birthday hasn't occurred yet this year
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        setInputs(prevState => ({
            ...prevState,
            age: age.toString() // Update the age state
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(inputs);

        try {
            let apiurl = '';
            if (inputs.id !== '') {
                apiurl = `/employee/edit/${inputs.id}`;
            } else {
                apiurl = `/employee/create`;
            }

            let response = await axios({
                method: 'post',
                responseType: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/employee');
        }
        catch (e) {
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
                                                            <label htmlFor="first-name-vertical">Full Name</label>
                                                            <input type="text" id="first-name-vertical" className="form-control" defaultValue={inputs.name} name="name" onChange={handleChange} placeholder="Full Name" />
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label htmlFor="email-id-vertical">Email</label>
                                                            <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.email} name="email" onChange={handleChange} placeholder="Email" />
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label htmlFor="email-id-vertical">Phone Number</label>
                                                            <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.phone_no} name="phone_no" onChange={handleChange} placeholder="Phone" />
                                                        </div>
                                                    </div>

                                                    <div className="col-6">
                                                        <div className="form-group">
                                                            <label htmlFor="email-id-vertical">Date of Birth</label>
                                                            <input type="date" id="email-id-vertical" className="form-control" value={inputs.date_of_birth} name="date_of_birth" onChange={handleChange} />
                                                        </div>
                                                    </div>

                                                    <div className="col-6">
                                                        <div className="form-group">
                                                            <label htmlFor="email-id-vertical">Age</label>
                                                            <input type="text" id="email-id-vertical" className="form-control" value={inputs.age} name="age" readOnly placeholder="Age" />
                                                        </div>
                                                    </div>

                                                    <div className="col-6">
                                                        <div className="form-group">
                                                            <label htmlFor="email-id-vertical">Hire Date</label>
                                                            <input type="date" id="email-id-vertical" className="form-control" value={inputs.hire_date} name="hire_date" onChange={handleChange} />
                                                        </div>
                                                    </div>

                                                    <div className="col-6">
                                                        <div className="form-group">
                                                            <label htmlFor="email-id-vertical">Job Location</label>
                                                            <input type="text" id="email-id-vertical" className="form-control" value={inputs.job_location} name="job_location" onChange={handleChange} placeholder="Job Location" />
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label htmlFor="email-id-vertical">Designation</label>
                                                            <select className="form-control" value={inputs.designation_id} name="designation_id" onChange={handleChange}>
                                                                <option value="">Select Designation</option>
                                                                {designation.map((d) => (
                                                                    <option key={d.id} value={d.id}>{d.desi_name}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                    <div className="form-group">
                                                        <label for="email-id-vertical">Department</label>

                                                        <select className="form-control" id="department_id" name="department_id" defaultValue={inputs.department_id} onChange={handleChange}>
                                                            <option value="">Select Department</option>
                                                            {department.map((d) => (
                                                                <option key={d.id} value={d.id}>{d.dept_name}</option> 
                                                                    //  d.email e muloto email er jaigai je colum niye kaz hbe oi colum er name bsbe
                                                            ))}
                                                        </select>
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
                                                     <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.basic} name="basic" onChange={handleChange} placeholder="000.00"/>
                                                     </div>
                                                 </div>
                                                 <div className="col-12">
                                                     <div className="form-group">
                                                     <label for="email-id-vertical">Provident Fund (%)</label>
                                                     <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.provident_fund} name="provident_fund" onChange={handleChange} placeholder="000.00"/>
                                                     </div>
                                                 </div>
                                                 <div className="col-12">
                                                     <div className="form-group">
                                                     <label for="email-id-vertical">Medical (%)</label>
                                                     <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.medical} name="medical" onChange={handleChange} placeholder="000.00"/>
                                                     </div>
                                                 </div>
                                                 <div className="col-12">
                                                     <div className="form-group">
                                                     <label for="email-id-vertical">Home Rent (%)</label>
                                                     <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.h_rent} name="h_rent" onChange={handleChange} placeholder="000.00"/>
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