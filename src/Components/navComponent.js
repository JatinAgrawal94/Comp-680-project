import { Link } from "react-router-dom";

export default function NavComponent(){
    const role=localStorage.getItem('role');
    const logout=()=>{
        localStorage.removeItem('role');
    }
    return (
        <nav className="navbar navbar-expand bg-body-tertiary w-100 border-bottom border-1 p-0 mb-4 d-flex justify-content-around text-decoration-none">
            <p className="navbar-brand  navbar-expand-lg fs-4 m-0">PMS</p>
                {
                role==='employee'?
                <div className="d-flex justify-content-around w-50">
                <Link to='/sales' className="text-decoration-none text-dark">Sales</Link>
                <Link to='/sales/all' className="text-decoration-none text-dark">View Sales</Link>
                <Link to='/addinventory' className="text-decoration-none text-dark">New Inventory</Link>
                <Link to='/viewinventory' className="text-decoration-none text-dark">View Inventory</Link>
                <Link to='/orders' className="text-decoration-none text-dark">Orders</Link>
                </div>:<span></span>
                }
                {
                role==='doctor'?
                <div className="d-flex justify-content-around w-50">
                <Link to='/orders/create' className="text-decoration-none text-dark">CreateOrder</Link>
                <Link to='/orders' className="text-decoration-none text-dark">Orders</Link>
                </div>
                : <span></span>
                }
                {
                    role==='employee' || role==='doctor'?
                    <button to="/login" className="btn btn-primary" onClick={logout}>Logout</button>
                    :<Link to="/login" className="text-decoration-none text-dark">Login</Link>
                }
        </nav>
    )
}