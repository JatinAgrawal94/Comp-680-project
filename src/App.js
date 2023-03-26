import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import InvoiceScreen from './Screens/invoiceScreen.js'
import NavComponent from './Components/navComponent';

function App() {
  return (
    <Router>
      <div className="App">
      <NavComponent/>
        <Routes>
          <Route exact path="/" element={<InvoiceScreen/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
