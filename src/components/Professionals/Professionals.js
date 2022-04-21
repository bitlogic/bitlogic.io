import React from 'react'
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { useProfessionals } from '../../hooks'
import "./Professionals.scss"
import { FaLinkedinIn } from "react-icons/fa"

const Professionals = ({ data }) => {
  const { title, summary, professionals } = data
  const professionalsData = useProfessionals()

  const professionalsList = professionals.map(pro =>
    professionalsData?.allStrapiProfessional?.nodes.find(professional => professional.strapiId === pro.id)  
  ).slice(0,6)

  const professionalsCards = professionalsList.map((pro, idx) => {
   
    const photo = getImage(pro.photo.localFile)

    const {name, position, quote, linkedin} = pro

    return (
      <div
      className="pro col-12 col-md-4 row"
      key={`pro-${idx}`}
      id={data.strapi_component + "-" + data.id}
    >
      <div className="col-6 col-md-12">
        <GatsbyImage image={photo} alt={name} className="pro__img" />
      </div>
      <div className="col-6 col-md-12">
        <div className="pro__descr">
          <h6 className="pro__descr_title">{name}</h6>
          {linkedin && <a href={linkedin} target="_blank"><FaLinkedinIn size={23}/></a>}
          {position && <h6 className="pro__descr_position">{position}</h6>}
          <p className="pro__descr_text">{quote}</p>
        </div>
      </div>
    </div>
    )
  })

  return (
    <div className="container py-5 prosSection">
      {title && <h2>{title}</h2>}
      {summary && <h6 className="prosSection__summary px-lg-3">{summary}</h6>}
      {(professionalsCards !== undefined && professionalsCards.length > 0) && 
        <div className="cases row">{professionalsCards}</div>
      }
    </div>
  )
}

export default Professionals