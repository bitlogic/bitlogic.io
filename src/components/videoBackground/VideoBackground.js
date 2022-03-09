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

    const isVideoPauseLocal = typeof window !== 'undefined' ? localStorage.getItem('videoPaused') : undefined

    if (isVideoPauseLocal === "true") {
      console.log(isVideoPauseLocal)
      console.log("video pausado localmente")
      videoRef.current.pause()
      setIsVideoPause(isVideoPauseLocal)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('videoPaused', isVideoPause)
  }, [isVideoPause])


  return (
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
      <div className="videoBackground-card" >
        <p>{description}</p>
        <a href={button.url} target="_blank" rel="noreferrer">
          <button >{button.content}</button>
        </a>
      </div>
    </section>
  )
}

export default VideoBackground
