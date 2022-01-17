import React, { createContext, useEffect, useState, useContext } from 'react'
import PropTypes from 'prop-types'

const themes = {
  light: {
    "--nav-footer-container": "#2a2c2e",
    "--blog-card-container": "#f5f5f5",
    "--primary": "#000000",
    "--primary-hover": "#000000",
    "--primary-container": "#ffffff",
    "--title-jobs": "#5682c6",
    "--jobs-hover": "#f0f0f0",

    "--secondary-container": "#25cad3",
    "--border-bottom": "#cdcdcd",
  },
  dark: {
    "--nav-footer-container": "#383838",
    "--blog-card-container": "#383838",

    "--primary": "#ffffff",
    "--primary-hover": "#000000",
    "--primary-container": "#292929",
    "--border-bottom": "#565656",
    "--title-jobs": "#1ecad3",
    "--jobs-hover": "#8383833b",

    "--secondary-container": "#191919",
  },
}

const ThemeContext = createContext(null)

// const { theme, setTheme, toggleTheme } = useTheme()
export const useTheme = () => useContext(ThemeContext)

const ThemeProvider = ({ children }) => {
  // default theme: light
  const DEFAULT_THEME = 'light'
  const [theme, setTheme] = useState(DEFAULT_THEME)

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    const deviseTheme = getDeviseTheme()
    // local storage > devise theme
    setTheme(localTheme || deviseTheme || DEFAULT_THEME)
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <div style={themes[theme]}>{children}</div>
    </ThemeContext.Provider>
  )
}

const getDeviseTheme = () => {
  if (window.matchMedia) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    } else {
      return 'light'
    }
  } else {
    // cambiar si cambia el tema por defecto
    return 'light'
  }
}

ThemeProvider.propTypes = {
  children: PropTypes.object
}

export default ThemeProvider
