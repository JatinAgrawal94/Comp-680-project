import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import InvoiceScreen from './Screens/invoiceScreen.js'
import NavComponent from './Components/navComponent';
import LoginScreen from './Screens/loginScreen';
import OrderScreen from './Screens/orderScreen';
import HomeScreen from './Screens/homeScreen';
import AddInventoryScreen from './Screens/addInventoryScreen';
import InventoryViewScreen from './Screens/inventoryViewScreen';
import InventoryProfileScreen from './Screens/inventoryProfileScreen';
import UpdateInventoryScreen from './Screens/updateInventoryScreen';
// import dotenv from 'dotenv'

function App() {
  // dotenv.config();
  return (
    <Router>
      <div className="App">
      <NavComponent/>
        <Routes>
        <Route exact path="/" element={<HomeScreen/>}/>
          <Route exact path="/sales" element={<InvoiceScreen/>}/>
          <Route exact path="/login" element={<LoginScreen/>}/>
          <Route exact path="/orders" element={<OrderScreen/>}/>
          <Route exact path="/addinventory" element={<AddInventoryScreen/>}/>
          <Route exact path="/viewinventory" element={<InventoryViewScreen/>}/>
          <Route exact path="/viewinventory/:id" element={<InventoryProfileScreen/>}/>
          <Route exact path="/updateinventory/:id" element={<UpdateInventoryScreen/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
