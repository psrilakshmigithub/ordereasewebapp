import react, { useState, useEffect } from 'react'
import { UseDispatch, useDispatch } from 'react-redux'
import {registerUser} from "../actions/userAction"

export default function RegisterScreen() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
    const dispatch=useDispatch();
    function register(){
        if(password!=cpassword){
            alert("password not matched")
        }
        else{
            const user = {
                name,
                email,
                password
            }
            console.log(user);
            dispatch(registerUser(user));
        }
    }


    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5">
                    <h2 className="text-center m-2" style={{ fontSize: '35px' }}>Register</h2>
                    <div>
                        <input required type="text" placeholder="name" className="form-control"
                         onChange={(e)=>setname(e.target.value)}  value={name} />
                        <input required type="text" placeholder="email" className="form-control" 
                           onChange={(e)=>setemail(e.target.value)}  value={email} />
                        <input required
                         type="text" 
                         placeholder="Password" 
                         className="form-control"
                         onChange={(e)=>setpassword(e.target.value)}  value={password}
                        />
                        <input required 
                        type="text" 
                        placeholder="Confirm Password" 
                        className="form-control" 
                        onChange={(e)=>{setcpassword(e.target.value)}} value={cpassword}
                        />
                        <button onClick={register} className="btn mt-3">Register</button>

                    </div>
                </div>

            </div>
        </div>
    )
}