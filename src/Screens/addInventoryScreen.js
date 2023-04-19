import React from "react";
import { useState } from "react";
import {useDispatch} from 'react-redux';
import { medicineCreate } from "../actions/medicineActions";
export default function AddInventoryScreen(props){
    const [fields,addFields]=useState({});
    const dispatch=useDispatch();
    
    const addInventory=()=>{
        dispatch(medicineCreate(fields))
    }
    return(
        // fields name, manufacture date,expirydate, company,batch number,dosage,price,stock
        <div className="d-flex flex-column p-4">
            <div className="float-start mb-3">
            <p className="float-start fw-bold">Add New Item</p>
             </div>
            <div className="mb-3 mt-3">
                <label className="form-label float-start" htmlFor="medicine_name">Medicine Name</label>
                <input className="form-control" type="text" onChange={(e)=>addFields({...fields,medicine_name:e.target.value})}/>
            </div>
            <div className="mb-3">
                <label className="form-label float-start" htmlFor="manufacture_date">Manufacture Date</label>
                <input className="form-control" type="date" onChange={(e)=>addFields({...fields,manufacture_date:e.target.value})} />
            </div>
            <div className="mb-3">
                <label className="form-label float-start" htmlFor="expiry_date"> Expiry Date</label>
                <input className="form-control" type="date" onChange={(e)=>addFields({...fields,expiry_date:e.target.value})} />
            </div>
            <div className="mb-3">
                <label className="form-label float-start" htmlFor="manufacturer_name">Manufacturer</label>
                <input className="form-control" type="text" onChange={(e)=>addFields({...fields,company:e.target.value})}/>
            </div>
            <div className="mb-3">
                <label className="form-label float-start" htmlFor="batch_number">Batch Number</label>
                <input className="form-control" type="text" onChange={(e)=>addFields({...fields,lot_number:e.target.value})} />
            </div>
            <div className="mb-3">
                <label className="form-label float-start" htmlFor="dosage">Dosage</label>
                <input className="form-control" type="text" onChange={(e)=>addFields({...fields,dosage:e.target.value})}/>
            </div>
            <div className="mb-3">
                <label className="form-label float-start" htmlFor="price">Price</label>
                <input className="form-control" type="text" onChange={(e)=>addFields({...fields,price:e.target.value})}/>
            </div>
            <div className="mb-3">
                <label className="form-label float-start" htmlFor="stock">Stock</label>
                <input className="form-control" type="number" onChange={(e)=>addFields({...fields,stock:e.target.value})}/>
            </div>
            <button type="button" className="btn btn-primary" onClick={addInventory}>Add</button>
        </div>
    )
}