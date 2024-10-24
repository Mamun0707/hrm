import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function AllResignation() {
    const [inputs, setInputs] = useState({id:'',employee_id:'',title:'',address_to:'',details:'',apply_date:'',effect_date:'',approve_date:'',status:''});
    const navigate=useNavigate();
    const {id} = useParams();
    
    function getDatas(){
        axios.get(`${process.env.REACT_APP_API_URL}/resignation/${id}`).then(function(response) {
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
                apiurl=`/resignation/edit/${inputs.id}`;
            }else{
                apiurl=`/resignation/create`;
            }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/resignation')
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
                        <h3>Add New Resignation</h3>
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
                                                    <label for="first-name-vertical">Employee ID</label>
                                                    <input type="text" id="first-name-vertical" className="form-control" defaultValue={inputs.employee_id} name="employee_id" onChange={handleChange} placeholder="Type Id"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical">Title</label>
                                                    <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.title} name="title" onChange={handleChange} placeholder=""/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical">Address To</label>
                                                    <select className="form-control" defaultValue={inputs.address_to} name="address_to" onChange={handleChange}>
                                                        <option></option>
                                                        <option>HR Manager</option>
                                                        <option>Department Head</option>
                                                        <option>Senior Management</option>
                                                        <option>Company Owner</option>
                                                        <option>Legal Department</option>
                                                    </select>
                                                    {/* <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.leave_type} name="leave_type" onChange={handleChange} placeholder="Enter Reason"/> */}
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical">Details</label>
                                                    <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.details} name="details" onChange={handleChange} placeholder=""/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical">Apply Date</label>
                                                    <input type="date" id="email-id-vertical" className="form-control" defaultValue={inputs.apply_date} name="apply_date" onChange={handleChange} placeholder=""/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical">Effect Date</label>
                                                    <input type="date" id="email-id-vertical" className="form-control" defaultValue={inputs.effect_date} name="effect_date" onChange={handleChange} placeholder=""/>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical">Approve Date</label>
                                                    <input type="date" id="email-id-vertical" className="form-control" defaultValue={inputs.approve_date} name="approve_date" onChange={handleChange} placeholder=""/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical">Status</label>
                                                    <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.status} name="status" onChange={handleChange} placeholder=""/>
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

export default AllResignation