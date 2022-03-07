import React from 'react'
import { useFooter } from '../../../hooks';
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';
import FaIcon from '../../FaIcon/FaIcon';
import './socialLinks.scss';

export default function SocialLinks() {
  const data = useFooter();
  const dataFooter = data?.allStrapiLayout?.nodes[0].footer;
  const logo = getImage(dataFooter?.logo?.localFile?.childImageSharp?.gatsbyImageData);

  const dataSocialMedia = dataFooter?.socialMedia;
  console.log(dataSocialMedia)

  const socialMedia = dataSocialMedia?.socialMedia?.map((item) => {
    console.log(item.icon.type)
    return (
      <a
        key={item.id}
        href={item.url}
        target="_blank"
        className={`btn-social m-2 btn-social-icon btn-${item.icon?.name}`}
        rel="noreferrer"
      >
        <FaIcon type={item.icon?.type} code={item.icon?.code} />
      </a>

    );
  });

  return (
    <div className="SocialMedia d-flex mt-3 flex-column flex-md-row-reverse">
      <div className="SocialMedia__Links d-flex justify-content-center text-md-start col-12 col-md-7 col-lg-6 col-xl-4 col-xxl-5">
        {socialMedia}
      </div>

      <div className="SocialMedia__Logo text-center text-md-start col-12 col-md-5 col-lg-6 col-xl-8 col-xxl-7 ps-md-3">
        <Link to="/">
          <GatsbyImage image={logo} />
        </Link>
      </div>

    </div>
  )
}