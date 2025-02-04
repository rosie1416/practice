import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Login from './Login';
import Signup from './Signup';
import Support from './Support';
const App = () => {
  return (
    <Router>
      <MyNavbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/support" element={<Support />} />




        </Routes>
      </div>
    </Router>
  );
};

export default App;