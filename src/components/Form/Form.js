import React, { useEffect } from "react"
import MarkdownView from "react-showdown"
import HubspotForm from "react-hubspot-form"
import Lottie from 'react-lottie'
import "./Form.scss"

const Form = ({ location, data }) => {
  const title = data?.title
  const content = data?.content
  const anchor = data?.anchor
  const portalId = data?.portalId
  const formId = data?.formId
  const image = data?.image
  const animation = data?.animation

  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
  }

  useEffect(() => {
    window.addEventListener("message", handler)
    return () => {
      window.removeEventListener("message", handler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handler(event) {
    if (
      event.origin === "https://forms.hsforms.com" ||
      event.origin === "https://site.dev.bitlogic.io" ||
      event.origin === "https://www.bitlogic.io" ||
      event.origin === "https://preprod.d2mi1do1cquuwf.amplifyapp.com"
    ) {
      if (
        event.data.type === "hsFormCallback" &&
        event.data.eventName === "onFormReady"
      ) {
        const hsFormId = "hsForm_" + formId
        const formData = document?.getElementById("hs-form-iframe-0")
          ?.contentWindow?.document?.forms[hsFormId]
        if (formData) {
          setInputValue(formData, "servicio_origen", location.pathname)
        }
      }
    }
  }

  const jqueryChange = elem => {
    var event = new Event("HTMLEvents", { bubbles: true, cancelable: false })
    elem.dispatchEvent(event)
  }

  const setInputValue = (form, inputName, value) => {
    const input = form?.[inputName]
    if (input) {
      input.value = value
      jqueryChange(input)
    }
  }

  return (
    <div id={anchor} className="form">
      <div className="container d-flex px-lg-2 flex-wrap">
        <div className="col-12 col-md-6 pe-md-5">
          {title && (
            <h2 className="title text-start">{title}</h2>
          )}
          {content && (
            <MarkdownView
              markdown={content}
              className="form__content text-start"
            />
          )}
          <div className="form__img text-center text-md-start">
            {image?.url ?
              <img
                src={image?.url} alt="hero"
              /> :
              <>
                {animation && <Lottie options={{
                  ...defaultOptions,
                  animationData: animation,
                }}
                />}
              </>
            }
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="hubspot-form-wrapper">
            <HubspotForm portalId={portalId} formId={formId} css="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
