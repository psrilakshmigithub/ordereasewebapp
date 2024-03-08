import react, { useState, useEffect } from 'react'

export default function Registersscreen() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')

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
        }
    }


    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5">
                    <h2 className="text-center m-2" style={{ fontSize: '35px' }}>Register</h2>
                    <div>
                        <input required type="text" placeholder="name" className="form-control"  value={(e)=>{setname(e.target.value)}} />
                        <input required type="text" placeholder="email" className="form-control"   value={(e)=>{setemail(e.target.value)}} />
                        <input required
                         type="text" 
                         placeholder="Password" 
                         className="form-control"
                         value={(e)=>{setpassword(e.target.value)}}
                        />
                        <input required 
                        type="text" 
                        placeholder="Confirm Password" 
                        className="form-control" 
                        value={(e)=>{setcpassword(e.target.value)}}
                        />
                        <button onClick={register} className="btn mt-3">Register</button>

                    </div>
                </div>

            </div>
        </div>
    )
}