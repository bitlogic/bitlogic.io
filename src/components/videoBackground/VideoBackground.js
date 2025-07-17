import React, { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import CustomLink from "../CustomLink/CustomLink"
import "./videoBackground.scss"


function getIOSVersion() {
  if (typeof window === "undefined" || typeof navigator === "undefined")
    return null
  const ua = navigator.userAgent
  const m = /iPhone.*OS (\d+)_?(\d+)_?(\d+)?/.exec(ua)
  if (!m) return null
  return {
    major: +m[1],
    minor: +m[2],
    patch: +(m[3] || 0),
  }
}

function isIOSPriorTo(version) {
  const cur = getIOSVersion()
  if (!cur) return false
  const [maj, min] = version.split('.')
    .map(Number)
  return cur.major < maj || (cur.major === maj && cur.minor < min)
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
  const posterSharp = posterData?.localFile &&
    getImage(posterData.localFile)
  const posterUrl = posterData?.url

 
  if (!isIntersecting && posterSharp) {
    return (
      <GatsbyImage
        className="video-poster"
        image={posterSharp}
        alt={posterData.alternativeText || "Video poster"}
        loading="eager"
      />
    )
  }

 
  const embedUrl = videoUrl?.replace("watch?v=", "embed/")
  let code = embedUrl?.split('/').pop() || ''
  code = code.split('?')[0]

  if (!isIOSPriorTo('17.4')) {
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
          {isIntersecting && (
            <source
              src={video.url}
              type={video.mime}
            />
          )}
        </video>
      )
    }

    if (videoUrl) {
      return (
        <iframe
          className="video"
          loading="lazy"
          title="Video Background"
          srcDoc={`
            <style>
              * { padding:0; margin:0; overflow:hidden; }
              html, body { height:100%; }
              img, span {
                position:absolute;
                width:100%;
                height:100%;
                object-fit:cover;
                top:0;
              }
              span {
                height:1.5em;
                text-align:center;
                font:48px/1.5 sans-serif;
                color:white;
                text-shadow:0 0 0.5em black;
              }
            </style>
            <a href="${embedUrl}?rel=0">
              <img
                src="https://img.youtube.com/vi/${code}/hqdefault.jpg"
                alt="Video"
              />
              <span>▶</span>
            </a>
          `}
          src={`${embedUrl}?rel=0`}
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          webkitallowfullscreen
          mozallowfullscreen
        />
      )
    }
  }

  // 3) Fallback: poster eager
  if (posterSharp) {
    return (
      <GatsbyImage
        className="video-poster"
        image={posterSharp}
        alt={posterData.alternativeText || "Video poster"}
        loading="eager"
      />
    )
  }

  // 4) Placeholder
  return <div style={{ height: '200px' }} />
}

// — Componente principal —
const VideoBackground = ({ data }) => {
  const {
    backgroundImage,
    video,
    videoUrl,
    poster,
    description,
    button,
  } = data

  const [isPaused, setIsPaused] = useState(false)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const videoRef = useRef(null)

  // Observador para arrancar el vídeo tras entrar en viewport
  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          obs.unobserve(el)
        }
      },
      { rootMargin: '0px 0px 200px 0px', threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.unobserve(el)
  }, [])

  // Persistir estado paused
  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = localStorage.getItem('videoPaused')
    if (stored === 'true') {
      videoRef.current?.pause()
      setIsPaused(true)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('videoPaused', isPaused)
  }, [isPaused])

  const pausePlay = () => {
    if (isPaused) videoRef.current.play()
    else videoRef.current.pause()
    setIsPaused(prev => !prev)
  }

  const handleKeyDown = ev => {
    if (ev.key === ' ' || ev.key === 'Enter') {
      ev.preventDefault()
      pausePlay()
    }
  }

  const videoContent = getVideoContent(
    video,
    videoRef,
    isIntersecting,
    pausePlay,
    handleKeyDown,
    videoUrl,
    poster
  )
  const bgSharp =
    backgroundImage?.localFile && getImage(backgroundImage.localFile)

  return (
    <div className="videoBackground-wrapper">
      {bgSharp && (
        <GatsbyImage
          className="videoBackground-bg"
          image={bgSharp}
          alt={backgroundImage.alternativeText || ''}
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
