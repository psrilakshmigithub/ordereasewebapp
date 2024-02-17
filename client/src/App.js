import logo from './logo.svg';

import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import Registersscreen from './screens/Registerscreen';
import LoginScreen from './screens/Loginscreen';
import { Router } from 'express';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1> Order Ease </h1>

      <browserRouter>
      
      <Route path="/register" exact component={Registersscreen}/>
      <Route path="/loginscreen" exact component={LoginScreen}/>

      </browserRouter>
 
    <HomeScreen/>
    </div>
  );
}

export default App;
