import react from 'react'
import { loginUser } from "../actions/userAction"
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { UseSelector } from 'react-redux'

export default function LoginScreen() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const loginState=useSelector(state=>state.loginUserReducer)
    const {loading,success,error}=loginState
    const dispatch = useDispatch();
    useEffect(() => {

        if (localStorage.getItem("currentUser")) {
            window.location.href = '/'
        }
        if (error) {
            setEmailError('Enter valid email and password');
        }
        
    }, [error]
)
useEffect(() => {
    // Clear error message when email or password changes
    if (email || password) {
        setEmailError('');
    }
}, [email, password]);
    function login(e) {
        e.preventDefault();
        let emailErrorText = '';
        let passwordErrorText = '';

        if (!email) {
            emailErrorText = 'Email is required';
        }

        if (!password) {
            passwordErrorText = 'Password is required';
        } else if (password.length < 6) {
            passwordErrorText = 'Password must be at least 6 characters long';
        }

        setEmailError(emailErrorText);
        setPasswordError(passwordErrorText);

        if (!emailErrorText && !passwordErrorText) {
            const user = {
                email,
                password
            };
            dispatch(loginUser(user));
        }

    }

    return (
        <div>
          
             <form onSubmit={login}>
           
            <div className="row justify-content-center mt-5">
               
                <div className="col-md-5 mt-5">
                    <h2 className="text-center m-2" style={{ fontSize: '35px' }}>Login</h2>
                    <div className='m-5 shadow-lg p-3 mb-5 bg-white rounded'>
                        <input required type="text" placeholder="email" className="form-control"
                            onChange={(e) => setemail(e.target.value)} value={email} />
                        <input required
                            type="password"
                            placeholder="Password"
                            className="form-control"
                            onChange={(e) => setpassword(e.target.value)} value={password}
                        />

                        <button type='submit' style={{ "backgroundColor": "rgb(182, 33, 33)", "color": "white", "fontSize": "20px" }} className=" form-control btn mt-3">Login</button>
                        <p><a href="/register" className="link-underline-primary">Register</a></p>
                        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                            {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
                    </div>
                </div>
               
               

            </div>
            </form>
        </div>
    )
}