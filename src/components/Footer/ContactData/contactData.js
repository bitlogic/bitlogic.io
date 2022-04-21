import { Link } from "gatsby"
import React from "react"
import { useFooter } from "../../../hooks"
import FaIcon from "../../FaIcon/FaIcon"
import "./contactData.scss"

export default function ContactData() {
  const data = useFooter()
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

        <div className="ContactData__Item__link">
          <Link
            to={
              dataNav?.landing_page
                ? "/" + dataNav?.landing_page.slug
                : ""
            }
          >
            {dataFooter?.internalLink?.name}
          </Link>
        </div>
      </div>
    </>
  )
}