import {ORDER_CREATE_FAILED, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS,ALL_ORDER_READ_REQUEST,ALL_ORDER_READ_SUCCESS,ALL_ORDER_READ_FAILED,ORDER_READ_REQUEST,ORDER_READ_SUCCESS,ORDER_READ_FAILED, ORDER_UPDATE_REQUEST, ORDER_UPDATE_SUCCESS, ORDER_UPDATE_FAILED} from '../constants/orderConstants';

export const orderCreateReducer=(state={},action)=>{
    switch(action.type){
        case ORDER_CREATE_REQUEST:
            return {loading:true};
        case ORDER_CREATE_SUCCESS:
            return {loading:false,success:true}
        case ORDER_CREATE_FAILED:
            return {loading:false,error:action.payload};
        default: return state;        
    }
}


export const orderUpdateReducer=(state={},action)=>{
    switch(action.type){
        case ORDER_UPDATE_REQUEST:
            return {loading:true};
        case ORDER_UPDATE_SUCCESS:
            return {loading:false,success:true}
        case ORDER_UPDATE_FAILED:
            return {loading:false,error:action.payload};
        default: return state;        
    }
}

export const allOrderReadReducer=(state={},action)=>{
    switch(action.type){
        case ALL_ORDER_READ_REQUEST:
            return {loading:true};
        case ALL_ORDER_READ_SUCCESS:
            return {loading:false,success:true,orders:action.payload}
        case ALL_ORDER_READ_FAILED:
            return {loading:false,error:action.payload};
        default: return state;        
    }
}

export const orderReadReducer=(state={},action)=>{
    switch(action.type){
        case ORDER_READ_REQUEST:
            return {loading:true};
        case ORDER_READ_SUCCESS:
            return {loading:false,success:true,order:action.payload}
        case ORDER_READ_FAILED:
            return {loading:false,error:action.payload};
        default: return state;        
    }
}

