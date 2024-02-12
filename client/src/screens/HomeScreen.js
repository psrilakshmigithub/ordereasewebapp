import react from 'react';
import pizzadata from '../pizzadata';
import Item from '../components/Item';

export default function HomeScreen(){

    return (
        <>
        <div className='row'>

          {pizzadata.map((item)=>{
           return(
            <div className='col-md-4 p-3'>
              <div>
              <Item  ItemInfo={item}/>
              </div>
             
              </div>
           ) 
          })}
        </div>
        </>

    )
}