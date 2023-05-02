import  Axios  from "axios";
import { ORDER_CREATE_REQUEST,ORDER_CREATE_SUCCESS,ORDER_CREATE_FAILED, ALL_ORDER_READ_REQUEST, ALL_ORDER_READ_SUCCESS, ALL_ORDER_READ_FAILED, ORDER_CANCEL_REQUEST, ORDER_CANCEL_SUCCESS, ORDER_READ_REQUEST, ORDER_READ_SUCCESS, ORDER_READ_FAILED } from "../constants/orderConstants"

export const orderCreateAction=(order)=>async(dispatch,getState)=>{
    dispatch({type:ORDER_CREATE_REQUEST,payload:{}});
    try {
        const {data}=await Axios.post(`http://localhost:5000/api/order/new`,order);
        dispatch({type:ORDER_CREATE_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:ORDER_CREATE_FAILED,payload:error.message})
    }

}
// order once made cannot be changed.

export const allOrderReadAction=()=>async(dispatch,getState)=>{
    dispatch({type:ALL_ORDER_READ_REQUEST,payload:{}});
    try {
        const {data}=await Axios.get(`http://localhost:5000/api/order/all`);
        dispatch({type:ALL_ORDER_READ_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:ALL_ORDER_READ_FAILED,payload:error.message})
    }
}


// cancel order

export const orderCancelAction=(orderId)=>async(dispatch,getState)=>{
    dispatch({type:ORDER_CANCEL_REQUEST,payload:{}})
    try {
        const {data}=await Axios.post(`http://localhost:5000/api/order/cancel/${orderId}`,orderId);
        dispatch({type:ORDER_CANCEL_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:ORDER_CREATE_FAILED,payload:error.message})
    }
}

// get orders for a specific user. for that I have to prepare some sort of userID.

export const orderReadAction=(id)=>async(dispatch,getState)=>{
    dispatch({type:ORDER_READ_REQUEST,payload:{}});
    try {
        const {data}=await Axios.get(`http://localhost:5000/api/order/read/${id}`);
        dispatch({type:ORDER_READ_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:ORDER_READ_FAILED,payload:error.message})
    }
}