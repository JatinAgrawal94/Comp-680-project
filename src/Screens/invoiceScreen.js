import { useEffect, useState } from "react";
import InvoiceComponent from "../Components/invoiceComponent";
import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { medicineRead } from "../actions/medicineActions";
import { invoiceAction } from "../actions/invoiceActions";
import Axios from 'axios';


export default function InvoiceScreen(){
    const [order,updateOrder]=useState([]);
    const [total,updateTotal]=useState(0);
    const dispatch=useDispatch();
    const {loading,medicines}=useSelector(state=>state.medicineRead);
    useEffect(()=>{
        dispatch(medicineRead());
    },[dispatch])   
    
    const createInvoice=async(e)=>{
        // order + customer information
        e.preventDefault();
        var fullname=document.getElementById('fullname').value;
        var contact=document.getElementById('contact').value
        var insurance=document.getElementById('insurance').value;
        var sale={
            customer_name:fullname,
            customer_contact:contact,
            customer_insurance:insurance,
            items:order
        }
        dispatch(invoiceAction(JSON.stringify(sale)));
       await Axios.put(`http://localhost:5000/api/medicine/reduce`,sale);
    }

    const addtoOrder=(e)=>{
        var medicine_name
        var medicine_count;    
        try{
             medicine_name=document.getElementById('medicine-name').value.toString()
             medicine_count=document.getElementById('medicine-count').value.toString()
            var item=medicines.filter((e)=>e.medicine_name===medicine_name)
            var i={
                id:item[0].id,
                medicine_name:item[0].medicine_name,
                manufacture_date:item[0].manufacture_date,
                expiry_date:item[0].expiry_date,
                company:item[0].company,
                lot_number:item[0].lot_number,
                dosage:item[0].dosage,
                price:item[0].price,
                count:medicine_count,
                total_price:parseFloat(item[0].price)*parseFloat(medicine_count)
            }
            updateTotal(total+i.total_price);
            updateOrder([...order,i]);
             document.getElementById('medicine-name').value="";
             document.getElementById('medicine-count').value="";
        }catch(err){
            console.log("This is error");
            console.log(err);   
        }
    }

    return (
       loading===false && medicines!==undefined? <div className="container h-100">
            <div className="row">
                <div className="col h-100 border-end">
                    <label className="form-label">Full Name</label>
                    <input className="form-control" type="text" id="fullname"/>
                    <label className="form-label">Contact</label>
                    <input className="form-control" type="text" id="contact"/>
                    <label className="form-label">Insurance information</label>
                    <input className="form-control" type="text" id="insurance"/>
                </div>
                <div className="col-10">
                    <form>
                    <div className="d-flex justify-content-around">
                        <input placeholder="Search" className="input-group mx-2" id="medicine-name" list="medicines" type="text" required/>
                        <datalist id="medicines">
                            {
                                medicines.map((e)=>{
                                    return <option value={e.medicine_name} key={e.id} className="d-flex justify-content-between">
                                        {e.medicine_name} | Price: ${e.price} | Stock: {e.stock}
                                     </option>
                                })
                            }
                        </datalist>
                        <input placeholder="Count" className="input-group mx-2" id="medicine-count" type="number" required/>
                        <button className="btn btn-primary"  onClick={addtoOrder}>Add</button>
                    </div>
                        </form>
                    <div className="d-flex justify-content-around border-bottom mb-4">
                        <p>Item Name</p>
                        <p>Count</p>
                        <p>Price</p>
                    </div>
                    <div className="d-flex align-content-around flex-column">
                    {
                         order ? order.map((e,index)=>{
                            return <InvoiceComponent key={index} props={e}/>
                        }): <p>Loading</p>
                    }
                    </div> 
                    <div className="text-right">
                        <p>Total is: {total}</p>
                        <button className="btn btn-success right" onClick={createInvoice}>Checkout</button>
                    </div>
                </div>
            
            </div>
        </div>: <div>Loading</div>
    );
}

// checkout should add that to sales along with .
// customer name,email,insurance information,items, price, date,time,paymentmode:cash,ordertype:instore/online