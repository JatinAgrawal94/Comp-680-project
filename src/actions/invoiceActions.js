import { Axios } from "axios";
import { INVOICE_CREATE_FAILED, INVOICE_CREATE_REQUEST, INVOICE_CREATE_SUCCESS } from "../constants/invoiceConstants"
// create invoice,edit invoice for customers.
// refund invoice to customers.

// right now the basic functionality is that , we have to place an order and pharmacy should be able to receive that order.

// right now the order should only be placed by the doctors regarding the need for their patient.
// the model for that order should be.
// doctor name,patient name,patient dob, patient address, medicine name, medicine refill?, medicine count.
// 
// gitignore .env invoiceConstants.js orderConstants.js invoiceActions.js medicinerefill medicinecount
// doctror name patinent name , patient dob, patient address medicine name, medicine refill medicine count

// first action to create an invoice

export const invoiceAction=(m)=>async(dispatch,get)=>{
    dispatch({type:INVOICE_CREATE_REQUEST,payload:{}});
    try {
        const {data}=await Axios.post(`${process.env.REACT_APP_BACKEND_URL/api/invoice/create}`,m);
        dispatch({type:INVOICE_CREATE_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:INVOICE_CREATE_FAILED,payload:error.message});
    }
}

