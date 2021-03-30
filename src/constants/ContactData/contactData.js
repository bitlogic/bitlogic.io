import React from "react"
import "./contactData.css"

const CONTACT_ITEMS = [
  "José Roque Funes 1791",
  "Córdoba, Argentina",
  "+54 9 351 157 404 863",
]

const ContactData = () => {
  return (
    <ul className="Footer__ContactData">
      {CONTACT_ITEMS.map((data, i) => (
        <li className="Footer__ContactData__Item" key={i}>
          {data}
        </li>
      ))}
    </ul>
  )
}

export default ContactData
