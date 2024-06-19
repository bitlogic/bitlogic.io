import React, { useState } from "react"
import Navbar from "./Navbar"
import NavbarItem from "./Navbar/NavbarItem"
import { Flipper } from "react-flip-toolkit"
import DropdownContainer from "./DropdownContainer"
import Dropdown from "./DropdownContainer/Dropdown"
import { useLandingUrl } from "../../../hooks"

const AnimatedNavbar = ({ navbarItems = [], duration }) => {

  const getUrl = useLandingUrl()

  const url = (item) => {
    if (item.dropdown) return ''

    const landing = getUrl(item?.landing_page?.slug);

    if(landing) return landing

    let slug = item?.url ? item.url : ''

    return slug
  }

  const navbarConfig = [
    ...navbarItems.map(navItem => {
      let res = {
        title: navItem.title,
        slug: url(navItem),
        dropdown: () => {
          if(navItem.dropdown) {
            return <Dropdown sections={navItem?.dropdownItems} topLevel={navItem?.toplevelItem} />
          }
          return <Dropdown sections={null} topLevel={null} />
        },
        isDropdown: navItem?.dropdown
      }

      return res
    }),
  ]

  const [activeIndex, setActiveIndex] = useState([])
  const [animationOut, setAnimationOut] = useState(null)

  const [animatingOutTimeout, setAnimatingOutTimeout] = useState(null)

  const resetDropdownState = i => {
    setActiveIndex(typeof i === "number" ? [i] : [])
    setAnimationOut(false)

    setAnimatingOutTimeout(null)
  }

  const onMouseEnter = i => {
    if (animatingOutTimeout) {
      clearTimeout(animatingOutTimeout)
      resetDropdownState(i)
      return
    }
    if (activeIndex[activeIndex.length - 1] === i) return

    setActiveIndex(prev => prev.concat(i))
    setAnimationOut(false)
  }

  const onMouseLeave = () => {
    setAnimationOut(true)
    setAnimatingOutTimeout(setTimeout(resetDropdownState, duration))
  }

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
              onMouseEnter={onMouseEnter}
              isDropdown={n?.isDropdown}
            >
              {currentIndex === index && (
                <DropdownContainer
                  direction={direction}
                  animatingOut={animationOut}
                  duration={duration}
                >
                  <CurrentDropdown />
                  {PrevDropdown && <PrevDropdown />}
                </DropdownContainer>
              )}
            </NavbarItem>
          )
        })}
      </Navbar>
    </Flipper>
  )
}

export default AnimatedNavbar