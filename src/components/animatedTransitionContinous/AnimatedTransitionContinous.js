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
          {longerText.split("-").map(text => (
            <div className="m-scroll__title-inner">
              {imagePosition === "first" && (
                <img src={"http://localhost:1337" + image.url} alt="" />
              )}
              <h1>{text}</h1>
              {(imagePosition === "last" || !imagePosition) && (
                <img src={"http://localhost:1337" + image.url} alt="" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AnimatedTransitionContinous
