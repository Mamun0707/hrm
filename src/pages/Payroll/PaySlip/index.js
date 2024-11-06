import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function PaySlip() {
    const [employee, setEmployee] = useState([]);
    const navigate=useNavigate();
    const {id} = useParams();

    function getDatas(){
        let sm=document.getElementById('salary_month').value
        let sy=document.getElementById('salary_year').value
        axios.get(`${process.env.REACT_APP_API_URL}/payrolls/index?salary_month=${sm}&salary_year=${sy}`).then(function(response) {
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

    useEffect(() => {
        get_relation();
    }, []);

    const handleSubmit = async(e) => {
        e.preventDefault();
        const formdata=new FormData(e.target);

        try{
            let apiurl=`/payrolls/create`;
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: formdata
            });
            //navigate('/payroll')
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
                        <h3>Add Payroll</h3>
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
                                                <div className="col-4">
                                                    <div className="form-group">
                                                        <label htmlFor="salary_month">Salary Month</label>
                                                        <input type="text" id="salary_month" className="form-control" name="salary_month"/>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="form-group">
                                                        <label htmlFor="salary_year">Salary Year</label>
                                                        <input type="text" id="salary_year" className="form-control" name="salary_year"/>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="form-group mt-4">
                                                        <button type="button" onClick={getDatas} className="btn btn-primary mr-1 mb-1">Submit</button>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <table className='table'>
                                                        <tbody>
                                                            <tr>
                                                                <td>#SL</td>
                                                                <td>Employee</td>
                                                                <td>Basic</td>
                                                                <td>Home Rent</td>
                                                                <td>Medical</td>
                                                                <td>Fine</td>
                                                                <td>Conveyance</td>
                                                                <td>Provident Fund</td>
                                                                <td>Net Pay</td>
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
                                                                        <input type="text" className="form-control" defaultValue={d.basic} name={`basic[${key}]`} />
                                                                    </td>
                                                                    <td>
                                                                        <input type="text" className="form-control" defaultValue={d.h_rent ? parseFloat(d.medical) * parseFloat(d.basic) / 100 :0 } name={`h_rent[${key}]`} />
                                                                    </td>
                                                                    <td>
                                                                        <input type="text" className="form-control" defaultValue={d.medical ? parseFloat(d.medical) * parseFloat(d.basic) / 100 :0 } name={`medical[${key}]`} />
                                                                    </td>
                                                                    <td>
                                                                        <input type="text" className="form-control" defaultValue={d.fine} name={`fine[${key}]`} />
                                                                    </td>
                                                                    <td>
                                                                        <input type="text" className="form-control" defaultValue={d.conveyance} name={`conveyance[${key}]`} />
                                                                    </td>
                                                                    <td>
                                                                        <input type="text" className="form-control" defaultValue={d.provident_fund ? parseFloat(d.provident_fund) * parseFloat(d.basic) / 100 :0 } name={`provident_fund[${key}]`} />
                                                                    </td>
                                                                    <td>{d.net_pay}</td>
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

export default PaySlip