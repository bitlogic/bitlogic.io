import React from 'react'
import "./CasesSection.scss"

const CasesSection = ({data}) => {
  return (
    <div className="container my-3" id={data.strapi_component + "-" + data.id}>
    <div>{data.title}</div>      
      </div>

  )
}

export default CasesSection