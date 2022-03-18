import React, { useEffect, useRef, useState } from "react"
import "./videoBackground.scss"
const VideoBackground = ({ data: { video, description, button } }) => {
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
    <div className="container-md my-3 px-0 px-lg-3">
          <section className="videoBackground my-md-3">
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
      <div className="videoBackground-card" >
        <h4>{description}</h4>
        <a href={button.url} target="_blank" rel="noreferrer">
          <button className="px-4" >{button.content}</button>
        </a>
      </div>
    </section>
      </div>

  )
}

export default VideoBackground
