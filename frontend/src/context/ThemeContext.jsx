import { createContext, useContext, useState, useEffect } from "react";

//create theme context
export const ThemeContext = createContext();

//context provider
export const ThemeContextProvider = ({children}) =>{
   
    //default theme
    const [theme, setTheme] = useState("light");

    //apply theme to <html> tag
    useEffect(() =>{
        if(theme === "dark"){
            document.documentElement.classList.add("dark")
        }else{
            document.documentElement.classList.remove("dark")
        }
    }, [theme])


    //toggle theme func
    const toggleTheme = () =>{
       setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    }


    return(
        <>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
        </>
    )

}