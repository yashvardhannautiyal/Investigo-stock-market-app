import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const ThemeToggle = () => {
  const {theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <button className="text-2xl cursor-pointer" onClick={toggleTheme}>
        {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
      </button>
    </>
  );
};

export default ThemeToggle;