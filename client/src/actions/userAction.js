import axios from 'axios';

export const registerUser=(user)=>async dispatch=>{

    dispatch({type:'USER_REGISTER_REQUEST'})

    try{
      const response=await  axios.post('/api/user/register' ,user)
        dispatch({type:'USER_REGISTER_SUCCESS',payload:response.data})
        window.location.href='/login'
    }catch(error){
        dispatch({type:'USER_REGISTER_FAILED',payload: error})
    }
}

export const loginUser=(user)=>async (dispatch,getstate)=>{

    dispatch({type:"USER_LOGIN_REQUEST",user})

    try{
      const response=await  axios.post("/api/user/login",user)
      console.log("user response:"+user);
      dispatch({type:"USER_LOGIN_SUCCESS",payload:response.data})
        localStorage.setItem("currentUser",JSON.stringify(response.data));
        
        window.location.href='/'


    }
    catch(err){

        dispatch({type:"USER_LOGIN_FAILED",payload:err.message})

    }

}

export const logoutUser=()=>async (dispatch)=>{

   
    try{
     
      dispatch({type:"USER_LOGOUT_SUCCESS"})
        localStorage.removeItem("currentUser");
        localStorage.removeItem("cartItems");
        window.location.href='/login'

    }
    catch(err){

        dispatch({type:"USER_LOGOUT_FAILED",payload:err.message})

    }

}