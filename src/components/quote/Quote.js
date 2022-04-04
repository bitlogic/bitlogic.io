import "./quote.scss"
import MarkdownView from "react-showdown"
import React, { useEffect, useRef, useState } from "react"

const Quote = ({
  data: { description, title, variant, profile, profileDescription, button, image, strapi_component, id },
}) => {
  const [isVideoPause, setIsVideoPause] = useState(false)
  const videoRef = useRef(null)

  const pausePlay = () => {
    if (isVideoPause) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
    setIsVideoPause(prev => !prev)
  }

  useEffect(() => {
    const isVideoPauseLocal =
      typeof window !== "undefined"
        ? localStorage.getItem("videoPaused")
        : undefined

    if (isVideoPauseLocal === "true") {
      videoRef.current.pause()
      setIsVideoPause(isVideoPauseLocal)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("videoPaused", isVideoPause)
  }, [isVideoPause])

  return (
    <div className="container my-3 mb-lg-5" id={strapi_component + "-" + id}>
      <section className={`quote variant-${variant}`}>
        {image && (
          <div className="quote-body">
            {(/video/gm.test(image.mime)) &&
              <video
                ref={videoRef}
                muted
                autoPlay
                loop
                src={image.url}
                type="video/mp4"
                onClick={pausePlay}
                controls={false}
              />}
            {(/image/gm.test(image.mime)) && (
              <img
                src={image.url}
                alt={image.name}
              />
            )
            }
          </div>
        )}

        <div className="quote-person">
          <h4 className="quote-person-title">{title}</h4>
          <p className="quote-person-text">{description}</p>

          {profile && (
            <div className="quote-profile make-it-fast my-3 d-flex gap-3 justify-content-between">
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
  button: {},
  profile: {},
  image: {},
}

export default Quote
