import "./quote.scss"
import MarkdownView from "react-showdown"
import React from "react"
import CustomLink from "../CustomLink/CustomLink"
import PropTypes from "prop-types"
import CustomImage from "../CustomImage/CustomImage"

const Quote = ({ data }) => {
  const { description, title, variant, profileDescription, videoUrl, button, profile, image } = data

  const url = videoUrl?.replace("watch?v=", "embed/")
  let code = url?.substring(url.lastIndexOf("/") + 1, url.length)
  const codeIndex = code?.indexOf("?")

  if (codeIndex !== -1 && code !== undefined) {
    code = code.substring(0, code.indexOf("?"))
  }

  return (
    <div className="container mb-3 mb-lg-5">
      <section className={`quote variant-${variant} py-lg-4`}>
        {(image && !videoUrl) && (
          <div className="quote-body">
            <CustomImage
              image={image}
              alt={image?.alternativeText || 'Image quote'}
              width={290}
              height={360}
              className=''
            />
          </div>
        )}

        {(videoUrl !== null && videoUrl !== undefined) && (
          <div className="quote-body">
            {(url !== undefined && code !== undefined) && (
              <iframe
                loading="lazy"
                type="text/html"
                srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;
                width:100%;height:100%;object-fit: cover;top:0;bottom:0;max-height: 500px}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;margin:auto;text-shadow:0 0 0.5em black}</style>
                <a href=${url + "?rel=0"}>
                <img src=https://img.youtube.com/vi/${code}/hqdefault.jpg alt='Video'>
                <span>▶</span></a>`}
                src={url + "?rel=0"}
                frameBorder="0"
                allowFullScreen
                title="benefits_video"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
              ></iframe>
            )}
          </div>
        )}

        <div className="quote-person">
          {title && <h4 className="quote-person-title">{title}</h4>}
          <div className="quote-person-text">
            <MarkdownView
              markdown={description}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>

          {profile && (
            <div className="quote-profile make-it-fast my-3 my-md-2 my-xl-4 d-flex gap-3 justify-content-between">
              <CustomImage
                image={profile}
                alt={profile?.alternativeText || 'Quote author'}
                width={70}
                height={70}
                className=''
              />
              <div className="flex-grow-1 align-self-center">
                <MarkdownView
                  markdown={profileDescription}
                  dangerouslySetInnerHTML={{ __html: profileDescription }}
                />
              </div>
            </div>
          )}
          {button && (
            <div className="quote-btn">
              <button aria-label={`Ir a ${button.content}`}>
                <CustomLink
                  content={button.content}
                  url={button?.url}
                  landing={button?.landing_page}
                  className=''
                />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

Quote.defaultProps = {
  description: "",
  title: "",
  variant: "",
  profileDescription: "",
  videoUrl: "",
  button: {},
  profile: {},
  image: {},
}

Quote.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string.isRequired,
    variant: PropTypes.string,
    profileDescription: PropTypes.string,
    videoUrl: PropTypes.string,
    button: PropTypes.shape({
      content: PropTypes.string.isRequired,
      url: PropTypes.string,
      landing_page: PropTypes.shape({
        slug: PropTypes.string.isRequired
      })
    }),
    profile: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alternativeText: PropTypes.string,
      localFile: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          gatsbyImageData: PropTypes.object.isRequired
        })
      })
    }),
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alternativeText: PropTypes.string,
      localFile: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          gatsbyImageData: PropTypes.object.isRequired
        })
      })
    })
  })
}

export default Quote
