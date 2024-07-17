import React, { useState, useEffect } from "react"
import "./BannerRedirect.scss"
import { MdClose } from "react-icons/md"

function BannerRedirect() {
  const [isOpen, setIsOpen] = useState(true)

  const REDIRECT = Object.freeze({
    title: `Would you like to visit our English site?`,
    url: "https://en.bitlogic.io",
    callToAction: "Let´s go!",
  })

  const closeBanner = () => {
    setIsOpen(false)

    if (typeof window !== "undefined") {
      localStorage.setItem("BannerRedirect", "closed")
    }
  }

  const userLanguage = typeof window !== "undefined" ? navigator?.language : ""

  useEffect(() => {
    if (userLanguage?.startsWith("es")) {
      closeBanner()
    }
  }, [userLanguage])

  const bannerStorage =
    typeof window !== "undefined"
      ? localStorage.getItem("BannerRedirect")
      : undefined

  if (bannerStorage === "closed" || !isOpen) return null

  return (
    <section className="BannerRedirect container">
      <div className="BannerRedirect__wrapper">
        <div className="d-flex flex-direction-row">
          <h6>{REDIRECT.title}</h6>
          <button aria-label="Close Banner" onClick={() => closeBanner()}>
            <MdClose />
          </button>
        </div>
        <button
          className="BannerRedirect__wrapper__btn"
          onClick={() => closeBanner()}
        >
          <a href={REDIRECT.URL}>{REDIRECT.callToAction}</a>
        </button>
      </div>
    </section>
  )
}

export default BannerRedirect
