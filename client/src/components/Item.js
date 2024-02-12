import react from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDescription from '../components/ItemDescription';

export default function Item({ ItemInfo }) {
    const [quantity,setQuantity]=useState(1);
    const [varient,setVarient]=useState("small");
    const [show, setShow] = useState(false);  
    const [data, setData] = useState(ItemInfo);
    return (

       <>
        <div className='m-5 shadow-lg p-3 mb-5 bg-white rounded '>
              <div className='container' >
              <h1>{ItemInfo.name}</h1>
            <img onClick={()=>{setShow(true);setData(ItemInfo)}} alt="item" src={ItemInfo.image} className='img-fluid' style={{width:'200px',height:'200px;'}}></img>
        
              </div>
               <div className='flex-container'>
                <div className='w-100'>
                    <label className='w-100 m-1'>varients</label>
                    <select value={varient}   onChange={(e)=> setVarient(e.target.value)}>
                        {ItemInfo.varients.map((varient) => {
                            return <option value={varient}>{varient}</option>
                        })}
                    </select>
                </div>
                <div className='w-100 '>
                    <label className='w-100 m-1'>Quanities</label>
                    <select value={quantity}  onChange={(e)=> setQuantity(e.target.value)}>
                        {[...Array(10).keys()].map((x,i)=>{
                             return <option value={i+1}>{i+1}</option>

                        })
                           
                        }
                    </select>
                </div>
            </div>
            <div className='flex-container'>
                <div className='m-1 w-100'>
                    <label className='w-100'>Price:  $ {ItemInfo.prices[0][varient]*quantity }</label>
                  
                </div>
                <div className='m-1 w-100'>
                    <button className='btn btn-primary'>Add to Cart</button>
                </div>
            </div>
        </div>
        <ItemDescription show={show} close={() => setShow(false)} data={data} />
       </>
       
        
    )

}