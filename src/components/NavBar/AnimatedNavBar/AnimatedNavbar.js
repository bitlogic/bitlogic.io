import React, { useState, useEffect, useCallback } from "react"
import Navbar from "./Navbar"
import NavbarItem from "./Navbar/NavbarItem"
import { Flipper } from "react-flip-toolkit"
import DropdownContainer from "./DropdownContainer"
import Dropdown from "./DropdownContainer/Dropdown"
import { useLandingUrl } from "../../../hooks"
import PropTypes from "prop-types"
import DropdownItem from "./DropdownContainer/DropdownItems"

const hasSubLandingPages = (navItem) => navItem?.dropdownItems?.some(
  item => item?.sub_landing_pages && item.sub_landing_pages.length > 0
)

function getDropdown(navItem) {
  if(hasSubLandingPages(navItem)){
    return () => 
      <DropdownItem
        sections={navItem?.dropdownItems.map(item => ({
          ...item,
          subItems: item?.sub_landing_pages,
        }))}
        topLevel={navItem?.toplevelItem}
      />
  } else {
    return () =>   
      navItem?.dropdown ? (
        <Dropdown
          sections={navItem?.dropdownItems}
          topLevel={navItem?.toplevelItem}
        />
      ) : (
        <Dropdown sections={null} topLevel={null} />
      )
  } 
}

const AnimatedNavbar = ({ navbarItems = [], duration }) => {
  const getUrl = useLandingUrl()

  const url = item => {
    if (item.dropdown) return ""

    const landing = getUrl(item?.landing_page?.slug)

    if (landing) return landing

    let slug = item?.url ? item.url : ""

    return slug
  }

  const navbarConfig = [
    ...navbarItems.map(navItem => {
      return {
        title: navItem.title,
        slug: url(navItem),
        dropdown: getDropdown(navItem),
        isDropdown: navItem?.dropdown,
        isDropdownItem: hasSubLandingPages(navItem),
      }
    }),
  ]

  const [activeIndex, setActiveIndex] = useState([])
  const [animationOut, setAnimationOut] = useState(false)

  const [animatingOutTimeout, setAnimatingOutTimeout] = useState(null)

  const resetDropdownState = useCallback(i => {
    setActiveIndex(typeof i === "number" ? [i] : [])
    setAnimationOut(false)
    setAnimatingOutTimeout(null)
  }, [])

  const onMouseEnter = useCallback(
    i => {
      if (animatingOutTimeout) {
        clearTimeout(animatingOutTimeout)
        resetDropdownState(i)
        return
      }
      if (activeIndex[activeIndex.length - 1] === i) return

      setActiveIndex(prev => prev.concat(i))
      setAnimationOut(false)
    },
    [animatingOutTimeout, activeIndex, resetDropdownState]
  )

  const onMouseLeave = useCallback(() => {
    setAnimationOut(true)
    setAnimatingOutTimeout(setTimeout(resetDropdownState, duration))
  }, [resetDropdownState, duration])

  useEffect(() => {
    return () => {
      if (animatingOutTimeout) {
        clearTimeout(animatingOutTimeout)
      }
    }
  }, [animatingOutTimeout])

  let CurrentDropdown
  let PrevDropdown
  let direction

  const currentIndex = activeIndex[activeIndex.length - 1]
  const prevIndex =
    activeIndex.length > 1 && activeIndex[activeIndex.length - 2]

  if (typeof currentIndex === "number")
    CurrentDropdown = navbarConfig[currentIndex].dropdown
  if (typeof prevIndex === "number") {
    PrevDropdown = navbarConfig[prevIndex].dropdown
    direction = currentIndex > prevIndex ? "right" : "left"
  }

  return (
    <Flipper
      flipKey={currentIndex}
      spring={duration === 300 ? "noWobble" : { stiffness: 10, damping: 10 }}
    >
      <Navbar onMouseLeave={onMouseLeave}>
        {navbarConfig.map((n, index) => {
          return (
            <NavbarItem
              to={n?.slug}
              key={n?.title}
              title={n?.title}
              index={index}
              onMouseEnter={() => onMouseEnter(index)}
              isDropdown={n?.isDropdown}
              isDropdownItem={n?.isDropdownItem}
            >
              {currentIndex === index ? (
                <DropdownContainer
                  direction={direction}
                  animatingOut={animationOut}
                  duration={duration}
                >
                  <CurrentDropdown />
                  {PrevDropdown && <PrevDropdown />}
                </DropdownContainer>
              ) : null}
            </NavbarItem>
          )
        })}
      </Navbar>
    </Flipper>
  )
}

AnimatedNavbar.propTypes = {
  duration: PropTypes.number.isRequired,
  navbarItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
      dropdown: PropTypes.bool,
      landing_page: PropTypes.shape({
        slug: PropTypes.string,
      }),
      toplevelItem: PropTypes.object,
      dropdownItems: PropTypes.array,
    })
  ),
}

export default AnimatedNavbar
