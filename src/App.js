
import './App.css';
import Home from './Home';
import Computer from './Computer';
import Mens from './Mens';
import Womens from './Womens';
import Contact from './Contact';
import {
  Routes,
  BrowserRouter,
  Route,
} from   "react-router-dom";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
        <Route path="" element={<Home />} />
        <Route path="/Computer" element={<Computer />} />
        <Route path="/Mens" element={<Mens/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Womens" element={<Womens/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
