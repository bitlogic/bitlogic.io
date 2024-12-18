import React from "react"
import "./animatedTransitionContinous.scss"
import PropTypes from "prop-types"
import CustomImage from "../CustomImage/CustomImage"

const AnimatedTransitionContinous = ({ data }) => {
  const { text = "", image, imagePosition, color } = data

  let longerText = ""

  const amount = text ? 200 : 50
  while (longerText.length < amount) {
    longerText = (text || "") + "-" + longerText
  }

  return (
    <div className="m-scroll">
      <div className="m-scroll__title">
        <div className={text ? "" : "m-scroll__title-image"}>
          {longerText.split("-").map((innerText, idx) => (
            <div
              className="m-scroll__title-inner"
              key={`AnimatedScroll-${(innerText || "") + idx}`}
            >
              {imagePosition === "first" && image && (
                <CustomImage
                  image={image}
                  alt={image?.alternativeText || "Image animated"}
                  width={40}
                  height={40}
                  className={""}
                />
              )}
              {innerText && <h2 style={{ color: color }}>{innerText || ""}</h2>}

              {(imagePosition === "last" || !imagePosition) && image && (
                <CustomImage
                  image={image}
                  alt={image?.alternativeText || "Image animated"}
                  width={40}
                  height={40}
                  className={""}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

AnimatedTransitionContinous.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string,
    color: PropTypes.string,
    imagePosition: PropTypes.string,
    image: PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string.isRequired,
      alternativeText: PropTypes.string,
      localFile: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          gatsbyImageData: PropTypes.object.isRequired,
        }),
      }),
    }),
  }),
}

export default AnimatedTransitionContinous
