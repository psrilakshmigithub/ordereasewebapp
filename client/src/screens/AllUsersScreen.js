import react from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers,deleteUser } from '../actions/userAction'
import { useEffect } from 'react'


export default function AllUsersScreen() {
    const dispatch = useDispatch();
const allUserState=useSelector(state=>state.allUserReducer);
const {allUsers,loading,error,success}=allUserState
       useEffect(()=>{
        dispatch(getAllUsers());
      },[])
      const handleDelete = (userId) => {
        console.log("Delete "+userId);
        // Call the deleteOrderItem function with the item ID as the parameter
        dispatch(deleteUser(userId));
      };
    return (
        <>
         <div className='justify-content-center col-md-12'>
            <h2>All Users</h2>
      
            {loading ? (
              <h1>Loading...</h1>
            ) : error ? (
              <h1>Something went wrong...</h1>
            ) : (
              <table className='table '>
                <thead className='thead-dark'>
                  <tr>
                    <th>User Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                 {allUsers&& allUsers.map((user) => (
                    <tr >
                      <td>{user._id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td> <i className='fa fa-trash mt-1' onClick={() => handleDelete(user._id)}></i>
                   
                  </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </>
      )
} 