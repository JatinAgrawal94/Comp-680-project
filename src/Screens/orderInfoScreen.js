import {useSelector,useDispatch} from 'react-redux';
import React, { useEffect } from "react";
import { orderReadAction } from '../actions/orderActions';

export default function OrderInfoScreen(){
    var id=window.location.pathname.split('/')[2];
    const dispatch=useDispatch();
    var {order,loading}=useSelector(state=>state.orderRead);
    useEffect(()=>{
        dispatch(orderReadAction(id))
    },[dispatch,id]);

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
                    <span className="col">{order.Paid}</span>
                </div>
                <div className="row text-center">
                    <span className="col">Ready for Pickup</span>
                    <span className="col">{order.ready}</span>
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