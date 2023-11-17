import './App.css';
import NavBar from './Components/NavBar';
import Booking from './Pages/Booking';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Session from './Pages/Session';
import Fields from './Pages/fields';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route path='/fields' element={<Fields/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/booking' element={<Booking/>} />
          <Route path='/session' element={<Session/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
