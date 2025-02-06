import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Login from './Login';
import Signup from './Signup';
import Support from './Support';
import UserTable from './UserTable';
import New from './New';
import './index.css'; // Import your global styles

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });
  
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const [loggedInUser, setLoggedInUser] = useState(() => {
    const savedUser = localStorage.getItem('loggedInUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
  }, [loggedInUser]);

  const addUser = (user) => {
    setUsers(currentUsers => [...currentUsers, user]);
  };

  const onLogin = (user) => {
    setLoggedInUser(user);
  };

  const logOut = () => {
    setLoggedInUser(null);
    localStorage.removeItem('loggedInUser');
  };

  return (
    <Router>
      <MyNavbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} loggedInUser={loggedInUser} logOut={logOut} />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home toggleTheme={toggleTheme} isDarkMode={isDarkMode} />} />
          <Route path="/about" element={<About toggleTheme={toggleTheme} isDarkMode={isDarkMode} />} />
          <Route path="/services" element={<Services toggleTheme={toggleTheme} isDarkMode={isDarkMode} />} />
          <Route path="/login" element={<Login users={users} onLogin={onLogin} />} />
          <Route path="/signup" element={<Signup addUser={addUser} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />} />
          <Route path="/support" element={<Support toggleTheme={toggleTheme} isDarkMode={isDarkMode} />} />
          <Route path="/users" element={<UserTable users={users} />} /> {/* Route for UserTable */}
          <Route path="/new" element={<New/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;