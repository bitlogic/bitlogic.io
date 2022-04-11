import React from "react"
import "./animatedTransitionContinous.scss"

const AnimatedTransitionContinous = ({
  data: { text = "", image, imagePosition, color },
}) => {
  let longerText = ""

  const amount = text ? 200 : 50
  while (longerText.length < amount) {
    longerText = (text || "") + "-" + longerText
  }

  return (
    <div className="m-scroll">
      <div className="m-scroll__title">
        <div className={text ? "" : "m-scroll__title-image"}>
          {longerText.split("-").map(innerText => (
            <div className="m-scroll__title-inner">
              {imagePosition === "first" && (
                <img src={image?.url} alt="" />
              )}
              <h1 style={{color: color}}>{innerText || ""}</h1>
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
