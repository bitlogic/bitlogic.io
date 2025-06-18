import React, { useEffect, useRef, useState } from "react"
import "./videoBackground.scss"
import CustomLink from "../CustomLink/CustomLink"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function getIOSVersion() {
  if (typeof window === "undefined" || typeof navigator === "undefined") { return null; }
  const userAgent = navigator.userAgent;
  const regex = /iPhone.*OS (\d+)_?(\d+)_?(\d+)?/;
  const iosMatch = regex.exec(userAgent);
  if (iosMatch) {
    const major = parseInt(iosMatch[1], 10);
    const minor = parseInt(iosMatch[2], 10);
    const patch = iosMatch[3] ? parseInt(iosMatch[3], 10) : 0;
    return { major, minor, patch };
  } else {
    return null;
  }
}

function isIOSPriorTo(version) {
  const currentVersion = getIOSVersion();
  if (!currentVersion) return false;
  const [majorVersion, minorVersion] = version.split(".").map(Number);
  if (currentVersion.major < majorVersion) return true;
  if (currentVersion.major > majorVersion) return false;
  if (currentVersion.minor < minorVersion) return true;
  if (currentVersion.minor > minorVersion) return false;
  return currentVersion.patch < 0;
}

function getVideoContent(video, videoRef, isIntersecting, pausePlay, handleKeyDown, videoUrl, image) {
  let videoContent = null;
  const imageData = image ? getImage(image.localFile) : undefined;
  const url = videoUrl?.replace("watch?v=", "embed/")
  let code = url?.substring(url?.lastIndexOf("/") + 1, url?.length)
  const codeIndex = code?.indexOf("?")
  code = (codeIndex !== -1 && code !== undefined) ? code.substring(0, code.indexOf("?")) : code;

  if (!isIOSPriorTo("17.4")) {
    if (video?.url !== null && video?.url !== undefined) {
      videoContent = (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          tabIndex={0}
          controls={false}
          autoPlay={isIntersecting}
          poster="/posterBitlogic.webp"
          preload="auto"
          onClick={pausePlay}
          onKeyDown={handleKeyDown}
        >
          {isIntersecting && <source src={video.url} type={video?.mime} />}
        </video>
      );
    } else if (videoUrl !== null && videoUrl !== undefined) {
      videoContent = (
        <iframe
          className="video"
          loading="lazy"
          type="text/html"
          srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;
          width:100%;height:100%;object-fit: cover;top:0;bottom:0}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;margin:auto;text-shadow:0 0 0.5em black}</style>
          <a href=${url + "?rel=0"}>
          <img src=https://img.youtube.com/vi/${code}/hqdefault.jpg alt='Video' height='100%'>
          <span>▶</span></a>`}
          src={url + "?rel=0"}
          frameBorder="0"
          allowFullScreen
          title="benefits_video"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
        ></iframe>
      );
    }
  } else {
    videoContent = imageData
      ? <GatsbyImage width={290} height={200} className="image" image={imageData} alt={image.alternativeText || "Image"} />
      : <div><br /></div>;
  }

  return videoContent;
}

const VideoBackground = ({ data }) => {
  const { image, video, description, button, backgroundImage, videoUrl } = data;
  const [isVideoPause, setIsVideoPause] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const videoRef = useRef(null);

  const pausePlay = () => {
    if (isVideoPause) {
      videoRef?.current?.play();
    } else {
      videoRef?.current?.pause();
    }
    setIsVideoPause(prev => !prev);
  };

  const handleKeyDown = event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      pausePlay();
    }
  };

  useEffect(() => {
    const videoElement = videoRef?.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(videoRef?.current);
        }
      },
      {
        rootMargin: "0px 0px 200px 0px",
        threshold: 0.1,
      }
    );

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  useEffect(() => {
    const isVideoPauseLocal = typeof window !== "undefined" ? localStorage.getItem("videoPaused") : undefined;
    if (isVideoPauseLocal === "true") {
      videoRef?.current?.pause();
      setIsVideoPause(isVideoPauseLocal);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("videoPaused", isVideoPause);
  }, [isVideoPause]);

  const videoContent = getVideoContent(video, videoRef, isIntersecting, pausePlay, handleKeyDown, videoUrl, image);

  return (
    <div
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage?.url})` : "",
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
                  url={button?.url}
                  landing={button?.landing_page}
                  className=""
                />
              )}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

VideoBackground.propTypes = {
  data: PropTypes.shape({
    video: PropTypes.shape({
      url: PropTypes.string.isRequired,
      mime: PropTypes.string.isRequired,
    }),
    videoUrl: PropTypes.string,
    description: PropTypes.string,
    backgroundImage: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }),
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alternativeText: PropTypes.string,
      localFile: PropTypes.shape({
        childImageSharp: PropTypes.object.isRequired,
      })
    }),
    button: PropTypes.shape({
      content: PropTypes.string.isRequired,
      url: PropTypes.string,
      landing_page: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }),
    }),
  }),
};

export default VideoBackground;
