import React from 'react'
import "./CasesSection.scss"

const CasesSection = ({data}) => {
  return (
    <div className="container my-3">
    <div>{data.title}</div>      
      </div>

  )
}

export default CasesSection