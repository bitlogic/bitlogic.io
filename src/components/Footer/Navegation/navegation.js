import React from "react"
import { useFooter } from "../../../hooks"
import { Link } from "gatsby"
import "./navegation.scss"

export default function Navegation() {
  const data = useFooter()
  const dataFooter = data?.allStrapiLayout?.nodes[0].footer
  const dataNav = data?.allStrapiLayout?.nodes[0].navbar
  console.log(dataNav)

  return (
    <div className="ContactData__Item ps-md-3">
      <h6>{dataFooter.navegation?.title}</h6>
      <ul className="Navegation__Item">
        {dataNav.navbarItem.map(navItem => (
          <li className="mb-2">
            <Link to={"/" + (navItem.landing?.slug || navItem.singleType)}>{navItem.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
