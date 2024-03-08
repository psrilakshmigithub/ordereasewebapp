import axios from 'axios';

export const registerUser=(user)=>async dispatch=>{

    dispatch({type:'USER_REGISTER_REQUEST'})

    try{
      const response=await  axios.post('/api/user/register' ,user)
        dispatch({type:'USER_REGISTER_SUCCESS',payload:response.data})
    }catch(error){
        dispatch({type:'USER_REGISTER_FAILED',payload: error})
    }
}

export const loginUser=(user)=>async (dispatch,getstate)=>{

    dispatch({type:"USER_LOGIN_REQUEST",user})

    try{
      const response=await  axios.post("/api/user/login",user)
      dispatch({type:"USER_LOGIN_SUCCESS",payload:response.data})
        localStorage.setItem("currentUser",JSON.stringify(response.data));
        window.location.href='/'

    }
    catch(err){

        dispatch({type:"USER_LOGIN_FAILED",payload:err.message})

    }

}