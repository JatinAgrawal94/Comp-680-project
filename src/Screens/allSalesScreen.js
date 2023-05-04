import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { invoiceReadAction } from "../actions/invoiceActions";

export default function AllSalesScreen(){
    const dispatch=useDispatch();
    const {loading,invoiceRead}=useSelector(state=>state.invoiceRead);
    const [select,updateSelected]=useState(0);

    const getDate=(text)=>{
        var a=text.split('T');
        return a[0]
    }
    const getTime=(text)=>{
        var a=text.split('T');
        var time=a[1].split('.')
        return time[0];
    }

    const sum=(index)=>{
        var t=0;
        invoiceRead[select].items.map((e)=>{
            t+=e.total_price;
        })
        
        return t;
    }

    useEffect(()=>{
        dispatch(invoiceReadAction());
    },[dispatch])
    return (
        // show by name, date time and amount on left
        // the list of items on right.
       invoiceRead!==undefined && loading===false? <div className="row">
            <div className="col border">
            <div className="row border">
                        <div className="col">Date</div>
                        <div className="col">Time</div>
                        <div className="col">Name of Customer</div>
            </div>
            {
                invoiceRead.map((e,i)=>{
                    return (<div className="row border" key={e.id} onClick={(e)=>{updateSelected(i)}}>
                        <div className="col">{getDate(e.createdAt)}</div>
                        <div className="col">{getTime(e.createdAt)}</div>
                        <div className="col">{e.customer_name}</div>
                    </div>)
                })
            }
            </div>
            <div className="col border">
            <div className="row border">
                <div className="col">Item Name</div>
                <div className="col">Item Count</div>
                <div className="col">Price</div>
            </div>
            <div  className="col">
                {
                    invoiceRead!==undefined && loading===false? invoiceRead[select].items.map((e,i)=>{
                        return (
                                <div className="row" key={i}>
                                    <div className="col">{e.medicine_name}</div>
                                    <div className="col">{e.count}</div>
                                    <div className="col">{e.total_price}</div>
                                </div>
                        );       
                    }): <div>Loading</div>
                }
                <div className="row float-end mx-4">
                    <div className="float-end">Total is {sum()}</div>
                </div>
                </div>
            </div>
        </div>:<div>Loading</div>
    )
}