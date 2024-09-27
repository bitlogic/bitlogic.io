import "./quote.scss"
import MarkdownView from "react-showdown"
import React from "react"
import PropTypes from "prop-types"
import CustomImage from "../CustomImage/CustomImage"
import CustomLink from "../CustomLink/CustomLink"

const Quote = ({ data }) => {
  const {
    description,
    title,
    variant,
    profileDescription,
    videoUrl,
    button,
    profile,
    image,
  } = data

  const url = videoUrl?.replace("watch?v=", "embed/")
  let code = url?.substring(url.lastIndexOf("/") + 1, url.length)
  const codeIndex = code?.indexOf("?")

  if (codeIndex !== -1 && code !== undefined) {
    code = code.substring(0, code.indexOf("?"))
  }

  return (
    <div className={`Quote ${variant} container`}>
      {image ? (
        <div className="Quote__body image">
          <CustomImage
            image={image}
            alt={image?.alternativeText || title}
            width={290}
            height={360}
            className={""}
          />
        </div>
      ) : (
        <div className="Quote__body video">
          {url !== undefined && code !== undefined && (
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
      <section className={`Quote__content`}>
        <h4 className="Quote__content__title">{title}</h4>
        <MarkdownView
          markdown={description}
          className="Quote__content__text"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {profile && (
          <div className="Quote__content__profile make-it-fast">
            <CustomImage
              image={profile}
              alt={profile?.alternativeText || `Imagen del referente`}
              width={70}
              height={70}
            />
            <div className="flex-grow-1 align-self-center">
              <MarkdownView
                markdown={profileDescription}
                className="markdown"
                dangerouslySetInnerHTML={{ __html: profileDescription }}
              />
            </div>
          </div>
        )}
        {button && (
          <CustomLink
            content={button.content}
            url={button?.url}
            landing={button?.landing_page}
            className={"Quote__content__btn"}
          />
        )}
      </section>
    </div>
  )
}

Quote.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    variant: PropTypes.string,
    profileDescription: PropTypes.string,
    videoUrl: PropTypes.string,
    button: PropTypes.shape({
      content: PropTypes.string.isRequired,
      url: PropTypes.string,
      landing_page: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }),
    }),
    profile: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alternativeText: PropTypes.string,
    }),
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alternativeText: PropTypes.string,
    }),
  }).isRequired,
}

export default Quote
