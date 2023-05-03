import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
export default function LoginScreen(){
    const { loginWithRedirect } = useAuth0();
    return (
        // <div clasName="container">
            <form>
                <div className="mb-3">
                    <label className="form-label d-flex">Email</label>
                    <input type="email" className="form-control" placeholder="Email"/>
                </div>
                <div className="mb-3">
                    <label className="form-label d-flex">Password</label>
                    <input type="password" className="form-control" placeholder="Password"/>
                </div>
                <button type="submit" class="btn btn-primary" onClick={() => loginWithRedirect()}>Login</button>
            </form>
        // </div>
    );
}