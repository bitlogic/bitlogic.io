import React from "react"
import { useFooter } from "../../../hooks"
import FaIcon from "../../FaIcon/FaIcon"
import "./contactData.scss"
import CustomLink from "../../CustomLink/CustomLink"

export default function ContactData() {
  const data = useFooter()
  const dataFooter = data?.allStrapiLayout?.nodes[0]?.footer
  const navButton = data?.allStrapiLayout?.nodes[0].navbar?.navButton

  const contact = dataFooter?.contact?.iconText.map(item => {
    return (
      <div className="icon-text d-flex" key={item.id}>
        <FaIcon type={item.icon.type} code={item.icon.code} />
        {item.name}
      </div>
    )
  })

  return (
    <>
      <div className="ContactData__Item">
        <h6>{dataFooter?.contact?.title}</h6>
        <div className="ContactData__Item__contact">{contact}</div>
        {navButton && dataFooter?.internalLink && (
          <div className="ContactData__Item__link">
            <CustomLink
              content={dataFooter?.internalLink?.name}
              url={navButton?.url}
              landing={navButton?.landing_page}
              className=''
            />
          </div>
        )}

      </div>
    </>
  )
}