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
function getQS(name) {
  if (typeof window === "undefined") return null
  return new URLSearchParams(window.location.search).get(name)
}


function resolvePoster(poster, image) {
  const posterLocal =
    poster?.localFile ||
    poster?.data?.attributes?.localFile ||
    null
  const sharp = posterLocal ? getImage(posterLocal) : null

  const rawUrl =
    poster?.url ||
    poster?.data?.attributes?.url ||
    poster?.formats?.large?.url ||
    poster?.formats?.medium?.url ||
    poster?.formats?.small?.url ||
    poster?.formats?.thumbnail?.url ||
    null

  const toAbs = u =>
    !u ? null : (u.startsWith("http")
      ? u
      : `https://strapi-s3-bitlogic.s3.sa-east-1.amazonaws.com${u}`)

  const url = toAbs(rawUrl)

  const imageSharp = image?.localFile ? getImage(image.localFile) : null

  return { sharp: sharp || imageSharp, url }
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
  const { sharp: pSharp, url: pUrl } = resolvePoster(posterData, image)
  const posterUrl = pUrl || pSharp?.images?.fallback?.src

  const url = videoUrl?.replace("watch?v=", "embed/")
  let code = url?.substring(url.lastIndexOf("/") + 1) || ""
  const codeIndex = code.indexOf("?")
  if (codeIndex !== -1) code = code.substring(0, codeIndex)

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
        style={{
          width: "100%",
          maxWidth: "100vw",
          height: "auto",
          objectFit: "cover",
          aspectRatio: "16/9",
          display: "block",
          borderRadius: "5px",
        }}
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
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        style={{
          width: "100%",
          maxWidth: "100vw",
          height: "auto",
          objectFit: "cover",
          aspectRatio: "16/9",
          display: "block",
          borderRadius: "5px",
        }}
      />
    )
  }

  if (pSharp) {
    return (
      <GatsbyImage
        className="video-poster"
        image={pSharp}
        alt={posterData?.alternativeText || "Video poster"}
        loading="eager"
        style={{ width: "100%", maxWidth: "100vw", height: "auto" }}
      />
    )
  }

  return null
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

  const forced = getQS("forceOldIOS") === "1"
  const initialIsOldIOS =
    forced ||
    (typeof navigator !== "undefined" && /iPhone/.test(navigator.userAgent) && isIOSPriorTo("17.4"))
  const [isOldIOS] = useState(initialIsOldIOS)

  const [isVideoPause, setIsVideoPause] = useState(false)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const videoRef = useRef(null)

  const pausePlay = () => {
    if (isVideoPause) videoRef.current?.play()
    else videoRef.current?.pause()
    setIsVideoPause(prev => !prev)
  }

  const handleKeyDown = event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      pausePlay()
    }
  }
  useEffect(() => {
    if (isOldIOS) return

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
    return () => observer.disconnect()
  }, [isOldIOS])

  useEffect(() => {
    localStorage.setItem("videoPaused", isVideoPause)
  }, [isVideoPause])
  if (isOldIOS) {
    const { sharp: posterSharp, url: posterFromUrl } = resolvePoster(poster, image)

    return (
      <div
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage.url})` : "",
          backgroundRepeatY: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="container videoBackground-container">
          <section className="videoBackground" key="poster">
            {posterSharp ? (
              <GatsbyImage
                className="video-poster"
                image={posterSharp}
                alt={poster?.alternativeText || "Video poster"}
                loading="eager"
                style={{ width: "100%", maxWidth: "100vw", height: "auto" }}
              />
            ) : posterFromUrl ? (
              <img
                className="video-poster"
                src={posterFromUrl}
                alt={poster?.alternativeText || "Video poster"}
                loading="eager"
                style={{
                  width: "100%",
                  maxWidth: "100vw",
                  height: "auto",
                  display: "block",
                  borderRadius: "5px",
                  objectFit: "cover",
                  aspectRatio: "16/9",
                }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  maxWidth: "100vw",
                  aspectRatio: "16/9",
                  borderRadius: "5px",
                  background: "#2e2e2e",
                  display: "grid",
                  placeItems: "center",
                  color: "#ccc",
                  fontSize: 14,
                }}
              >
                (sin poster disponible)
              </div>
            )}

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
        <section className="videoBackground" key="video">
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
    video: PropTypes.shape({
      url: PropTypes.string,
      mime: PropTypes.string,
    }),
    videoUrl: PropTypes.string,
    description: PropTypes.string,
    backgroundImage: PropTypes.shape({ url: PropTypes.string }),
    image: PropTypes.shape({
      alternativeText: PropTypes.string,
      localFile: PropTypes.object,
    }),
    poster: PropTypes.shape({
      url: PropTypes.string,
      alternativeText: PropTypes.string,
      localFile: PropTypes.shape({
        childImageSharp: PropTypes.object,
      }),
      formats: PropTypes.object,
      data: PropTypes.shape({
        attributes: PropTypes.shape({
          url: PropTypes.string,
          localFile: PropTypes.object,
        }),
      }),
    }),
    button: PropTypes.shape({
      content: PropTypes.string,
      url: PropTypes.string,
      landing_page: PropTypes.shape({
        slug: PropTypes.string,
      }),
    }),
  }),
}

export default VideoBackground
