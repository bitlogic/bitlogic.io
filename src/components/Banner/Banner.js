import React from "react"
import MarkdownView from "react-showdown"
import Lottie from 'react-lottie'
import { useTheme } from "../../context/themeContext"
import "./Banner.scss"
import PropTypes from 'prop-types'
import CustomLink from "../CustomLink/CustomLink"

const Banner = ({ data }) => {
  const { theme } = useTheme()
  const { title, variant, summary, animation, image, imageDark, button } = data

  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
  }

  const showTitle = () => {
    if (variant === "diagonal" || variant === "diagonalReverse") {
      return <h2>{title}</h2>
    } else {
      return <h1>{title}</h1>
    }
  }

  return (
    <div className={`banner ${variant}`}>
      <div className="container banner__wrapper">
        {variant === "background" ?
          <div
            className="bgImage"
            style={{
              backgroundImage: `url(${image?.url})`,
              backgroundPosition: 'center',
              // backgroundSize: 'cover',
            }}>
            <div className="title-background ">
              <h1 style={{ color: theme === 'dark' ? 'white' : '#3F6BE8' }}>{title}</h1>
              {summary && (
                <MarkdownView
                  markdown={summary}
                  dangerouslySetInnerHTML={{ __html: summary }}
                />
              )}
              {button && (
                <CustomLink
                  content={button.content}
                  url={button?.url}
                  landing={button?.landing_page}
                  className={'button'}
                />
              )}
            </div>
          </div> :
          <>
            <div className="title container-md">
              <div>
                {showTitle()}
                {summary && (
                  <MarkdownView
                    markdown={summary}
                    dangerouslySetInnerHTML={{ __html: summary }}
                  />
                )}
                {button && (
                  <CustomLink
                    content={button.content}
                    url={button?.url}
                    landing={button?.landing_page}
                    className={'button'}
                  />
                )}
              </div>
            </div>

            <div className="imagen">
              {image?.url ? (
                <img
                  src={theme === "dark" && imageDark ? imageDark?.url : image?.url}
                  width={290}
                  height={200}
                  alt={image?.alternativeText || title}
                />) : (
                <div className="cont-lottie">
                  {animation && <Lottie options={{
                    ...defaultOptions,
                    animationData: animation,
                  }}
                  />}
                </div>
              )}
            </div>
          </>
        }
      </div>
    </div>
  )
}

Banner.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    summary: PropTypes.string,
    button: PropTypes.shape({
      content: PropTypes.string.isRequired,
      url: PropTypes.string,
      landing_page: PropTypes.shape({
        slug: PropTypes.string.isRequired
      })
    }),
    animation: PropTypes.object,
    image: PropTypes.shape({
      alternativeText: PropTypes.string,
      url: PropTypes.string,
    }),
    imageDark: PropTypes.shape({
      alternativeText: PropTypes.string,
      url: PropTypes.string,
    })
  }).isRequired
};

export default Banner
