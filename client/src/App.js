import logo from './logo.svg';

import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1> Order Ease </h1>
    <HomeScreen/>
    </div>
  );
}

export default App;
