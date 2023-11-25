import './App.css';
import Booking from './Pages/Booking';
import Login from './Pages/Login';
import Session from './Pages/Session';
import Fields from './Pages/fields';
import Home from './Pages/Home Page/Home';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const url = `${process.env.BACKEND_URL}/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      setUser(data.user._json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="container">
      <Router>
         <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={user ? <Navigate to="/fields" /> : <Navigate to="/login" />}
          />
          <Route
            exact
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={user ? <Navigate to="/" /> : <Signup />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
