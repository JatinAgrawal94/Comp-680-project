import {configureStore} from '@reduxjs/toolkit/';
import { invoiceCreateReducer } from './reducers/invoiceReducer';
import { medicineCreateReducer, medicineReadReducer, medicineUpdateReducer, specificMedicineReadReducer } from './reducers/medicineReducers';
import { allOrderReadReducer, orderUpdateReducer, orderCreateReducer, orderReadReducer } from './reducers/orderReducers';

// medicine, invoice, orders.
const initialState={
    medicineRead:{medicines:localStorage.getItem('medicines')?JSON.parse(localStorage.getItem('medicines')):[]},
    specificMedicineRead:{medicine:localStorage.getItem('medicine')?JSON.parse(localStorage.getItem('medicine')):{}},
}

export default configureStore({
    reducer:{
        medicineCreate:medicineCreateReducer,
        medicineRead:medicineReadReducer,
        specificMedicineRead:specificMedicineReadReducer,
        medicineUpdate:medicineUpdateReducer,
        orderCreate:orderCreateReducer,
        orderUpdate:orderUpdateReducer,
        allOrderRead:allOrderReadReducer,
        orderRead: orderReadReducer,
        invoiceCreate:invoiceCreateReducer
    },
    preloadedState:initialState
});