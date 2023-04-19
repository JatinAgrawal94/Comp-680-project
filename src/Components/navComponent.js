import { Link } from "react-router-dom";

export default function NavComponent(){
    return (
        <nav className="navbar navbar-expand bg-body-tertiary w-100 border-bottom border-1 p-0 mb-4 d-flex justify-content-around text-decoration-none">
            <p className="navbar-brand  navbar-expand-lg fs-4 m-0">PMS</p>
                <Link to='/' className="text-decoration-none text-dark">Home</Link>
                <Link to='/sales' className="text-decoration-none text-dark">Sales</Link>
                <Link to='/orders' className="text-decoration-none text-dark">Orders</Link>
                <Link to='/addinventory' className="text-decoration-none text-dark">New</Link>
                <Link to='/viewinventory' className="text-decoration-none text-dark">View</Link>
                <Link to='/login' className="text-decoration-none text-dark">Login</Link>
        </nav>
    )
}