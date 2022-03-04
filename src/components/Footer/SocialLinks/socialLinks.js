import React from 'react'
import { useFooter } from '../../../hooks';
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';
import { FaIcon } from '../../FaIcon/FaIcon';//si comento este componente no se muestran los iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './socialLinks.scss';

export default function SocialLinks() {
  const data = useFooter();
  const dataFooter = data?.allStrapiLayout?.nodes[0].footer;
  const logo = getImage(dataFooter?.logo?.localFile?.childImageSharp?.gatsbyImageData);

  const dataSocialMedia = dataFooter?.socialMedia;

  const socialMedia = dataSocialMedia?.socialMedia.map((item) => {
    return (
      <a
        key={item.id}
        href={item.url}
        target="_blank"
        className={`btn-social m-2 btn-social-icon btn-${item.icon?.name}`}
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={`${item.icon?.type} ${item.icon?.code}`} />
      </a>

    );
  });

  return (
    <div className="SocialMedia d-flex mt-3 flex-column align-items-center flex-md-row-reverse justify-content-md-around">
      <div className="SocialMedia__Links text-center text-md-start col-12 col-md-5 col-lg-4 col-xl-3 px-md-3">
        {socialMedia}
      </div>

      <div className="SocialMedia__Logo text-center text-md-start col-12 col-md-7 col-lg-8 col-xl-9 ps-md-3">
        <Link to="/">
          <GatsbyImage image={logo} />
        </Link>
      </div>

    </div>
  )
}
















/* 
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
 */