import { MEDICINE_CREATE_REQUEST,MEDICINE_CREATE_SUCCESS,MEDICINE_CREATE_FAILED, MEDICINE_READ_REQUEST, MEDICINE_READ_SUCCESS, MEDICINE_READ_FAILED, MEDICINE_UPDATE_REQUEST, MEDICINE_UPDATE_SUCCESS, MEDICINE_UPDATE_FAILED, SPECIFIC_MEDICINE_READ_REQUEST, SPECIFIC_MEDICINE_READ_SUCCESS, SPECIFIC_MEDICINE_READ_FAILED } from "../constants/medicineConstants";

export const medicineCreateReducer=(state={},action)=>{
    switch(action.type){
        case MEDICINE_CREATE_REQUEST:
            return {loading:true};
        case MEDICINE_CREATE_SUCCESS:
            return {loading:false,success:true}
        case MEDICINE_CREATE_FAILED:
            return {loading:false,error:action.payload};
        default: return state;        
    }
}

export const medicineReadReducer=(state={loading:true,medicine:[]},action)=>{
    switch(action.type){
        case MEDICINE_READ_REQUEST:
            return {loading:true};
        case MEDICINE_READ_SUCCESS:
            return {loading:false,success:true,medicines:action.payload}
        case MEDICINE_READ_FAILED:
            return {loading:false,error:action.payload};
        default: return state;        
    }
}

export const specificMedicineReadReducer=(state={loading:true,medicine:{}},action)=>{
   switch(action.type){
        case SPECIFIC_MEDICINE_READ_REQUEST:
            return {loading:true};
        case SPECIFIC_MEDICINE_READ_SUCCESS:
            return {loading:false,success:true,medicine:action.payload}
        case SPECIFIC_MEDICINE_READ_FAILED:
            return {loading:false,error:action.payload};
        default: return state;        
    }
}

export const medicineUpdateReducer=(state={},action)=>{
    switch(action.type){
        case MEDICINE_UPDATE_REQUEST:
            return {loading:true};
        case MEDICINE_UPDATE_SUCCESS:
            return {loading:false,success:true}
        case MEDICINE_UPDATE_FAILED:
            return {loading:false,error:action.payload};
        default: return state;        
    }
}