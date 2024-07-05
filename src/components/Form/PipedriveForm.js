import React, { useState, useEffect } from "react"
import MarkdownView from "react-showdown"
import Lottie from "react-lottie"
import "./Form.scss"
import PropTypes from "prop-types"
import CustomImage from "../CustomImage/CustomImage"

const PipedriveForm = ({ data }) => {
  const { title, content, form_url, image, animation } = data

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const isScriptLoaded = document.querySelector(
      `script[src="https://webforms.pipedrive.com/f/loader"]`
    )

    if (!isScriptLoaded) {
      const script = document.createElement("script")
      script.src = "https://webforms.pipedrive.com/f/loader"
      script.async = true
      script.defer = true

      script.onload = () => {
        setLoading(false)
      }

      document.body.appendChild(script)

      return () => {
        document.body.removeChild(script)
      }
    } else {
      setLoading(false)
    }
  }, [])

  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <section className="form">
      <div className="container d-flex px-lg-2 flex-wrap">
        <div className="col-12 col-md-6 pe-md-5">
          {title && <h2 className="title text-start">{title}</h2>}
          {content && (
            <MarkdownView
              markdown={content}
              className="form__content text-start"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
          <div className="form__img text-center text-md-start">
            {image ? (
              <CustomImage
                image={image}
                alt={image?.alternativeText || title}
                className={""}
                width={290}
                height={290}
              />
            ) : (
              <>
                {animation && (
                  <Lottie
                    options={{
                      ...defaultOptions,
                      animationData: animation,
                    }}
                  />
                )}
              </>
            )}
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div
            className="pipedriveWebForms form-wrapper"
            data-pd-webforms={form_url}
          >
            {loading && <div>Cargando...</div>}
          </div>
        </div>
      </div>
    </section>
  )
}

PipedriveForm.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    form_url: PropTypes.string.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alternativeText: PropTypes.string,
    }),
    animation: PropTypes.object,
  }),
}

export default PipedriveForm
