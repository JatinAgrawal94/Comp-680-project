import {useSelector,useDispatch} from 'react-redux';
import React, { useEffect } from "react";
import { allOrderReadAction } from '../actions/orderActions';
import { Link } from 'react-router-dom';
export default function OrderScreen(){
    var {orders,loading}=useSelector(state=>state.allOrderRead);
    const dispatch=useDispatch();
    const getDate=(text)=>{
        var a=text.split('T');
        return a[0]
    }
    const getTime=(text)=>{
        var a=text.split('T');
        var time=a[1].split('.')
        return time[0];
    }
    
    useEffect(()=>{
        dispatch(allOrderReadAction());
    },[dispatch])
    return (
        <div className="container">
            <div className="d-flex justify-content-start">Orders</div>
            <div className="row text-center my-4">
                <div className="col">Order Id</div>
                <div className="col">Name of Customer</div>
                <div className="col">Date</div>
                <div className="col">Time</div>
                <div className="col">Amount</div>
                <div className="col">Payment</div>
                <div className="col">Ready for Pickup</div>
                <div className="col">More Information</div>
                </div>
            {
            orders!==undefined && loading===false?
                orders.map((e)=>{
                return <div className="row" key={e.id}>
                <div className="col ms-2">{e.id}</div>
                <div className="col">{e.customerName}</div>
                <div className="col">{getDate(e.createdAt)}</div>
                <div className="col">{getTime(e.createdAt)}</div>
                <div className="col">{e.totalPrice}</div>
                <div className="col">{e.paid}</div>
                <div className="col">{e.ready}</div>
                <div className='col'><Link to={{pathname:`/orders/${e.id}`}}>More</Link></div>
            </div>
            })
            :<div>Loading</div>
        }
        </div>
    );
}