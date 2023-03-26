
export default function InvoiceScreen(props){
    return (
        <div className="container">
                <form>
            <div className="row">
                <div className="col">
                    <label className="form-label">Full Name</label>
                    <input className="form-control" type="text"/>
                    <label className="form-label">Email</label>
                    <input className="form-control" type="email"/>
                    <label className="form-label">Insurance information</label>
                    <input className="form-control" type="text"/>
                </div>
                <div className="col-10">
                    <div className="container">
                        <input placeholder="Search" className=""/>
                    </div>
                    <div className="d-flex justify-content-around">
                        <p>Item Name</p>
                        <p>Price</p>
                    </div>
                </div>
            </div>
                </form>
        </div>
    );
}