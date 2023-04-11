import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import InvoiceScreen from './Screens/invoiceScreen.js'
import NavComponent from './Components/navComponent';
import LoginScreen from './Screens/loginScreen';
import OrderScreen from './Screens/orderScreen';
import HomeScreen from './Screens/homeScreen';


function App() {
  return (
    <Router>
      <div className="App">
      <NavComponent/>
        <Routes>
        <Route exact path="/home" element={<HomeScreen/>}/>
          <Route exact path="/sales" element={<InvoiceScreen/>}/>
          <Route exact path="/login" element={<LoginScreen/>}/>
          <Route exact path="/orders" element={<OrderScreen/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
