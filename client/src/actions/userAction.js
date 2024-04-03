import axios from 'axios';
import { toast } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css';

export const registerUser=(user)=>async dispatch=>{

    dispatch({type:'USER_REGISTER_REQUEST'})

    try{
      const response=await  axios.post('/api/user/register' ,user)
      console.log("residter response"+JSON.stringify(response))
      
        dispatch({type:'USER_REGISTER_SUCCESS',payload:response.data})
        window.location.href='/login'
      
      
    }catch(error){   
      if(error.status=402)
      {
        error.message="User already exists";
        dispatch({type:'USER_REGISTER_FAILED',payload:error })

      }
        else{
          dispatch({type:'USER_REGISTER_FAILED',payload: error})

      }
    }
}

export const loginUser=(user)=>async (dispatch,getstate)=>{

    dispatch({type:"USER_LOGIN_REQUEST",user})

    try{
      const response=await  axios.post("/api/user/login",user)
      console.log("user response:"+user);
      dispatch({type:"USER_LOGIN_SUCCESS",payload:response.data})
        localStorage.setItem("currentUser",JSON.stringify(response.data));
        if(response.data.isAdmin){
            window.location.href='/admin/users'
        }else{
            window.location.href='/'
        }
      }
    catch(err){

        dispatch({type:"USER_LOGIN_FAILED",payload:err.message})

    }

}

export const getAllUsers=()=>async (dispatch)=>{
    console.log("user ALL_USERS_REQUEST:");
    dispatch({type:"ALL_USERS_REQUEST"})

    try{
        console.log("ALL_USERS_REQUEST end");
      const response=await  axios.get("/api/user/allusers")
      console.log("user response:"+response);
      dispatch({type:"ALL_USERS_SUCCESS",payload:response.data})
      console.log("user response data:"+response.data);
    }
    catch(err){

        dispatch({type:"ALL_USERS_FAILED",payload:err.message})

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

export const deleteUser = (userId) =>async dispatch => {


    try {
      console.log("DELETE_USER_REQUEST:"+ JSON.stringify(userId));
      const response =await axios.post('/api/user/deleteUser',{userId:userId});
      console.log("action response:"+ JSON.stringify(response));
      dispatch({type:"DELETE_USER", payload:userId});
      toast.success("user deleted Successfully !");
     
      
    }catch(error) {
      console.log("Error"+error)
    }
  
  }