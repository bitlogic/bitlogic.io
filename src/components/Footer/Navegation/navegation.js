import React from "react"
import { useFooter, useLandingUrl } from "../../../hooks"
import { Link } from "gatsby"
import "./navegation.scss"

export default function Navegation() {
  const data = useFooter()
  const getUrl = useLandingUrl()
  const dataFooter = data?.allStrapiLayout?.nodes[0].footer
  const dataNav = data?.allStrapiLayout?.nodes[0].navbar

  const navegationItems = dataNav.navbarItem.map((navItem, index) => {
    const path = navItem?.singleType ? `/${navItem.singleType}` :
      navItem?.landing ? getUrl(navItem.landing?.slug) :
        `${navItem?.url ? navItem.url : ''}`

    if (path.startsWith('http')) return (
      <li className="mb-2" key={`${navItem.label}-${index}`}>
        <a href={path}
          target="_blank"
          rel="noreferrer noopener"
        >
          {navItem.label}
        </a>
      </li>
    )

    return (
      <li className="mb-2" key={`${navItem.label}-${index}`}>
        <Link to={path}>
          {navItem.label}
        </Link>
      </li>
    )
  })

  return (
    <div className="ContactData__Item ps-md-3">
      <h6>{dataFooter.navegation?.title}</h6>
      <ul className="Navegation__Item">
        {navegationItems}
      </ul>
    </div>
  )
}
