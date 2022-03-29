import React from "react"
import "./animatedTransitionContinous.scss"

const AnimatedTransitionContinous = ({
  data: { text, image, imagePosition },
}) => {
  let longerText = ""

  console.log(imagePosition)
  while (longerText.length < 200) {
    longerText = text + "-" + longerText
  }

  return (
    <div className="m-scroll">
      <div className="m-scroll__title">
        <div>
          {longerText.split("-").map(innerText => (
            <div className="m-scroll__title-inner">
              {imagePosition === "first" && (
                <img src={image?.url} alt="" />
              )}
              <h1>{innerText}</h1>
              {(imagePosition === "last" || !imagePosition) && (
                <img src={image?.url} alt="" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AnimatedTransitionContinous
