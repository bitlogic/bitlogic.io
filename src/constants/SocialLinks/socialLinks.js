import React from "react"
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  // FaGithub,
} from "react-icons/fa"
import "./socialLinks.scss"

const RRSS_LINKS = [
  {
    id: 1,
    icon: <FaLinkedinIn className="social-icon"></FaLinkedinIn>,
    url: "https://www.linkedin.com/company/bitlogic.io/?originalSubdomain=ar",
  },
  {
    id: 2,
    icon: <FaFacebookF className="social-icon"></FaFacebookF>,
    url: "https://www.facebook.com/bitlogicos",
  },
  {
    id: 3,
    icon: <FaTwitter className="social-icon"></FaTwitter>,
    url: "https://twitter.com/bitlogicos",
  },
  {
    id: 4,
    icon: <FaInstagram className="social-icon"></FaInstagram>,
    url: "https://www.instagram.com/bitlogic.io/",
  },
  // {
  //   id: 5,
  //   icon: <FaGithub className="social-icon"></FaGithub>,
  //   url: "https://github.com/bitlogic",
  // },
]

const SocialLinks = ({ styleClass }) => {
  return (
    <ul className="RRSS__Social">
      {RRSS_LINKS.map(({ id, icon, url }) => (
        <li className="RRSS__Social__Item" key={id}>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className={`RRSS__Social__Link ${styleClass ? styleClass : ""}`}
          >
            {icon}
          </a>
        </li>
      ))}
    </ul>
  )
}
export default SocialLinks
