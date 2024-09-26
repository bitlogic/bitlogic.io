import "./logosSection.scss"
import React from "react"
import { useTheme } from "../../context/themeContext"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import PropTypes from "prop-types"
import CustomImage from "../CustomImage/CustomImage"

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left custom-arrow left"
      aria-label="Flecha izquierda para ver logo anterior"
      onClick={() => onClick()}
    />
  )
}

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right custom-arrow right"
      aria-label="Flecha derecha para ver el siguiente logo"
      onClick={() => onClick()}
    />
  )
}

const LogosSection = ({ data }) => {
  const { title, summary, media } = data
  const { theme } = useTheme()

  const logoList = media?.map(logo => {
    if (!logo.img && !logo.imageDark) return null

    return (
      <div className="logos__image" key={logo.id}>
        <CustomImage
          image={
            theme === "dark" && logo?.imageDark ? logo?.imageDark : logo?.img
          }
          alt={logo?.image?.alternativeText || logo.name}
          className={""}
          width={196}
          height={186}
        />
      </div>
    )
  })

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    mobileTablet: {
      breakpoint: { max: 767, min: 577 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
  }

  return (
    <div className="logos container py-3 my-3">
      {title && <h2 className="logos__title">{title}</h2>}
      {summary && <p className="logos__summary px-lg-3">{summary}</p>}
      {media?.length > 0 && (
        <Carousel
          responsive={responsive}
          autoPlay={logoList.length > 4}
          autoPlaySpeed={3000}
          infinite={logoList.length > 4}
          containerClass={"containerCarrusel"}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
          removeArrowOnDeviceType={
            logoList.length <= 4 && ["tablet", "desktop"]
          }
        >
          {logoList}
        </Carousel>
      )}
    </div>
  )
}

CustomLeftArrow.propTypes = {
  onClick: PropTypes.func,
}
CustomRightArrow.propTypes = {
  onClick: PropTypes.func,
}

LogosSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    summary: PropTypes.string,
    media: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        img: PropTypes.shape({
          url: PropTypes.string.isRequired,
          alternativeText: PropTypes.string,
          localFile: PropTypes.shape({
            childImageSharp: PropTypes.shape({
              gatsbyImageData: PropTypes.object.isRequired,
            }),
          }),
        }).isRequired,
        imageDark: PropTypes.shape({
          url: PropTypes.string.isRequired,
          alternativeText: PropTypes.string,
          localFile: PropTypes.shape({
            childImageSharp: PropTypes.shape({
              gatsbyImageData: PropTypes.object.isRequired,
            }),
          }),
        }),
      })
    ),
  }),
}

export default LogosSection
