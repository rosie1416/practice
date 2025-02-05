// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Login from './Login';
import Signup from './Signup';
import Support from './Support';
import './index.css'; // Import your global styles

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <Router>
      <MyNavbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home toggleTheme={toggleTheme} isDarkMode={isDarkMode} />} />
          <Route path="/about" element={<About toggleTheme={toggleTheme} isDarkMode={isDarkMode} />} />
          <Route path="/services" element={<Services toggleTheme={toggleTheme} isDarkMode={isDarkMode} />} />
          <Route path="/login" element={<Login toggleTheme={toggleTheme} isDarkMode={isDarkMode} />} />
          <Route path="/signup" element={<Signup toggleTheme={toggleTheme} isDarkMode={isDarkMode} />} />
          <Route path="/support" element={<Support toggleTheme={toggleTheme} isDarkMode={isDarkMode} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;