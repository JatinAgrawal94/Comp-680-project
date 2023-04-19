import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { specificMedicineRead } from "../actions/medicineActions";

export default function InventoryProfileScreen(props){
    const {loading,medicine}=useSelector(state=>state.specificMedicineRead);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(specificMedicineRead(window.location.pathname.split('/')[2]));
    },[dispatch])
    return (
        loading===false && medicine!==undefined?
        <div className="d-flex flex-column text-center p-5">
            <table className="table border border-2">
                <thead> 
                    <tr>
                    <th scope="col">Field</th>
                    <th scope="col">Values</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">Medicine Name</th>
                    <th>{medicine.medicine_name}</th>
                </tr>
                <tr>
                    <th scope="row">Medicine Manufacturer</th>
                    <th>{medicine.manufacture_date}</th>
                </tr>
                <tr>
                    <th scope="row">Expiry</th>
                    <th>{medicine.expiry_date}</th>
                </tr>
                <tr>
                    <th scope="row">Batch Number</th>
                    <th>{medicine.lot_number}</th>
                </tr>
                <tr>
                    <th scope="row">Dosage</th>
                    <th>{medicine.dosage}</th>
                </tr>
                <tr>
                    <th scope="row">Price</th>
                    <th>{medicine.price}</th>
                </tr>
                <tr>
                    <th scope="row">Stock</th>
                    <th>{medicine.stock}</th>
                </tr>
                </tbody>
            </table>
        </div>: <div>
            Loading
        </div>
    );
}

