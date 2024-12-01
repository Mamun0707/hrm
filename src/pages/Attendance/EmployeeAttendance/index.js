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
    
    function getDatas(date){
        axios.get(`${process.env.REACT_APP_API_URL}/attendance/index?attendance_date=${date.target.value}`).then(function(response) {
            if(response.data.data.length)
                setEmployee(response.data.data);
            else
                get_relation()
        });
    }
    function get_relation(){
        axios.get(`${process.env.REACT_APP_API_URL}/employee/index`).then(function(response) {
            setEmployee(response.data.data);
        });
        
    }
    // this function is relation table

    useEffect(() => {
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
        const formdata=new FormData(e.target);
        // const datas={};
        // for(let [name,value] of formdata.entries()){
        //     datas[name]=value
        // }
        try{
            let apiurl=`/attendance/create`;
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: formdata
            });
            //navigate('/attendance')
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
                                                        <label htmlFor="attendance_date">Date</label>
                                                        <input type="date" id="attendance_date" className="form-control" defaultValue={inputs.attendance_date} name="attendance_date" onChange={getDatas}/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <table className='table'>
                                                        <tbody>
                                                            <tr>
                                                                <td>#SL</td>
                                                                <td>Employee</td>
                                                                <td>Check In</td>
                                                                <td>Check Out</td>
                                                                <td>Status</td>
                                                            </tr>
                                                            {employee && employee.map((d, key) =>
                                                                <tr key={key}>
                                                                    <td>{1+key}</td>
                                                                    <td>
                                                                        {d.employee
                                                                            ? 
                                                                                <>
                                                                                    {d.employee?.name}
                                                                                    <input type="hidden" defaultValue={d.employee_id} name={`employee_id[${key}]`} />
                                                                                </>
                                                                            : 
                                                                                <>
                                                                                    {d.name}
                                                                                    <input type="hidden" defaultValue={d.id} name={`employee_id[${key}]`} />
                                                                                </>
                                                                        }
                                                                        
                                                                    </td>
                                                                    <td>
                                                                        <input type="time" className="form-control" defaultValue={d.check_in} name={`check_in[${key}]`} placeholder="check_in"/>
                                                                    </td>
                                                                    <td>
                                                                        <input type="time" className="form-control" defaultValue={d.check_out} name={`check_out[${key}]`} placeholder="check_in"/>
                                                                    </td>
                                                                    <td>
                                                                        <div className="form-group">
                                                                            <select className="form-control" value={d.status} name={`status[${key}]`}>
                                                                                <option value="0">Absent</option>
                                                                                <option value="1">Present</option>
                                                                                <option value="2">Late</option>
                                                                            </select>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            )}
                                                        </tbody>
                                                    </table>
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