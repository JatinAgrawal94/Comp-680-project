import React, { useEffect } from "react";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { specificMedicineRead, medicineUpdate } from "../actions/medicineActions";
export default function UpdateInventoryScreen(props){
    const clearform=()=>{
        const input=document.getElementsByTagName('input');
        for(let i=0;i<input.length;i++){
            input[i].innerHTML=""
        }
    }
    clearform()
    const id=window.location.pathname.split('/')[2];
    const dispatch=useDispatch();
    const {medicine,loading}=useSelector(state=>state.specificMedicineRead);
    const [fields,addFields]=useState(medicine);
    

    useEffect(()=>{
        clearform()
        dispatch(specificMedicineRead(id))
    },[dispatch,id])

    const updateInventory=()=>{
        dispatch(medicineUpdate(fields,id))
    }
    // data required for update id, and update signal
    return(
        // fields name, manufacture date,expirydate, company,batch number,dosage,price,stock
        loading===false && medicine!==undefined?<div className="d-flex flex-column p-4">
            <div className="float-start mb-3">
            <p className="float-start fw-bold">Add New Item</p>
             </div>
            <div className="mb-3 mt-3">
                <label className="form-label float-start" htmlFor="medicine_name">Medicine Name</label>
                <input className="form-control" type="text" value={fields.medicine_name} onChange={(e)=>addFields({...fields,medicine_name:e.target.value})}/>
            </div>
            <div className="mb-3">
                <label className="form-label float-start" htmlFor="manufacture_date">Manufacture Date</label>
                <input className="form-control" type="date" value={fields.manufacture_date} onChange={(e)=>addFields({...fields,manufacture_date:e.target.value})} />
            </div>
            <div className="mb-3">
                <label className="form-label float-start" htmlFor="expiry_date"> Expiry Date</label>
                <input className="form-control" type="date" value={fields.expiry_date} onChange={(e)=>addFields({...fields,expiry_date:e.target.value})} />
            </div>
            <div className="mb-3">
                <label className="form-label float-start" htmlFor="manufacturer_name">Manufacturer</label>
                <input className="form-control" type="text" value={fields.company} onChange={(e)=>addFields({...fields,company:e.target.value})}/>
            </div>
            <div className="mb-3">
                <label className="form-label float-start" htmlFor="batch_number">Batch Number</label>
                <input className="form-control" type="text" value={fields.lot_number} onChange={(e)=>addFields({...fields,lot_number:e.target.value})} />
            </div>
            <div className="mb-3">
                <label className="form-label float-start" htmlFor="dosage">Dosage</label>
                <input className="form-control" type="text"  value={fields.dosage} onChange={(e)=>addFields({...fields,dosage:e.target.value})}/>
            </div>
            <div className="mb-3">
                <label className="form-label float-start" htmlFor="price">Price</label>
                <input className="form-control" type="text" value={fields.price} onChange={(e)=>addFields({...fields,price:e.target.value})}/>
            </div>
            <div className="mb-3">
                <label className="form-label float-start" htmlFor="stock">Stock</label>
                <input className="form-control" type="number" value={fields.stock} onChange={(e)=>addFields({...fields,stock:e.target.value})}/>
            </div>
            <button type="button" className="btn btn-primary" onClick={updateInventory}>Update</button>
        </div>: <div>Loading</div>
    )
}