import React, { useEffect, useRef, useState } from "react"
import "./videoBackground.scss"
const VideoBackground = ({
  data: { video, description, button, strapi_component, id, backgroundImage },
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
    <div
      className="pt-5 py-3"
      style={{
        backgroundImage: `url(${backgroundImage?.url})`,
      }}
    >
      <div
        className="container px-md-0 px-lg-3 videoBackground-container"
        id={strapi_component + "-" + id}
      >
        <section className="videoBackground">
          <video
            ref={videoRef}
            muted
            autoPlay
            loop
            src={video.url}
            type="video/mp4"
            controls={false}
            onClick={pausePlay}
          />
          <div className="videoBackground-card">
            <h5>{description}</h5>
            <a href={button.url} target="_blank" rel="noreferrer">
              <button className="px-4">{button.content}</button>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default VideoBackground
