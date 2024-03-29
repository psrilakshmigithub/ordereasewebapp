import logo from './logo.svg';

import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/AddToCartScreen';
import RegisterScreen from './screens/Registerscreen';
import LoginScreen from './screens/LoginScreen';
import MyOrdersScreen from './screens/MyOrdersScreen';
import AdminScreen from './screens/AdminScreen';
import AllUsersScreen from './screens/AllUsersScreen';
import AllOrdersScreen from './screens/AllOrdersScreen';
import AllItemsScreen from './screens/AllItemsScreen';
import AddItemScreen from './screens/AddItemScreen';
import EditItemScreen from './screens/EditItemScreen';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Route, Routes, Link, Switch } from 'react-router-dom';



function App() {
  const toastOptions = {
    autoClose: 10000, 
    position: 'top-center',// Auto-close duration in milliseconds (e.g., 5000 for 5 seconds)
    // Other default options...
  };
  return (
    <div className="App">
      <Navbar />
      <ToastContainer {...toastOptions} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/addtocart" element={<CartScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/myorders" element={<MyOrdersScreen />} />
          <Route path="/admin" element={<AdminScreen />} >
          <Route path="users" element={<AllUsersScreen />} />
            <Route path="orders" element={<AllOrdersScreen />} />
            <Route path="menuitems" element={<AllItemsScreen />} />
            <Route path="additems" element={<AddItemScreen />} />
            <Route path="edititems/:itemid" element={<EditItemScreen />} />
            
       
          </Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
