import "./quote.scss"
import MarkdownView from "react-showdown"
import React from "react"

const Quote = ({
  data: { description, title, variant, profile, profileDescription, button, image, videoUrl, strapi_component, id },
}) => {
  const url = videoUrl.replace("watch?v=", "embed/")
  let code = url.substring(url.lastIndexOf("/") + 1, url.length)
  const codeIndex = code.indexOf("?")

  if (codeIndex !== -1) {
    code = code.substring(0, code.indexOf("?"))
  }

  return (
    <div className="container my-3 mb-lg-5" id={strapi_component + "-" + id}>
      <section className={`quote variant-${variant}`}>
        {image && (
          <div className="quote-body">
            <img
              src="http://localhost:1337/uploads/quote1_df2d40290b.png"
              alt={image.name}
            />
          </div>
        )}

        {videoUrl && (
          <div className="quote-body">
            <iframe
              loading="lazy"
              type="text/html"
              src={url}
              frameBorder="0"
              allowFullScreen
              title="benefits_video"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;
                            width:100%;top:0;bottom:0;max-height: 500px}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;margin:auto;text-shadow:0 0 0.5em black}</style>
                            <a href=${url}>
                            <img src=https://img.youtube.com/vi/${code}/hqdefault.jpg alt='Video'>
                            <span>▶</span></a>`}
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            ></iframe>

          </div>
        )}

        <div className="quote-person">
          <h4 className="quote-person-title">{title}</h4>
          <p className="quote-person-text">{description}</p>

          {profile && (
            <div className="quote-profile make-it-fast my-3 my-md-2 my-xl-4 d-flex gap-3 justify-content-between">
              <img
                src={"http://localhost:1337/uploads/profile_4f038f59f5.png"}
                alt=""
              />
              <div className="flex-grow-1">
                <MarkdownView markdown={profileDescription} className="markdown" />
              </div>
            </div>
          )}
          {button && (
            <div className="quote-btn">
              <button>{button.content}</button>
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

export default Quote
