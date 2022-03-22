import React from "react"
import "./animatedTransitionContinous.scss"

const AnimatedTransitionContinous = ({ children }) => {
  let longerText = ""

  while (longerText.length < 200) {
    longerText = children + "  -  " + longerText
  }

  return (
    <div className="m-scroll">
      <div className="m-scroll__title">
        <div>
          <h1>{longerText}</h1>
        </div>
      </div>
    </div>
  )
}

export default AnimatedTransitionContinous
