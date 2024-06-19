import React from "react";
import { useFooter } from '../../../hooks';
import './Sites.scss'
import CustomImage from "../../CustomImage/CustomImage"

const Sites = () => {
  const sitesData = useFooter()?.allStrapiLayout?.nodes[0]?.Sites
  const { title, websites } = sitesData;

  if (!websites) return null

  const websitesItems = websites?.map(website => {

    return (
      <div key={website.id}>
        <a href={website.url}
          aria-label={`Visita nuestro sitio web: ${website.url}`}
        >
          <CustomImage
            image={website?.icon}
            alt={website?.icon?.alternativeText || 'Website Icon'}
            width={30}
            height={15}
            className=''
          />
          {website?.name ? website.name : ''}
        </a>
      </div>
    )
  })

  return (
    <div className="Sites d-flex">
      {title && <h6>{title}</h6>}
      <div className="Sites__items">
        {websitesItems}
      </div>
    </div>
  )
}

export default Sites;