import react from 'react'
import {loginUser} from "../actions/userAction"
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { useEffect } from 'react'

export default function LoginScreen() {
const [email,setemail]=useState("")
const [password,setpassword]=useState("")
const dispatch=useDispatch();
useEffect(()=>{
if(localStorage.getItem("currentUser")){
    window.location.href='/'
}
},[])
function login(){
    const user={
        email,
        password
    }
    
dispatch(loginUser(user))
}

    return(
        <div>
        <h1>Login Screen</h1>
        <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5">
                    <h2 className="text-center m-2" style={{ fontSize: '35px' }}>Register</h2>
                    <div>                       
                        <input required type="text" placeholder="email" className="form-control" 
                           onChange={(e)=>setemail(e.target.value)}  value={email} />
                        <input required
                         type="text" 
                         placeholder="Password" 
                         className="form-control"
                         onChange={(e)=>setpassword(e.target.value)}  value={password}
                        />
                      
                        <button onClick={login} className="btn mt-3">Login</button>

                    </div>
                </div>

            </div>
        </div>
    )
}