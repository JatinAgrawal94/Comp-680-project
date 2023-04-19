import {INVOICE_CREATE_FAILED, INVOICE_CREATE_REQUEST,INVOICE_CREATE_SUCCESS,} from '../constants/invoiceConstants';

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