import {useSelector,useDispatch} from 'react-redux';
import React, { useEffect, useState } from "react";
import { medicineRead } from "../actions/medicineActions";
import { orderCreateAction } from '../actions/orderActions';
export default  function CreateOrderScreen(){
    const dispatch=useDispatch();
    const {loading,medicines}=useSelector(state=>state.medicineRead);
    const [order,updateOrder]=useState([]);
    const [info,updateInfo]=useState();
    const [price,updatePrice]=useState(0);
    const [warning,updateWarning]=useState(0);
    const [formsuccess,updateSuccess]=useState(0);
    // here we don;t have to show the price only the medicine and their count and that's it.adn the product Id.
    useEffect(()=>{
        dispatch(medicineRead());
    },[dispatch])
    const addtoOrder=(e)=>{
        var medicine_name
        var medicine_count;    
        try{
             medicine_name=document.getElementById('medicine-name').value.toString()
             medicine_count=document.getElementById('medicine-count').value.toString()
            var item=medicines.filter((e)=>e.medicine_name===medicine_name)
            updatePrice(price+item[0].price*medicine_count)
            var i={
                productId:item[0].id,
                name:item[0].medicine_name,
                qty:medicine_count,
                price:item[0].price*medicine_count
            }
            updateOrder([...order,i]);
            document.getElementById("medicine-name").value="";
            document.getElementById("medicine-count").value="";
        }catch(err){
        }
    }
    const placeOrder=(e)=>{
        e.preventDefault();
        if(info!==undefined && Object.keys(info).length!==0){
            if(info.refill===undefined){
                info.refill="Yes";
            }
            var finalOrder={
                customerName:info.customerName,
                customerDOB:info.customerDOB,
                customerInsuranceInformation:info.customerInsuranceInformation,
                customerContact:info.customerContact,
                refill:info.refill,
                refillFrequency:info.refillFrequency,
                orderItems:order,
                totalPrice:price,
                totalNoOfItems:order.length,
                cancelled:false,
                paid:false,
                ready:false,
            }
            dispatch(orderCreateAction(finalOrder));
            updateOrder([]);
            document.getElementById('myform').reset()
            updateSuccess(1);
            setTimeout(() => {
                updateSuccess(0);
            }, 2000);
        }else{
            updateWarning(1);
            setTimeout(() => {
                updateWarning(0)
            }, 2000);
        }
    }
    
    return(
        // this page is for doctor user.
        // we also need to keep track of who placed the order. and that is to be done after we make code for authentication
        loading===false && medicines!==undefined?<div className='row'>
            {/* customerName,customerDOB,customerInsuranceInformation,refill,refillFrequency,cancelled,orderType,totalNoOfItems,totalPrice, */}
            {/* orderItems:{name,qty,productId,price} */}
            <form className="form col" id="myform">
                <div className="mb-3">
                    <label htmlFor="customerName" className="form-label float-start">Patient Name</label>
                    <input className="form-control" required type="text" onChange={(e)=>updateInfo({...info,customerName:e.target.value})} />
                </div>
                <div className="mb-3">
                    <label htmlFor="customerDOB" className="form-label float-start">Patient DOB</label>
                    <input className="form-control" required type="date" onChange={(e)=>updateInfo({...info,customerDOB:e.target.value})} />
                </div>
                <div className="mb-3">
                    <label htmlFor="customerInsuranceInformation" className="form-label float-start">Insurance</label>
                    <input className="form-control"  required type="text" onChange={(e)=>updateInfo({...info,customerInsuranceInformation:e.target.value})}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="customerContact" className="form-label float-start">Contact</label>
                    <input className="form-control" required type="text" maxLength="10" onChange={(e)=>updateInfo({...info,customerContact:e.target.value})}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="refill" className="form-label float-start">Refill</label>
                    <select className="form-select" aria-label="refill" defaultValue="Yes" onChange={(e)=>updateInfo({...info,refill:e.target.value})}>
                            <option key="Yes" value="Yes">Yes</option>
                            <option key="No" value="No">No</option>
                        </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="refillFrequency" required className="form-label float-start">Refill Frequency</label>
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
            {warning!==0?<div className="alert alert-warning my-4" role="alert">
                    Your Cart is Empty !
                    </div>:<div></div>}
            {formsuccess!==0?<div className="alert alert-success my-4" role="alert">
            Order Placed !
            </div>:<div></div>}

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