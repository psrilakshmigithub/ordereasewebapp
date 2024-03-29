import react from 'react'
import { Link, Routes, Route ,Outlet} from 'react-router-dom'



export default function AdminScreen() {

    return (
        <>

            <div className=" row justify-content-center "> 
                <div className="col-md-10">
                    <h1>Admin</h1>
                    
                    <ul className='adminActions'>
                        <li>
                           
                            <Link to="/admin/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/admin/orders">Orders</Link>
                        </li>
                        <li>
                            <Link to="/admin/menuitems">Menu Items</Link>
                        </li>
                        <li>
                            <Link to="/admin/additems">Add Items</Link>
                        </li>
                       
                    </ul>

                    <Outlet/>
                </div>


            </div>

        </>
    )

}
