import { useState } from "react";
import InvoiceComponent from "../Components/invoiceComponent";

export default function InvoiceScreen(){
    
    const [order,updateOrder]=useState([]);
    console.log(order)
    
    const addtoOrder=(e)=>{
        // var o=order;
        e.preventDefault();
        var o=order;
        console.log(o)
        var medicine_name
        var medicine_count;
       
        try{
            // console.log(order);
             medicine_name=document.getElementById('medicine-name').value.toString()
             medicine_count=document.getElementById('medicine-count').value.toString()
             o.push({
                 'medicine-name':medicine_name,
                 'medicine-count':medicine_count
             })
            //  console.log(o[0])
             updateOrder(o);
             
        }catch(err){
            console.log("This is error");
            console.log(err);   
        }
        
    }
    return (
        <div className="container h-100">
            <form>
            <div className="row">
                <div className="col h-100 border-end">
                    <label className="form-label">Full Name</label>
                    <input className="form-control" type="text"/>
                    <label className="form-label">Email</label>
                    <input className="form-control" type="email"/>
                    <label className="form-label">Insurance information</label>
                    <input className="form-control" type="text"/>
                </div>
                {/* <span className="h-100 border-end"></span> */}
                <div className="col-10">
                    <div className="d-flex justify-content-around">
                        <input placeholder="Search" className="input-group mx-2" id="medicine-name"/>
                        <input placeholder="Count" className="input-group mx-2" id="medicine-count"/>
                        <button className="btn btn-primary" onClick={addtoOrder}>Add</button>
                    </div>
                    <div className="d-flex justify-content-around border-bottom mb-4">
                        <p>Item Name</p>
                        <p>Count</p>
                        <p>Price</p>
                    </div>
                    <div className="d-flex justify-content-around">
                    {
                        // order!==undefined && order!==null && order !== ""? order.map((e,index)=>{
                        //     return <InvoiceComponent key={index} props={e}/>
                        // }): <p>Loading</p>
                    }
                    </div>
                    <div className="text-right">
                        <button className="btn btn-success right">Checkout</button>
                    </div>
                </div>
            </div>
            </form>
        </div>
    );
}