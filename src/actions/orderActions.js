import  Axios  from "axios";
import { ORDER_CREATE_REQUEST,ORDER_CREATE_SUCCESS,ORDER_CREATE_FAILED, ALL_ORDER_READ_REQUEST, ALL_ORDER_READ_SUCCESS, ALL_ORDER_READ_FAILED, ORDER_READ_REQUEST, ORDER_READ_SUCCESS, ORDER_READ_FAILED, ORDER_UPDATE_REQUEST, ORDER_UPDATE_SUCCESS, ORDER_UPDATE_FAILED } from "../constants/orderConstants"

export const orderCreateAction=(order)=>async(dispatch,getState)=>{
    dispatch({type:ORDER_CREATE_REQUEST,payload:{}});
    try {
        const {data}=await Axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/order/new`,order);
        dispatch({type:ORDER_CREATE_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:ORDER_CREATE_FAILED,payload:error.message})
    }

}
// order once made cannot be changed.

export const allOrderReadAction=()=>async(dispatch,getState)=>{
    dispatch({type:ALL_ORDER_READ_REQUEST,payload:{}});
    try {
        const {data}=await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/order/all`);
        dispatch({type:ALL_ORDER_READ_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:ALL_ORDER_READ_FAILED,payload:error.message})
    }
}


// cancel order
// udpate paid and ready actions
export const orderUpdateAction=(orderId,update)=>async(dispatch,getState)=>{
    dispatch({type:ORDER_UPDATE_REQUEST,payload:{}})
    try {
        const {data}=await Axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/order/update/${orderId}`,update);
        dispatch({type:ORDER_UPDATE_SUCCESS,payload:data})
    } catch (error) {
        console.log(error); 
        dispatch({type:ORDER_UPDATE_FAILED,payload:error.message})
    }
}

// get orders for a specific user. for that I have to prepare some sort of userID.

export const orderReadAction=(id)=>async(dispatch,getState)=>{
    dispatch({type:ORDER_READ_REQUEST,payload:{}});
    try {
        const {data}=await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/order/read/${id}`);
        dispatch({type:ORDER_READ_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:ORDER_READ_FAILED,payload:error.message})
    }
}

// order update action for if it is cancelled or we need to change something

