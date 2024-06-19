import React from "react"
import MarkdownView from "react-showdown"
import Lottie from 'react-lottie'
import { useTheme } from "../../context/themeContext"
import "./Banner.scss"
import PropTypes from 'prop-types'
import CustomLink from "../CustomLink/CustomLink"
import CustomImage from "../CustomImage/CustomImage"

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
    }

    return <h1>{title}</h1>
  }

  return (
    <div className={`banner ${variant}`}>
      <div className="container banner__wrapper">
        {variant === "background" ?
          <div className="bgImage"
            style={{
              backgroundImage: image ? `url(${image?.url})` : '',
              backgroundPosition: 'center',
            }}>
            <div className="title-background">
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
              {image ? (
                <CustomImage image={theme === 'dark' && imageDark ? imageDark : image}
                  alt={image?.alternativeText || title}
                  className={''}
                  width={290}
                  height={200}
                />
              ) : (
                <div className="cont-lottie">
                  {animation && (
                    <Lottie options={{ ...defaultOptions, animationData: animation }} />
                  )}
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
