import logo from './logo.svg';

import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/AddToCartScreen';
import RegisterScreen from './screens/Registerscreen';
import LoginScreen from './screens/LoginScreen';


import {BrowserRouter,Route,Routes,Link,Switch} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>     
      <Routes>
      <Route path="/" element={<HomeScreen />}  />   
      <Route path="/addtocart" element={<CartScreen />}  /> 
      <Route path="/register" element={<RegisterScreen/>}/>
      <Route path="/login" element={<LoginScreen/>}/>
     
        </Routes>  
            
      </BrowserRouter>
 
   
    </div>
  );
}

export default App;
