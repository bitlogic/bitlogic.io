import React, { createContext, useEffect, useState, useContext, useMemo } from "react"
import PropTypes from "prop-types"
import "./themeContext.scss"

const ThemeContext = createContext(null)

export const useTheme = () => useContext(ThemeContext)

const ThemeProvider = ({ children }) => {
  const DEFAULT_THEME = "light"
  const localTheme =
    typeof window !== "undefined" ? localStorage.getItem("theme") : undefined
  const deviseTheme = getDeviseTheme()
  const [theme, setTheme] = useState(localTheme || deviseTheme || DEFAULT_THEME)

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme)
      document.getElementById("style-context").className = theme
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"))
  }
  const obj = useMemo(() =>({theme, setTheme, toggleTheme }),[theme])
  
  return (
    <ThemeContext.Provider value={obj}>
      <div key={theme} id="style-context" className={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

const getDeviseTheme = () => {
  if (typeof window !== "undefined") {
    if (window.matchMedia) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark"
      } else {
        return "light"
      }
    } else {
      // cambiar si cambia el tema por defecto
      return "light"
    }
  } else {
    return undefined
  }
}
ThemeProvider.propTypes = {
  children: PropTypes.node,
}

export default ThemeProvider
