import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function AllHolidays() {
    const [inputs, setInputs] = useState({id:'',employee_id:'',title:'',type:'',start_date:'',end_date:'',details:''});
    const navigate=useNavigate();
    const {id} = useParams();
    const [employee, setEmployee] = useState([]);
    
    function getDatas(){
        axios.get(`${process.env.REACT_APP_API_URL}/holidays/${id}`).then(function(response) {
            setInputs(response.data.data);
        });
    }

    function get_relation(){
        axios.get(`${process.env.REACT_APP_API_URL}/employee/index`).then(function(response) {
            setEmployee(response.data.data);
        });
        
    }

    useEffect(() => {
        if(id){
            getDatas();
        }
        get_relation();
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
                apiurl=`/holidays/edit/${inputs.id}`;
            }else{
                apiurl=`/holidays/create`;
            }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/holidays')
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
                        <h3>Add New Holidays</h3>
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
                                                    {/* <input type="text" id="first-name-vertical" className="form-control" defaultValue={inputs.employee_id} name="employee_id" onChange={handleChange} placeholder=""/> */}
                                                                <select
                                                                    className="form-control"
                                                                    id="employee_id"
                                                                    name="employee_id"
                                                                    value={inputs.employee_id}
                                                                    onChange={handleChange}>

                                                                    <option value="">Select Employee</option>
                                                                    {employee.map((d) => (
                                                                        <option key={d.id} value={d.id}>{d.name}</option>
                                                                    ))}
                                                                </select>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="first-name-vertical">Title</label>
                                                    <input type="text" id="first-name-vertical" className="form-control" defaultValue={inputs.title} name="title" onChange={handleChange} placeholder="Full Title"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical">Type</label>
                                                    <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.type} name="type" onChange={handleChange} placeholder="Holidays Type"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical">Start date</label>
                                                    <input type="date" id="email-id-vertical" className="form-control" defaultValue={inputs.start_date} name="start_date" onChange={handleChange} placeholder=""/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical">End date</label>
                                                    <input type="date" id="email-id-vertical" className="form-control" defaultValue={inputs.end_date} name="end_date" onChange={handleChange} placeholder=""/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical">Details</label>
                                                    <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.details} name="details" onChange={handleChange} placeholder="Type Details"/>
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

export default AllHolidays