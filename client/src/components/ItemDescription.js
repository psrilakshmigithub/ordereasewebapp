import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'

 export default function ItemDescription(props){  

    return(
        <>
            
        <Modal show={props.show} >
          <Modal.Header >
           { console.log(props)}
            <Modal.Title>{props.data.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body> 
            <img alt="item" src={props.data.image} className='img-fluid' style={{width:'200px',height:'200px;'}}></img>
        <p>{props.data.description}</p>
        </Modal.Body>
          <Modal.Footer>
            <button className='btn btn-secondary' onClick={props.close}>   Close</button>         
            <button className='btn btn-primary' onClick={props.close}> Save Changes</button>
           
          </Modal.Footer>
        </Modal>
      </>
    )

}
