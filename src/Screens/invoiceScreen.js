import { useState } from "react";
import InvoiceComponent from "../Components/invoiceComponent";
import React from 'react';

export default function InvoiceScreen(){
    const [order,updateOrder]=useState([]);
    const addtoOrder=(e)=>{
        // e.preventDefault();
        var medicine_name
        var medicine_count;
        try{
             medicine_name=document.getElementById('medicine-name').value.toString()
             medicine_count=document.getElementById('medicine-count').value.toString()
             updateOrder([...order,{'medicine_name':medicine_name,
             'medicine_count':medicine_count}]);
             document.getElementById('medicine-name').value="";
             document.getElementById('medicine-count').value="";
        }catch(err){
            console.log("This is error");
            console.log(err);   
        }
        
    }
    return (
        <div className="container h-100">
            {/* <form> */}
            <div className="row">
                <div className="col h-100 border-end">
                    <label className="form-label">Full Name</label>
                    <input className="form-control" type="text" />
                    <label className="form-label">Email</label>
                    <input className="form-control" type="email"/>
                    <label className="form-label">Insurance information</label>
                    <input className="form-control" type="text"/>
                </div>
                <div className="col-10">
                    <div className="d-flex justify-content-around">
                        <input placeholder="Search" className="input-group mx-2" id="medicine-name" />
                        <input placeholder="Count" className="input-group mx-2" id="medicine-count"/>
                        <button className="btn btn-primary" onClick={addtoOrder}>Add</button>
                    </div>
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
                        <button className="btn btn-success right">Checkout</button>
                    </div>
                </div>
            </div>
            {/* </form> */}
        </div>
    );
}