import react from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postNewOrderItem } from '../actions/orderItemsAction'
import Error from '../screens/Error'
import Loading from '../screens/Loading';
import Success from '../screens/Success';
import { toast } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css';


export default function AddItemScreen() {
    const newItemState = useSelector(state => state.postNewOrderItemsReducer);
    const { loading, success, error } = newItemState;
    const dispatch = useDispatch();
    const [name, setname] = useState("");
    const [sprice, setsprice] = useState("");
    const [mprice, setmprice] = useState("");
    const [lprice, setlprice] = useState("");
    const [category, setcategory] = useState("");
    const [description, setdescription] = useState("");
    const [image, setimage] = useState("");
    const [isSpecial, setSpecial] = useState(false);
    const [formError, setFormError] = useState('');


    useEffect(() => {
        if (success) {
            toast.success("Item Added Successfully !");
            clearForm();
        } else if (error) {
            toast.error("Something went wrong !");
        }
    }, [success, error])


    const clearForm = () => {
        setname("");
        setsprice("");
        setmprice("");
        setlprice("");
        setcategory("");
        setdescription("");
        setimage("");
        setSpecial(false);
    }

    function formHandler(e) {
        e.preventDefault();
        if (!name || !sprice || !mprice || !lprice || !category || !description || !image) {
            setFormError('All fields are required');
        } else {
            setFormError('');
        const newItem = {
            name,
            prices: {
                small: sprice,
                medium: mprice,
                large: lprice
            },
            category,
            description,
            image,
            isSpecial
        };

        dispatch(postNewOrderItem(newItem));
    }


    }

    return (
        <>
            <div className='row justify-content-center '>
                <h2>Add Pizza</h2>
                {formError && <p style={{ color: 'red' }}>{formError}</p>}
                <div className='col-md-8'>
                    <form onSubmit={formHandler} className='justify-content-center' >
                        <input className='form-control' type="text" placeholder='Name' value={name} onChange={(e) => { setname(e.target.value) }}></input>
                        <input className='form-control' type="number" placeholder='Small Price' value={sprice} onChange={(e) => { setsprice(e.target.value) }}></input>
                        <input className='form-control' type="number" placeholder='Medium Price' value={mprice} onChange={(e) => { setmprice(e.target.value) }}></input>
                        <input className='form-control' type="number" placeholder='Large Price' value={lprice} onChange={(e) => { setlprice(e.target.value) }}></input>
                        <input className='form-control' type="text" placeholder='Category' value={category} onChange={(e) => { setcategory(e.target.value) }}></input>
                        <input className='form-control' type="text" placeholder='Description' value={description} onChange={(e) => { setdescription(e.target.value) }}></input>
                        <input className='form-control' type="text" placeholder='Image url' value={image} onChange={(e) => { setimage(e.target.value) }}></input>
                        <div className='m-1 p-1' style={{ "textAlign": "left" }}>
                            <input type="checkbox"
                                checked={isSpecial}
                                onChange={(e) => { setSpecial(e.target.checked) }}
                            />
                            <label className='m-1'>Chef Special</label>
                        </div>

                      

                        <button className='form-control btn mt-3' style={{ "backgroundColor": "rgb(182, 33, 33)", "color": "white", "fontSize": "20px" }} type='submit'>Add Item</button>
                    </form>

                </div>

            </div>

        </>


    )
} 