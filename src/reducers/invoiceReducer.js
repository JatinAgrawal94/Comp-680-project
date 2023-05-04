import {INVOICE_CREATE_FAILED, INVOICE_CREATE_REQUEST,INVOICE_CREATE_SUCCESS, INVOICE_READ_FAILED, INVOICE_READ_REQUEST, INVOICE_READ_SUCCESS,} from '../constants/invoiceConstants';

export const invoiceCreateReducer=(state={},action)=>{
    switch(action.type){
        case INVOICE_CREATE_REQUEST:
            return {loading:true};
        case INVOICE_CREATE_SUCCESS:
            return {loading:false,success:true}
        case INVOICE_CREATE_FAILED:
            return {loading:false,error:action.payload};
        default: return state;        
    }
}

export const invoiceReadReducer=(state={},action)=>{
    switch(action.type){
        case INVOICE_READ_REQUEST:
            return {loading:true};
        case INVOICE_READ_SUCCESS:
            return {loading:false,success:true,invoiceRead:action.payload}
        case INVOICE_READ_FAILED:
            return {loading:false,error:action.payload};
        default: return state;        
    }
}
