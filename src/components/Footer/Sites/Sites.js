import React from "react";
import { useFooter } from '../../../hooks';
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import './Sites.scss'

const Sites = () => {
  const sitesData = useFooter()?.allStrapiLayout?.nodes[0]?.Sites

  const websitesItems = sitesData?.websites?.map(website => {
    const image = website?.icon?.localFile?.childImageSharp?.gatsbyImageData
      ? getImage(website?.icon?.localFile?.childImageSharp?.gatsbyImageData)
      : undefined;

    return (
      <div>
        <a href={website.url}
          key={website.id}
          aria-label={`Visita nuestro sitio web: ${website.url}`}
        >
          {image && (
            <GatsbyImage image={image}
              alt={website.icon?.alternativeText
                ? website.icon.alternativeText
                : 'Website Icon'
              }
              width={30}
              height={15}
            />
          )}
          {website?.name ? website.name : ''}
        </a>
      </div>
    )
  })

  return (
    <div className="Sites d-flex">
      {sitesData?.title && <h6>{sitesData.title}</h6>}
      <div className="Sites__items">
        {websitesItems}
      </div>
    </div>
  )
}

export default Sites;