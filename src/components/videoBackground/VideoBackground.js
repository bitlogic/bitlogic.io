
import React, { useEffect, useRef, useState, Suspense, lazy } from "react"
import PropTypes from "prop-types"
import "./videoBackground.scss"
import CustomLink from "../CustomLink/CustomLink"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const VideoBackgroundContent = lazy(() => import("./VideoBackgroundContent"))

function getIOSVersion() {
  if (typeof window === "undefined" || typeof navigator === "undefined") return null
  const userAgent = navigator.userAgent
  const regex = /iPhone.*OS (\d+)_?(\d+)_?(\d+)?/
  const iosMatch = regex.exec(userAgent)
  if (!iosMatch) return null
  const [major, minor, patch = 0] = iosMatch.slice(1).map(n => parseInt(n, 10))
  return { major, minor, patch }
}

function isIOSPriorTo(version) {
  const current = getIOSVersion()
  if (!current) return false
  const [maj, min] = version.split(".").map(Number)
  if (current.major < maj) return true
  if (current.major > maj) return false
  return current.minor < min
}

function getVideoContent(
  video,
  videoRef,
  isIntersecting,
  pausePlay,
  handleKeyDown,
  videoUrl,
  posterData
) {
  const posterUrl = posterData?.url
  const posterSharp = posterData?.localFile && getImage(posterData.localFile)

  const url = videoUrl?.replace("watch?v=", "embed/")
  let code = url?.split("/").pop() || ""
  code = code.split("?")[0]

  if (!isIOSPriorTo("17.4")) {
    if (video?.url) {
      return (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          tabIndex={0}
          controls={false}
          autoPlay={isIntersecting}
          poster={posterUrl}
          preload="auto"
          onClick={pausePlay}
          onKeyDown={handleKeyDown}
        >
          {isIntersecting && <source src={video.url} type={video.mime} />}
        </video>
      )
    }
    if (videoUrl) {
      return (
        <iframe
          className="video"
          loading="lazy"
          type="text/html"
          srcDoc={`
            <style>
              *{padding:0;margin:0;overflow:hidden}
              html,body{height:100%}
              img,span{position:absolute;width:100%;height:100%;object-fit:cover;top:0}
              span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
            </style>
            <a href="${url}?rel=0">
              <img src="https://img.youtube.com/vi/${code}/hqdefault.jpg" alt="Video">
              <span>▶</span>
            </a>
          `}
          src={`${url}?rel=0`}
          frameBorder="0"
          allowFullScreen
          title="benefits_video"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
      )
    }
  }

  if (posterSharp) {
    return (
      <GatsbyImage
        className="video-poster"
        image={posterSharp}
        alt={posterData.alternativeText || "Video poster"}
      />
    )
  }

  return <div style={{ height: "200px" }} /> // placeholder
}

const VideoBackground = ({ data }) => {


  const {
    backgroundImage,
    video,
    videoUrl,
    poster,
    description,
    button,
  } = data

  const [isVideoPause, setIsVideoPause] = useState(false)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const videoRef = useRef(null)

  // Control play/pause
  const pausePlay = () => {
    if (isVideoPause) videoRef.current.play()
    else videoRef.current.pause()
    setIsVideoPause(prev => !prev)
  }
  const handleKeyDown = ev => {
    if (ev.key === "Enter" || ev.key === " ") {
      ev.preventDefault()
      pausePlay()
    }
  }

  // Intersection Observer para lazy video src
  useEffect(() => {
    const elem = videoRef.current
    if (!elem) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          observer.unobserve(elem)
        }
      },
      { rootMargin: "0px 0px 200px 0px", threshold: 0.1 }
    )
    observer.observe(elem)
    return () => observer.unobserve(elem)
  }, [])

  // Persistir estado paused
  useEffect(() => {
    const stored = typeof window !== "undefined" && localStorage.getItem("videoPaused")
    if (stored === "true") {
      videoRef.current.pause()
      setIsVideoPause(true)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("videoPaused", isVideoPause)
  }, [isVideoPause])

  const videoContent = getVideoContent(
    video,
    videoRef,
    isIntersecting,
    pausePlay,
    handleKeyDown,
    videoUrl,
    poster
  )

  // Prepara la imagen de fondo
  const bgSharp = backgroundImage?.localFile && getImage(backgroundImage.localFile)

  return (
    <div className="videoBackground-wrapper">
      {bgSharp && (
        <GatsbyImage
          className="videoBackground-bg"
          image={bgSharp}
          alt={backgroundImage.alternativeText || "Background"}
          loading="eager"
        />
      )}

      <div className="container videoBackground-container">
        <section className="videoBackground">
          {videoContent}
          {description && (
            <div className="videoBackground-card">
              <h2>{description}</h2>
              {button && (
                <CustomLink
                  content={button.content}
                  url={button.url}
                  landing={button.landing_page}
                />
              )}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

VideoBackground.propTypes = {
  data: PropTypes.shape({
    backgroundImage: PropTypes.shape({
      alternativeText: PropTypes.string,
      localFile: PropTypes.object.isRequired,
    }),
    video: PropTypes.shape({
      url: PropTypes.string.isRequired,
      mime: PropTypes.string.isRequired,
    }),
    videoUrl: PropTypes.string,
    poster: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alternativeText: PropTypes.string,
      localFile: PropTypes.shape({
        childImageSharp: PropTypes.object.isRequired,
      }),
    }),
    description: PropTypes.string,
    button: PropTypes.shape({
      content: PropTypes.string.isRequired,
      url: PropTypes.string,
      landing_page: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
}

export default VideoBackground
