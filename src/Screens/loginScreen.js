
export default function LoginScreen(){
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
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
        // </div>
    );
}