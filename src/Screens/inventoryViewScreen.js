import React, { useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import { medicineRead } from "../actions/medicineActions";

export default function InventoryViewScreen(props){
    // i need to extract all medicines here and then I have to display them here.
    const {loading,medicines}=useSelector(state=>state.medicineRead);
    
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(medicineRead());
    },[dispatch])
    return(
        
            loading===false && medicines!== undefined?
            <div className="d-flex flex-column text-center justify-content-around p-5">
                <table className="table border border-2">
                    <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">More Information</th>
                    <th scope="col">Update Information</th>
                    </tr>
                    </thead>
                    <tbody>
                {
                    medicines.map((e)=>{
                      return <tr key={e.id}>
                        <th scope="row">{e.medicine_name}</th>
                        <th>$ {e.price}</th>
                        <th><Link to={{pathname:`/viewinventory/${e.id}`}} >Link</Link></th>
                        <th><Link to={{pathname:`/updateinventory/${e.id}`}} >Edit</Link></th>
                      </tr>     
                    })
                }
                </tbody>
                </table>
            </div>: <div>Loading</div>
        
    );
}