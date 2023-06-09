import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import InvoiceScreen from './Screens/invoiceScreen.js'
import NavComponent from './Components/navComponent';
import OrderScreen from './Screens/orderScreen';
import HomeScreen from './Screens/homeScreen';
import LoginScreen from './Screens/loginScreen';
import AddInventoryScreen from './Screens/addInventoryScreen';
import InventoryViewScreen from './Screens/inventoryViewScreen';
import InventoryProfileScreen from './Screens/inventoryProfileScreen';
import UpdateInventoryScreen from './Screens/updateInventoryScreen';
import CreateOrderScreen from './Screens/createOrderScreen';
import OrderInfoScreen from './Screens/orderInfoScreen';
import AllSalesScreen from './Screens/allSalesScreen';

function App() {

  return (
    <Router>
      <div className="App">
      <NavComponent/>
        <Routes>
        <Route exact path="/" element={<HomeScreen/>}/>
          <Route exact path="/orders" element={<OrderScreen/>}/>
          <Route exact path="/login" element={<LoginScreen/>}/>
          {/* employee */}
          
          <Route exact path="/sales" element={<InvoiceScreen/>}/>
          <Route exact path="/sales/all" element={<AllSalesScreen/>}/>
          <Route exact path="/orders/:id" element={<OrderInfoScreen/>}/>
          <Route exact path="/addinventory" element={<AddInventoryScreen/>}/>
          <Route exact path="/viewinventory" element={<InventoryViewScreen/>}/>
          <Route exact path="/viewinventory/:id" element={<InventoryProfileScreen/>}/>
          <Route exact path="/updateinventory/:id" element={<UpdateInventoryScreen/>}/>
          {/* doctor */}
          <Route exact path="/orders/create" element={<CreateOrderScreen/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
