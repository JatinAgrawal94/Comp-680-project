
export default function OrderScreen(){
    return (
        <div className="container">
            <div className="d-flex justify-content-start">Orders</div>
            {/* <div className="flex d-flex justify-content-around">
                <span>Order Id</span>
                <span>Name of Customer</span>
                <span>Date</span>
                <span>Time</span>
                <span>Amount</span>
            </div> */}
            
            {/* <div className="d-flex justify-content-around flex-column text-center">
                <div className="d-flex justify-content-around text-center">
                    <span>123456</span>
                    <span>Jatin Agrawal</span>
                    <span>03/28/23</span>
                    <span>1:56 PM</span>
                    <span>$56</span>
                </div>
            </div> */}

            <div className="row text-center">
                <div className="col mx-4">
                    <span className="row">Order Id</span>
                    <span className="row my-1">000001</span>
                </div>
                <div className="col mx-4">
                    <span className="row">Name of Customer</span>
                    <span className="row my-1">Jatin Agrawal</span>
                </div>
                <div className="col mx-4">
                    <span className="row">Date</span>
                    <span className="row my-1">03/28/23</span>
                </div>
                <div className="col mx-4">
                    <span className="row">Time</span>
                    <span className="row my-1">02:12 PM</span>
                </div>
                <div className="col mx-4">
                    <span className="row">Amount</span>
                    <span className="row my-1">$ 56.00</span>
                </div>
            </div>
        </div>
    );
}