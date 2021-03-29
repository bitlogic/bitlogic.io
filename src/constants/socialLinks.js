import React from "react"
import {
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa"
import { Link } from "gatsby"

const RRSS_LINKS = [
  {
    id: 1,
    icon: <FaFacebookF className="social-icon"></FaFacebookF>,
    url: "https://www.facebook.com/bitlogicos",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/company/bitlogic.io/?originalSubdomain=ar",
  },
  {
    id: 3,
    icon: <FaInstagram className="social-icon"></FaInstagram>,
    url: "https://www.instagram.com/bitlogic.io/",
  },
  {
    id: 4,
    icon: <FaTwitter className="social-icon"></FaTwitter>,
    url: "https://twitter.com/bitlogicos",
  },
  {
    id: 5,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/bitlogic",
  },
]

const SocialLinks = ({ styleClass }) => {
  return (
    <ul className="Footer__Social">
      {RRSS_LINKS.map(({ id, icon, url }) => (
        <li className="Footer__Social__Item" key={id}>
          <Link
            to={url}
            className={`Footer__Social__Link ${styleClass ? styleClass : ""}`}
          >
            {icon}
          </Link>
        </li>
      ))}
    </ul>
  )
}
export default SocialLinks
