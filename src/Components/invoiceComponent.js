
import React from 'react';

export default function InvoiceComponent(props){
    return <div className="d-flex justify-content-around">
            <p>{props.props.medicine_name}</p>
            <p>{props.props.medicine_count}</p>
            <p></p>
        </div>
}

