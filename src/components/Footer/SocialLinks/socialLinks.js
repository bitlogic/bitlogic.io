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

  const socialMedia = dataSocialMedia?.socialMedia?.map((item) => {
    return (
      <a
        key={item.id}
        href={item.url}
        target="_blank"
        className={`btn-social m-2 btn-social-icon btn-${item.icon?.name}`}
        rel="noreferrer"
        aria-label={`Link externo a ${item?.name}`}
      >
        <FaIcon type={item.icon?.type} code={item.icon?.code} />
      </a>

    );
  });

  return (
    <div className="SocialMedia d-flex mt-3 flex-column flex-md-row-reverse">
      <div className="SocialMedia__Links d-flex justify-content-center justify-content-md-start px-3 px-md-2 px-xxl-3 text-md-start col-12 col-md-5 col-lg-4 col-xl-3">
        {socialMedia}
      </div>

      {logo && (
        <div className="SocialMedia__Logo text-center text-md-start mt-2 ps-md-3 col-12 col-md-7 col-lg-8 col-xl-9">
          <Link to="/">
            <GatsbyImage image={logo} alt={dataFooter?.logo?.alternativeText
              ? dataFooter.logo.alternativeText
              : 'Logo Bitlogic'}
            />
          </Link>
        </div>
      )}

    </div>
  )
}