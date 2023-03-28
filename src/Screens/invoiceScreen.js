
export default function InvoiceScreen(props){
    return (
        <div className="container h-100">
            <form>
            <div className="row">
                <div className="col h-100 border-end">
                    <label className="form-label">Full Name</label>
                    <input className="form-control" type="text"/>
                    <label className="form-label">Email</label>
                    <input className="form-control" type="email"/>
                    <label className="form-label">Insurance information</label>
                    <input className="form-control" type="text"/>
                </div>
                {/* <span className="h-100 border-end"></span> */}
                <div className="col-10">
                    <div className="container">
                        <input placeholder="Search" className=""/>
                    </div>
                    <div className="d-flex justify-content-around border-bottom mb-4">
                        <p>Item Name</p>
                        <p>Price</p>
                    </div>
                    <div className="d-flex justify-content-around">
                        <p>Combiflam 10MG</p>
                        <p>$2.3</p>
                    </div>
                    <div className="text-right">
                        <button className="btn btn-success right">Checkout</button>
                    </div>
                </div>
            </div>
            </form>
        </div>
    );
}