import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ecommerce App</h1>
      </header>
      <Router>
        <nav>
          <ul>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/signin">Sign In</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
          {/* <Route path="/" exact>
            <p>Welcome to the Ecommerce App</p>
          </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;