import { Moon, Sun } from "lucide-react";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      className="dark-mode-toggle"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

export default DarkModeToggle;