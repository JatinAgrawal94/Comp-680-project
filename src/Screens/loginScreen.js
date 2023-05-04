import React, { useState } from "react";
export default function LoginScreen(){
    const [flag,updateFlag]=useState(0);
    const users=[
        {
            //doctor
            email:"jatin@gmail.com",
            password:"123",
            role:"doctor"
        },
        {
            email:"ghazi@gmail.com",
            password:"123",
            role:"employee"
        }
    ]
    const checkUser=(e)=>{
        // check the list and set in localstorage which role is this doctor or employee.
        e.preventDefault();
        let email=document.getElementById("email").value
        let password=document.getElementById("password").value;

        for(let i=0;i<users.length;i++){
            if(users[i].email===email && users[i].password===password){
                console.log("This is enough")
                localStorage.setItem('role',users[i].role);
                updateFlag(1);
                setTimeout(()=>{
                    updateFlag(0);
                },2000)
                return;
            }else{
                updateFlag(2);
                setTimeout(()=>{
                    updateFlag(0);
                },2000)
                
            }
        }
        
    }
    return (
            <form>
                <div className="mb-3">
                    <label className="form-label d-flex">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Email" required/>
                </div>
                <div className="mb-3">
                    <label className="form-label d-flex">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" required/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={checkUser}>Login</button>
                {
                    flag===1?<div className="alert alert-success w-25" role="alert">
                        Login SuccessFull</div>
                        :<div></div>
                }
                {
                    flag===2?<div className="alert alert-warning w-25" role="alert">
                    Login Failed</div>:<div></div>
                }
            </form>
    );
}