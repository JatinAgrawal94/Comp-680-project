import  Axios  from "axios";
import { INVOICE_CREATE_FAILED, INVOICE_CREATE_REQUEST, INVOICE_CREATE_SUCCESS } from "../constants/invoiceConstants"

export const invoiceAction=(m)=>async(dispatch,get)=>{
    dispatch({type:INVOICE_CREATE_REQUEST,payload:{}});
    try {
        const data=await Axios.post(`${REACT_APP_BACKEND_URL}/api/invoice/create`,{data:m},{headers:{
            'content-type':'application/json'
        }});
        dispatch({type:INVOICE_CREATE_SUCCESS,payload:data});
    } catch (error) {
        console.log(error);
        dispatch({type:INVOICE_CREATE_FAILED,payload:error.message});
    }
}

