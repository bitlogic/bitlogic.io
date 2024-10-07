import React from 'react'
import { useProfessionals } from '../../hooks'
import "./Professionals.scss"
import { FaLinkedinIn } from "react-icons/fa"
import CustomImage from "../CustomImage/CustomImage"
import PropTypes from "prop-types"

const Professionals = ({ data }) => {
  const { title, summary, professionals } = data
  const professionalsData = useProfessionals()?.allStrapiProfessional?.nodes

  const professionalsList = professionals?.map(pro =>
    professionalsData?.find(professional => professional.strapiId === pro.id)
  ).slice(0, 6)

  const professionalsCards = professionalsList?.map(pro => {
    const { name, position, quote, linkedin, photo } = pro

    return (
      <div key={`pro-${pro.id}`} className="pro col-12 col-md-4 row">
        <div className="col-6 col-md-12">
          <CustomImage image={photo}
            width={160}
            height={250}
            alt={photo?.alternativeText || name}
            className='pro__img'
          />
        </div>
        <div className="col-6 col-md-12">
          <div className="pro__descr">
            <h3 className="pro__descr_title">{name}</h3>
            {linkedin && <a href={linkedin} target="_blank" rel='noopener noreferrer' aria-label='Link externo a LinkedIn'><FaLinkedinIn size={28} /></a>}
            {position && <p className="pro__descr_position">{position}</p>}
            <p className="pro__descr_text">{quote}</p>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className="container pt-5 pb-1 prosSection">
      {title && <h2>{title}</h2>}
      {summary && <p className="prosSection__summary px-lg-3">{summary}</p>}
      {professionalsCards?.length > 0 &&
        <div className="cases row">{professionalsCards}</div>
      }
    </div>
  )
}

Professionals.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    summary: PropTypes.string,
    professionals: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        position: PropTypes.string,
        linkedin: PropTypes.string,
        quote: PropTypes.string.isRequired,
        photo: PropTypes.shape({
          url: PropTypes.string.isRequired,
          alternativeText: PropTypes.string,
          localFile: PropTypes.shape({
            childImageSharp: PropTypes.shape({
              gatsbyImageData: PropTypes.object.isRequired
            })
          })
        }).isRequired
      })
    )
  })
}

export default Professionals