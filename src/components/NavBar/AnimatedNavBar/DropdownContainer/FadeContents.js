import React, { forwardRef } from "react"
import PropTypes from "prop-types"

const FadeContents = forwardRef(
  ({ children, animatingOut, direction }, ref) => (
    <div
      // prevent screen readers from reading out hidden content
      aria-hidden={animatingOut}
      ref={ref}
      style={{
        opacity: direction && !animatingOut ? 0 : 1,
        animationName: animatingOut ? "fade-backward" : "fade-forward",
      }}
      className="fade_content"
    >
      {children}
    </div>
  )
)

const propTypes = {
  duration: PropTypes.number,
  direction: PropTypes.oneOf(["right", "left"]),
  animatingOut: PropTypes.bool,
  children: PropTypes.node,
}

FadeContents.propTypes = propTypes

export default FadeContents
