// ThemeToggle.js
import React, { useState, useEffect } from 'react';
import './index.css'; // Import CSS for styling

function ThemeToggle() {
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
    <div className="theme-toggle">
      <label>
        <span role="img" aria-label="Light Mode">☀️</span>
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleTheme}
          aria-checked={isDarkMode}
          aria-label="Toggle theme"
        />
        <span role="img" aria-label="Dark Mode">🌙</span>
      </label>
    </div>
  );
}

export default ThemeToggle;