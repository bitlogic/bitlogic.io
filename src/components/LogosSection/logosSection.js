import "./logosSection.scss"
import React from "react"
import { useTheme } from "../../context/themeContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'


const LogosSection = ({ data }) => {
  const { title, summary, media } = data
  const { theme } = useTheme()

  const logoList = media?.map(logo => {

    if (!logo.img && !logo.imageDark) return null

    return (
      <div className="logos__image" key={logo.id}>
        <img alt={logo.name}
          loading="lazy"
          width={196}
          height={186}
          src={theme === "dark" && logo.imageDark
            ? logo?.imageDark?.url
            : logo?.img?.url
          }
        />
      </div>
    )
  })

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3
    },
    mobileTablet: {
      breakpoint: { max: 767, min: 577 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1
    }
  };

  const CustomLeftArrow = ({ onClick }) => {
    return <FontAwesomeIcon
      className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left custom-arrow left"
      icon="fa-solid fa-chevron-left"
      onClick={() => onClick()} />;
  };

  const CustomRightArrow = ({ onClick }) => {
    return <FontAwesomeIcon
      className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right custom-arrow right"
      icon="fa-solid fa-chevron-right"
      onClick={() => onClick()} />;
  };

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
          containerClass={'containerCarrusel'}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
          removeArrowOnDeviceType={logoList.length <= 4 && ['tablet', 'desktop']}
        >
          {logoList}
        </Carousel>
      )}
    </div>
  )
}

export default LogosSection
