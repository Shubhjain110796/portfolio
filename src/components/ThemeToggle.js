import React from "react";
import "./ThemeToggle.css";

function ThemeToggle({ theme, setTheme }) {
  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("blue");
    else setTheme("light");
  };

  return (
    <button className="theme-btn" onClick={toggleTheme}>
      {theme === "light" ? "🌙 Dark" : theme === "dark" ? "🔵 Blue" : "☀️ Light"}
    </button>
  );
}

export default ThemeToggle;
