import react from 'react';
import { useEffect, useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useParams, useRouteMatch } from 'react-router-dom';

import {getOrderItemsById,editOrderItem} from '../actions/orderItemsAction';

import { toast } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css';


export default function EditItemScreen(){
    const dispatch=useDispatch();   
    const { itemid } = useParams();
       console.log("itemid"+itemid);
    const[name,setname]=useState("");
        const[sprice,setsprice]=useState("");
        const[mprice,setmprice]=useState("");
        const[lprice,setlprice]=useState("");
        const[category,setcategory]=useState("");
        const[description,setdescription]=useState("");
        const[image,setimage]=useState("");
        const[isSpecial,setSpecial]=useState("");
        
        const itemsState=useSelector(state=>state.getOrderItemsByIdReducer);
        const {item,loading,error,success}=itemsState;
        const updateItemState=useSelector(state=>state.editOrderItemsReducer);
        const {updateloading,updatesuccess,updateerror}=updateItemState;

        useEffect(() => {
            console.log("success :" + updateerror)
            if (updatesuccess) {
    
                toast.success("Item updated successfully !");
                setname("")
                setcategory("")
                setdescription("")
                setimage("")
                setSpecial(false)
                setsprice("")
                setmprice("")
                setlprice("")
    
    
            } else if (updateerror) {
                toast.error("Something went wrong !"); // Use toast.error directly
            }
    
        }, [updatesuccess, updateerror])
        
    useEffect(()=>{
       
        console.log("use effect item"+item);
        if(item){
           
            if(item._id===itemid){
                setname(item.name)
                setcategory(item.category)
                setdescription(item.description)
                setimage(item.image)
                setSpecial(item.isSpecial)
                setsprice(item.prices[0]['small'])
                setmprice(item.prices[0]['medium'])
                setlprice(item.prices[0]['large'])
            }
          
        else{
            dispatch(getOrderItemsById(itemid))
        }

        }
        else{
            console.log("else caluse use effect item"+item);
            dispatch(getOrderItemsById(itemid))
        }
       


    },[item,dispatch])
    
    
  
    function formHandler(e){
        e.preventDefault();
        const editItem={
            name,
            _id:itemid,
            prices:{
                small:sprice,
                medium:mprice,
                large:lprice
            },
            category,
            description,
            image,
            isSpecial
        };

        dispatch(editOrderItem(editItem));


    }
   
return(
<>
<div className='row justify-content-center'>
   
    <h1>Edit Pizza</h1>
  
<div className=' col-md-8'>
    <form onSubmit={formHandler} className='justify-content-center' > 
        <input className='form-control' type="text" placeholder='Name' value={name} onChange={(e)=>{setname(e.target.value)}}></input>
        <input className='form-control' type="text" placeholder='Small Price' value={sprice} onChange={(e)=>{setsprice(e.target.value)}}></input>
        <input className='form-control' type="text" placeholder='Medium Price' value={mprice} onChange={(e)=>{setmprice(e.target.value)}}></input>
        <input className='form-control' type="text" placeholder='Large Price' value={lprice} onChange={(e)=>{setlprice(e.target.value)}}></input>
        <input className='form-control' type="text" placeholder='Category' value={category} onChange={(e)=>{setcategory(e.target.value)}}></input>
        <input className='form-control' type="text" placeholder='Description' value={description} onChange={(e)=>{setdescription(e.target.value)}}></input>
        <input className='form-control' type="text" placeholder='Image url' value={image} onChange={(e)=>{setimage(e.target.value)}}></input>
       
        <div className='m-1 p-1' style={{ "textAlign": "left" }}>
                            <input type="checkbox"
                                checked={isSpecial}
                                onChange={(e) => { setSpecial(e.target.checked) }}
                            />
                            <label className='m-1'>Chef Special</label>
                        </div>
        <button className=' form-control btn mt-3' style={{"backgroundColor":"rgb(182, 33, 33)", "color":"white","fontSize":"20px"}} type='submit'>Update Item</button>
    </form>
    
    </div>

</div>

</>


)} 