import { MEDICINE_CREATE_REQUEST,MEDICINE_CREATE_SUCCESS,MEDICINE_CREATE_FAILED, MEDICINE_READ_REQUEST, MEDICINE_READ_SUCCESS, MEDICINE_READ_FAILED, MEDICINE_UPDATE_REQUEST, MEDICINE_UPDATE_SUCCESS, MEDICINE_UPDATE_FAILED, SPECIFIC_MEDICINE_READ_REQUEST, SPECIFIC_MEDICINE_READ_SUCCESS, SPECIFIC_MEDICINE_READ_FAILED } from "../constants/medicineConstants"
import Axios from 'axios';

export const medicineCreate=(m)=>async(dispatch,getState)=>{
    dispatch({type:MEDICINE_CREATE_REQUEST,payload:{}});
    try {
        var {data}=await Axios.post(`http://localhost:5000/api/medicine/new`,m);
        dispatch({type:MEDICINE_CREATE_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:MEDICINE_CREATE_FAILED,payload:error.message})
    }
}

// route to get all medicines.
export const medicineRead=()=>async(dispatch,getState)=>{
    dispatch({type:MEDICINE_READ_REQUEST,payload:{}});
    try {
        const {data}=await Axios.get(`http://localhost:5000/api/medicine/all`);
        dispatch({type:MEDICINE_READ_SUCCESS,payload:data});
        localStorage.setItem('medicines',JSON.stringify(getState().medicineRead.medicines))
    } catch (error) {
        dispatch({type:MEDICINE_READ_FAILED,payload:error.message})
    }
}

// getting specific medicine
export const specificMedicineRead=(id)=>async(dispatch,getState)=>{
    dispatch({type:SPECIFIC_MEDICINE_READ_REQUEST,payload:{}})
    try {
        const {data}=await Axios.get(`http://localhost:5000/api/medicine/read/${id}`)
        dispatch({type:SPECIFIC_MEDICINE_READ_SUCCESS,payload:data});
        localStorage.setItem('medicine',JSON.stringify(getState().specificMedicineRead.medicine))
    } catch (error) {
        dispatch({type:SPECIFIC_MEDICINE_READ_FAILED,payload:error.message})
    }
}

export const medicineUpdate=(m,id)=>async(dispatch,getState)=>{
    dispatch({type:MEDICINE_UPDATE_REQUEST,payload:{}});
    try {
        // here we need to add id for the medicine added.so that we can identify that medicine.
        const {data}=await Axios.put(`http://localhost:5000/api/medicine/update/${id}`,m);
        dispatch({type:MEDICINE_UPDATE_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:MEDICINE_UPDATE_FAILED,payload:error.message})
    }
}
