export const registerUserReducer =(state={user:[]},action)=>{
    switch(action.type)
    {
        case 'USER_REGISTER_REQUEST' : return{
            loading:true
        }
        case 'USER_REGISTER_SUCCESS':return{
            state:action.payload,
            loading:false,
            success:true
        }
        case "USER_REGISTER_FAILED":return{
            loading:false,
            error:action.payload
        }
        default:return{
            state
        }

    }
}

export const loginUserReducer=(state={},action)=>{
switch (action.type){

    case "USER_LOGIN_REQUEST":return{
        loading:true
    }
    
    case "USER_LOGIN_SUCCESS":return{
        currentUser:action.payload,
        loading:false,
        success:true
    }
    
    case "USER_LOGIN_FAILED":return{
        loading:false,
        error:action.payload,
        success:false
    }
    default:return state

}


}


