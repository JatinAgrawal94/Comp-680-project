import {useSelector,useDispatch} from 'react-redux';
import React, { useEffect, useState } from "react";
import { medicineRead } from "../actions/medicineActions";
import { orderCreateAction } from '../actions/orderActions';
export default  function CreateOrderScreen(){
    const dispatch=useDispatch();
    const {loading,medicines}=useSelector(state=>state.medicineRead);
    const [order,updateOrder]=useState([]);
    const [info,updateInfo]=useState();
    // here we don;t have to show the price only the medicine and their count and that's it.adn the product Id.
    useEffect(()=>{
        dispatch(medicineRead());
    },[dispatch])
    const addtoOrder=(e)=>{
        // we only need item name ,id,qty
        var medicine_name
        var medicine_count;    
        try{
             medicine_name=document.getElementById('medicine-name').value.toString()
             medicine_count=document.getElementById('medicine-count').value.toString()
            var item=medicines.filter((e)=>e.medicine_name===medicine_name)
            var i={
                productId:item[0].id,
                name:item[0].medicine_name,
                qty:medicine_count,
            }
            updateOrder([...order,i]);
            // console.log(order);
            document.getElementById("medicine-name").value="";
            document.getElementById("medicine-count").value="";
        }catch(err){
        }
    }
    const placeOrder=(e)=>{
        e.preventDefault();
        var finalOrder={
            customerName:info.customerName,
            customerDOB:info.customerDOB,
            customerInsuranceInformation:info.customerInsuranceInformation,
            refill:info.refill,
            refillFrequency:info.refillFrequency,
            orderItems:order,
            totalPrice:"",
            totalNoOfItems:order.length,
            cancelled:false,
            paid:false,
            ready:false,
        }
        console.log(finalOrder);
        dispatch(orderCreateAction(finalOrder));
    }
    
    return(
        // this page is for doctor user.
        // we also need to keep track of who placed the order. and that is to be done after we make code for authentication
        loading===false && medicines!==undefined?<div className='row'>
            {/* customerName,customerDOB,customerInsuranceInformation,refill,refillFrequency,cancelled,orderType,totalNoOfItems,totalPrice, */}
            {/* orderItems:{name,qty,productId,price} */}
            <form className="form col">
                <div className="mb-3">
                    <label htmlFor="" className="form-label float-start">Patient Name</label>
                    <input className="form-control" type="text" onChange={(e)=>updateInfo({...info,customerName:e.target.value})} />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label float-start">Patient DOB</label>
                    <input className="form-control" type="date" onChange={(e)=>updateInfo({...info,customerDOB:e.target.value})} />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label float-start">Insurance</label>
                    <input className="form-control" type="text" onChange={(e)=>updateInfo({...info,customerInsuranceInformation:e.target.value})}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label float-start">Refill</label>
                    <input className="form-control" onChange={(e)=>updateInfo({...info,refill:e.target.value})}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label float-start">Refill Frequency</label>
                    <input className="form-control" type="number" onChange={(e)=>updateInfo({...info,refillFrequency:e.target.value})}/>
                </div>
                <div>
                    <button className="btn btn-primary" onClick={placeOrder}>Place Order</button>    
                </div>
            </form>
            <div className='col'>
            <div className="d-flex justify-content-around ">
                <input placeholder="Search for Items" className="input-group mx-2" id="medicine-name" list="medicines" type="text" required/>
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
            <div>
                
                    {
                    order!==undefined && order.length!==0?
                      <div>
                        {
                            order.map((e)=>{
                                return <div className='d-flex justify-content-around my-3' key={e.productId}>
                                <p>{e.name}</p>
                                <p>{e.qty}</p>
                                </div>
                             })
                        }  
                    </div>
                    : <div></div>
                }
                
            </div>
            </div>
        </div>: <div>Loading</div>
    );
}