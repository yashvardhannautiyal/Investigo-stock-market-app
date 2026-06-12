import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";


const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");   
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");  
    }
  }, [darkMode]);

  return (
    <button
      className="dark:text-white hover:cursor-pointer text-lg md:text-2xl"
      onClick={() => setDarkMode((prev) => !prev)}
    >
      {darkMode ? <MdLightMode /> : <MdDarkMode />}
    </button>
  );
};

export default ThemeToggle;