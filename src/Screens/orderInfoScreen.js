import {useSelector,useDispatch} from 'react-redux';
import React, { useEffect, useState } from "react";
import { orderReadAction, orderUpdateAction } from '../actions/orderActions';
export default function OrderInfoScreen(){
    var id=window.location.pathname.split('/')[2];
    const dispatch=useDispatch();
    var {order,loading}=useSelector(state=>state.orderRead);
    const [change,updateChange]=useState({});
    const [flag,updateFlag]=useState(0);
    useEffect(()=>{
        dispatch(orderReadAction(id))
    },[dispatch,id]);

    const updateOrder=()=>{
        try {
            if(Object.keys(change).length!==0){
                change.customerContact=order.customerContact;
                change.customerName=order.customerName;
                dispatch(orderUpdateAction(id,change))
                updateFlag(1);
                setTimeout(()=>{
                    updateFlag(0);
                },2000)
            }
        } catch (error) {}
    }
    
    const getDate=(text)=>{
        var a=text.split('T');
        return a[0]
    }
    const getTime=(text)=>{
        var a=text.split('T');
        var time=a[1].split('.')
        return time[0];
    }
    return (
       loading===false && order!==undefined? <div>
            <div className="col text-center">
                <div className="row text-center">
                    <span className="col">Order Id</span>
                    <span className="col">{order.id}</span>
                </div>
                <div className="row text-center">
                    <span className="col">Customer Name</span>
                    <span className="col">{order.customerName}</span>
                </div>
                <div className="row text-center">
                    <span className="col">Customer Insurance</span>
                    <span className="col">{order.customerInsuranceInformation}</span>
                </div>
                <div className="row text-center">
                    <span className="col">Customer Contact</span>
                    <span className="col">{order.customerContact}</span>
                </div>
                <div className="row text-center">
                    <span className="col">Date</span>
                    <span className="col">{getDate(order.createdAt)}</span>
                </div>
                <div className="row text-center">
                    <span className="col">Time</span>
                    <span className="col">{getTime(order.createdAt)}</span>
                </div>
                <div className="row text-center">
                    <span className="col">Total number of items</span>
                    <span className="col">{order.totalPrice}</span>
                </div>
                <div className="row text-center">
                    <span className="col">Refill</span>
                    <span className="col">{order.refill}</span>
                </div>
                <div className="row text-center">
                    <span className="col">Refill Frequency</span>
                    <span className="col">{order.refillFrequency}</span>
                </div>
                <div className="row text-center">
                    <span className="col">Amount</span>
                    <span className="col">{order.totalPrice}</span>
                </div>
                <div className="row text-center">
                    <span className="col">Payment</span>
                    <div className='col justify-content-around'>
                        <select className="form-select w-25 text-center mx-auto" aria-label="payment" defaultValue={order.paid} onChange={(e)=>updateChange({...change,paid:e.target.value})}>
                            <option key={true} value={true}>Paid</option>
                            <option key={false} value={false}>Not Paid</option>
                        </select>
                    </div>
                </div>
                <div className="row text-center">
                    <span className="col">Ready for Pickup</span>
                    <div className='col'>
                    <select className="form-select w-25 text-center  mx-auto" aria-label="ready for pickup" defaultValue={order.ready} onChange={(e)=>updateChange({...change,ready:e.target.value})}>
                        <option key={true} value={true}>Ready</option>
                        <option key={false} value={false}>Not Ready</option>
                    </select>
                    </div>
                </div>
                <div className='row text-center'>
                    <span className='col'>Time taken to prepare the order</span>
                    <div className='col'>
                        <input className='form-control w-25 text-center mx-auto' type="number" placeholder="Time in Minutes" onChange={(e)=>{updateChange({...change,timetaken:e.target.value})}}
                        defaultValue={order.timetaken!==undefined?order.timetaken:null}
                        />
                    </div>
                </div>
                <hr></hr>
                <div className='row'>
                    <button className={flag===0?'btn btn-primary w-25 mx-auto':'btn btn-success w-25 mx-auto'} onClick={updateOrder}>Update</button>
                </div>
                <hr/>
                <div className="row text-center">
                    <span className="col">Order Items</span>
                </div>
                <hr/>
                <div className="row text-center">
                    <div className="col">Product Id</div>
                    <div className="col">Product Name</div>
                    <div className="col">Quantity</div>
                    <div className="col">Price</div>
                </div>
                {
                    order.orderItems.map((e)=>{
                    return <div className="row text-center" key={e.productId}>
                        <div className="col">{e.productId}</div>
                        <div className="col">{e.name}</div>
                        <div className="col">{e.qty}</div>
                        <div className="col">{e.price}</div>
                    </div>
                    })
                }
            </div>
        </div>: <div>Loading</div>
    )
}