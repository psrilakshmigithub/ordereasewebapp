import react from 'react';
import { useState } from 'react';
import { UseDispatch,useDispatch,useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDescription from '../components/ItemDescription';
import {addToCartAction} from '../actions/addToCartAction';

export default function Item({ ItemInfo }) {
    const [quantity,setQuantity]=useState(1);
    const [varient,setVarient]=useState("small");
    const [show, setShow] = useState(false);  
    const [data, setData] = useState(ItemInfo);
    const [instructions, setInstructions] = useState("");
    const dispatch=useDispatch();
    function addtocart(){
        dispatch(addToCartAction(ItemInfo,quantity,varient,instructions))

    }
    return (

       <>
        <div className='m-5 shadow-lg p-3 mb-5 bg-white rounded '>
        {ItemInfo.isSpecial && 
        <div className='container' style={{"textAlign":"left"}} >
        <span className="badge bg-danger w-40">Chef's Special</span>
        </div>
}
              <div className='container' >
              <h2>{ItemInfo.name}</h2>
            <img onClick={()=>{setShow(true);setData(ItemInfo)}} alt="item" src={ItemInfo.image} className='img-fluid' style={{width:'200px',height:'200px'}}></img>
        
              </div>
               <div className='flex-container ' >
                <div className='m-2 w-100'>
                    <label className='w-100 m-1'>Varient</label>
                    <select className='form-control' value={varient}   onChange={(e)=> setVarient(e.target.value)}>
                        {ItemInfo.varients.map((varient) => {
                            return <option value={varient}>{varient}</option>
                        })}
                    </select>
                </div>
                <div className='m-2 w-100 '>
                    <label className='w-100 m-1'>Quantity</label>
                    <select className='form-control'  value={quantity}  onChange={(e)=> setQuantity(e.target.value)}>
                        {[...Array(10).keys()].map((x,i)=>{
                             return <option value={i+1}>{i+1}</option>

                        })
                           
                        } 
                    </select>   
                </div>
                <div className='m-2 w-100'>
                <label className='w-100 m-1'>Price</label>
                <label className=' form-control w-100 m-1'>$ {ItemInfo.prices[0][varient]*quantity }</label>
                    {/* <label className='form-control w-100'>Price:  $ {ItemInfo.prices[0][varient]*quantity }</label>
                   */}
                </div>
            </div>
            <div className='flex-container mt-2'>
               <input onChange={(e)=>setInstructions(e.target.value)} type="text" className='form-control w-100 m-1' placeholder='Any preferences..'></input>               
            </div>
            <div className='flex-container mt-2'>              
                <div className='m-2 w-100'>
                    <button className='form-control '  style={{"backgroundColor":"rgb(182, 33, 33)", "color":"white","fontSize":"15px"}} onClick={addtocart}>Add to Cart</button>
                </div>
            </div>
        </div>
        <ItemDescription show={show} close={() => setShow(false)} data={data} />
       </>
       
        
    )

}