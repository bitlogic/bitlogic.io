import { Link } from "gatsby"
import React from "react"
import { useFooter, useLandingUrl } from "../../../hooks"
import FaIcon from "../../FaIcon/FaIcon"
import "./contactData.scss"

export default function ContactData() {
  const data = useFooter()
  const getUrl = useLandingUrl()
  const dataFooter = data?.allStrapiLayout?.nodes[0]?.footer
  const dataNav = data?.allStrapiLayout?.nodes[0].navbar?.navButton

  const contact = dataFooter?.contact?.iconText.map(item => {
    return (
      <p className="icon-text d-flex">
        <FaIcon type={item.icon.type} code={item.icon.code} />
        {item.name}
      </p>
    )
  })

  return (
    <>
      <div className="ContactData__Item">
        <h6>{dataFooter?.contact?.title}</h6>
        <p className="ContactData__Item__contact">{contact}</p>
        {dataNav && (
          <div className="ContactData__Item__link">
            {dataNav.landing_page ? (
              <Link to={getUrl(dataNav.landing_page.slug)}>
                {dataFooter?.internalLink?.name}
              </Link>
            ) : (dataNav.url && (
              <a href={dataNav.url}
                target={dataNav.url.startsWith('http') && '_blank'}
                rel={dataNav.url.startsWith('http') && 'noreferrer noopener'}
              >
                {dataFooter?.internalLink?.name}
              </a>
            ))}
          </div>
        )}

      </div>
    </>
  )
}