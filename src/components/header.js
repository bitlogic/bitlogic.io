import * as React from "react"
import NavBar from "./NavBar/Navbar"

const Header = () => {
  if (typeof window === "undefined") return null
  return <NavBar />
}

export default Header
