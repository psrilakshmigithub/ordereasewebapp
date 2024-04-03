import react, { useState, useEffect } from 'react'
import { UseDispatch, useDispatch } from 'react-redux'
import { registerUser } from "../actions/userAction"
import { toast } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';


export default function RegisterScreen() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
    const [emailError, setEmailError] = useState('');
    const [nameError, setNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const registerState=useSelector(state=>state.registerUserReducer);
    const {loading,error,success}=registerState
    const dispatch = useDispatch();

 useEffect(() => {       
        if (error) {
            setEmailError(error.message);
        }
        if(success){
            toast.success("Registered Successfully !");
        }
        
    }, [error,success]
)
useEffect(() => {
   
    if (email || password) {
        setEmailError('');
    }
}, [email, password]);
    function register(e) {
        e.preventDefault();
        if (!email) {
            setEmailError('Email is required');
        } else {
            setEmailError('');
        }
        if (!name) {
            setNameError('Name is required');
        } else {
            setEmailError('');
        }
        if (!password) {
            setPasswordError('Password is required');
        } else if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters long');
        } else if (password != cpassword) {
            setPasswordError('Password and confirm password must match');
        } else {
            setPasswordError('');

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
        <div >
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5">
                    <h2 className="text-center m-2" style={{ fontSize: '35px' }}>Register</h2>
                    <form onSubmit={register}>
                        <div className='m-5 shadow-lg p-3 mb-5 bg-white rounded'>
                            <input required type="text" placeholder="name" className="form-control"
                                onChange={(e) => setname(e.target.value)} value={name} />
                            <input required type="text" placeholder="email" className="form-control"
                                onChange={(e) => setemail(e.target.value)} value={email} />                          
                            <input required
                                type="password"
                                placeholder="Password"
                                className="form-control"
                                onChange={(e) => setpassword(e.target.value)} value={password}
                            />
                            <input required
                                type="password"
                                placeholder="Confirm Password"
                                className="form-control"
                                onChange={(e) => { setcpassword(e.target.value) }} value={cpassword}
                            />
                           
                            <button type='submit' style={{ "backgroundColor": "rgb(182, 33, 33)", "color": "white", "fontSize": "20px" }} className="form-control btn mt-3">Register</button>
                            <p><a href="/login" class="link-underline-primary">Login</a></p>
                            {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
                             {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                            {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
                        </div>

                    </form>

                </div>

            </div>
        </div>
    )
}