import React, { useEffect, useRef, useState } from "react"
import "./videoBackground.scss"
import CustomLink from "../CustomLink/CustomLink"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function getIOSVersion() {
  if (typeof window === "undefined" || typeof navigator === "undefined") return null
  const userAgent = navigator.userAgent
  const regex = /iPhone.*OS (\d+)_?(\d+)_?(\d+)?/
  const iosMatch = regex.exec(userAgent)
  if (!iosMatch) return null
  const major = parseInt(iosMatch[1], 10)
  const minor = parseInt(iosMatch[2], 10)
  const patch = iosMatch[3] ? parseInt(iosMatch[3], 10) : 0
  return { major, minor, patch }
}

function isIOSPriorTo(version) {
  const currentVersion = getIOSVersion()
  if (!currentVersion) return false
  const [majorVersion, minorVersion] = version.split(".").map(Number)
  if (currentVersion.major < majorVersion) return true
  if (currentVersion.major > majorVersion) return false
  return currentVersion.minor < minorVersion
}

function getVideoContent(
  video,
  videoRef,
  isIntersecting,
  pausePlay,
  handleKeyDown,
  videoUrl,
  image,
  posterData
) {
  const posterUrl = posterData?.url
  const posterSharp = posterData?.localFile && getImage(posterData.localFile)

  const url = videoUrl?.replace("watch?v=", "embed/")
  let code = url?.substring(url.lastIndexOf("/") + 1) || ""
  const codeIndex = code.indexOf("?")
  if (codeIndex !== -1) code = code.substring(0, codeIndex)

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
          srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;height:100%;object-fit:cover;top:0;bottom:0}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;margin:auto;text-shadow:0 0 0.5em black}</style><a href=${url}?rel=0><img src=https://img.youtube.com/vi/${code}/hqdefault.jpg alt='Video'><span>▶</span></a>`}
          src={`${url}?rel=0`}
          frameBorder="0"
          allowFullScreen
          title="benefits_video"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          webkitallowfullscreen
          mozallowfullscreen
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

  return <div><br /></div>
}

const VideoBackground = ({ data }) => {
  const {
    image,
    video,
    description,
    button,
    backgroundImage,
    videoUrl,
    poster,
  } = data

  const [isVideoPause, setIsVideoPause] = useState(false)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const videoRef = useRef(null)

  const pausePlay = () => {
    if (isVideoPause) videoRef.current.play()
    else videoRef.current.pause()
    setIsVideoPause(prev => !prev)
  }

  const handleKeyDown = event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      pausePlay()
    }
  }

  useEffect(() => {
    const elem = videoRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          observer.unobserve(elem)
        }
      },
      { rootMargin: "0px 0px 200px 0px", threshold: 0.1 }
    )
    if (elem) observer.observe(elem)
    return () => elem && observer.unobserve(elem)
  }, [])

  useEffect(() => {
    const stored =
      typeof window !== "undefined" && localStorage.getItem("videoPaused")
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
    image,
    poster
  )

  return (
    <div
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage.url})`
          : "",
        backgroundRepeatY: "no-repeat",
        backgroundPosition: "center",
      }}
    >
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
    video: PropTypes.shape({ url: PropTypes.string.isRequired, mime: PropTypes.string.isRequired }),
    videoUrl: PropTypes.string,
    description: PropTypes.string,
    backgroundImage: PropTypes.shape({ url: PropTypes.string.isRequired }),
    image: PropTypes.shape({
      alternativeText: PropTypes.string,
      localFile: PropTypes.object,
    }),
    poster: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alternativeText: PropTypes.string,
      localFile: PropTypes.shape({ childImageSharp: PropTypes.object.isRequired }),
    }),
    button: PropTypes.shape({
      content: PropTypes.string.isRequired,
      url: PropTypes.string,
      landing_page: PropTypes.shape({ slug: PropTypes.string.isRequired }),
    }),
  }),
}

export default VideoBackground;

