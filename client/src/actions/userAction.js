import axios from 'axios';

export const registerUser=(user)=>async dispatch=>{

    dispatch({type:'USER_REGISTER_REQUEST'})

    try{
        axios.post('/api/users/register' ,{user})
        dispatch({type:'USER_REGISTER_SUCCESS'})
    }catch(error){
        dispatch({type:'USER_REGISTER_FAILED',payload: error})
    }
}