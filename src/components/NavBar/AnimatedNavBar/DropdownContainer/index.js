import React, { Component, Children, createRef } from "react"
import PropTypes from "prop-types"
import { Flipped } from "react-flip-toolkit"
import FadeContents from "./FadeContents"

const getFirstDropdownSectionHeight = el => {
  if (
    !el?.querySelector("*[data-first-dropdown-section]")
  )
    return 0
  return el.querySelector("*[data-first-dropdown-section]").offsetHeight
}

const updateAltBackground = ({
  altBackground,
  prevDropdown,
  currentDropdown,
}) => {
  const prevHeight = getFirstDropdownSectionHeight(prevDropdown)
  const currentHeight = getFirstDropdownSectionHeight(currentDropdown)

  const immediateSetTranslateY = (el, translateY) => {
    el.style.transform = `translateY(${translateY}px)`
    el.style.transition = "transform 0s"
    requestAnimationFrame(() => (el.style.transitionDuration = ""))
  }

  if (prevHeight) {
    // transition the grey ("alt") background from its previous height to its current height
    immediateSetTranslateY(altBackground, prevHeight)
    requestAnimationFrame(() => {
      altBackground.style.transform = `translateY(${currentHeight}px)`
    })
  } else {
    // just immediately set the background to the appropriate height
    // since we don't have a stored value
    immediateSetTranslateY(altBackground, currentHeight)
  }
}

class DropdownContainer extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    animatingOut: PropTypes.bool,
    direction: PropTypes.oneOf(["left", "right"]),
    duration: PropTypes.number,
  }

  currentDropdownEl = createRef()
  prevDropdownEl = createRef()

  componentDidMount() {
    updateAltBackground({
      altBackground: this.altBackgroundEl,
      prevDropdown: this.prevDropdownEl.current,
      currentDropdown: this.currentDropdownEl.current,
      duration: this.props.duration,
    })
  }

  render() {
    const { children, direction, animatingOut, duration } = this.props
    const [currentDropdown, prevDropdown] = Children.toArray(children)
    return (
      <div
        style={
          !animatingOut && direction
            ? {}
            : {
                animationName: animatingOut
                  ? "dropdown_root-backward"
                  : "dropdown_root-forward",
              }
        }
        className="dropdown_root"
      >
        <Flipped flipId="dropdown-caret">
          <div />
        </Flipped>
        <Flipped flipId="dropdown">
          <div className="dropdown_root-background">
            <Flipped inverseFlipId="dropdown">
              <div className="dropdown_root-inverted">
                <div
                  className="dropdown_root-background-alt"
                  ref={el => (this.altBackgroundEl = el)}
                  duration={duration}
                />
                <FadeContents
                  direction={direction}
                  duration={duration}
                  ref={this.currentDropdownEl}
                >
                  {currentDropdown}
                </FadeContents>
              </div>
            </Flipped>

            <Flipped inverseFlipId="dropdown" scale>
              <div
                className="dropdown_root-inverted"
                style={{ position: "absolute" }}
              >
                {prevDropdown && (
                  <FadeContents
                    animatingOut
                    direction={direction}
                    duration={duration}
                    ref={this.prevDropdownEl}
                  >
                    {prevDropdown}
                  </FadeContents>
                )}
              </div>
            </Flipped>
          </div>
        </Flipped>
      </div>
    )
  }
}

export default DropdownContainer
