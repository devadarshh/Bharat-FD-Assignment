import { Bell, Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl">Admin Panel</h1>
      <div className="flex items-center gap-4">
        <Bell className="cursor-pointer" />
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun /> : <Moon />}
        </button>
        <img src="/profile.jpg" alt="Profile" className="w-8 h-8 rounded-full" />
      </div>
    </div>
  );
};

export default Navbar;
