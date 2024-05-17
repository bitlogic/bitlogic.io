import { Link } from "gatsby"
import React, { useEffect, useRef, useState } from "react"
import { Flipper, Flipped } from "react-flip-toolkit"
import MarkdownView from "react-showdown"
import { useTheme } from "../../context/themeContext"
import "./expandGrid.scss"
import { useLandingUrl } from "../../hooks"

const ExpandGrid = ({ data }) => {
  const { theme } = useTheme()

  const backgroundImage = data.backgroundImage?.url
  const backgroundImageDark = data.backgroundImageDark?.url

  return (
    <div
      className="expandGrid-background"
      style={{
        backgroundImage: `url(${theme === "dark" && backgroundImageDark
          ? backgroundImageDark
          : backgroundImage
          })`,
      }}
    >
      <div
        className="mx-auto sm:mx-3 pb-5 container"
        id={data.strapi_component + "-" + data.id}
      >
        <section className="expandGrid">
          <div className="expandGrid-body">
            <h2>{data.title}</h2>
            <h6 className="px-md-3">{data.subtitle}</h6>
            <AnimatedList items={data.items.slice(0, 4)} />
          </div>
        </section>
      </div>
    </div>
  )
}

const createCardFlipId = index => `listItem-${index}`

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop - 40)

const shouldFlip = index => (prev, current) =>
  index === prev || index === current

const ListItem = ({ index, onClick, data }) => {
  return (
    <Flipped
      flipId={createCardFlipId(index)}
      stagger="card"
      shouldInvert={shouldFlip(index)}
    >
      <div className="listItem" onClick={() => onClick(index)}>
        <Flipped inverseFlipId={createCardFlipId(index)}>
          <div className="listItemContent">
            <div className="listItem-more">
              <h5>{data.title}</h5>
            </div>
            <Flipped
              flipId={`avatar-${index}`}
              stagger="card-image"
              shouldFlip={shouldFlip(index)}
              delayUntil={createCardFlipId(index)}
            >
              <img alt="" src={data.image?.url} className="avatar" />
            </Flipped>
          </div>
        </Flipped>
      </div>
    </Flipped>
  )
}

const ExpandedListItem = ({ index, data, isFirst }) => {
  const getUrl = useLandingUrl()
  const scrollRef = useRef(null)
  return (
    <Flipped
      flipId={createCardFlipId(index)}
      stagger="card"
      onStart={el => {
        if (!isFirst) scrollToRef(scrollRef)
        setTimeout(() => {
          el.classList.add("animated-in")
        }, 400)
      }}
    >
      <div ref={scrollRef} className="listItem-expanded">
        <Flipped inverseFlipId={createCardFlipId(index)}>
          <div className="listItemContent-expanded">
            <div className="listItem-more-expanded">
              <h5>{data.title}</h5>
            </div>
            <Flipped
              flipId={`avatar-${index}`}
              stagger="card-image"
              delayUntil={createCardFlipId(index)}
            >
              <img alt="" src={data.image?.url} className="avatar-expanded" />
            </Flipped>
            <div className={"additional-content "}>
              <div style={isFirst ? { opacity: "1" } : {}}>
                <h4>{data.title}</h4>
                <div className="additional-content-markdown">
                  <MarkdownView markdown={data.text} />
                </div>
                {data.landing_page && (
                  <Link to={getUrl(data.landing_page.slug)}>Ver más</Link>
                )}
              </div>
            </div>
          </div>
        </Flipped>
      </div>
    </Flipped>
  )
}

const AnimatedList = ({ items }) => {
  const [itemsArray, setItemsArray] = useState({ items, focused: null })
  const [isFirst, setIsFirst] = useState(true)
  useEffect(() => {
    setItemsArray(prev => ({ ...prev, focused: items[0].id }))
  }, [])

  const onClick = index => {
    for (let i = 0; i < items.length; i++) {
      const item = itemsArray.items[i]
      if (item.id === index) {
        setIsFirst(false)
        setItemsArray(prevItems => ({
          items: [
            item,
            ...prevItems.items.slice(0, i),
            ...prevItems.items.slice(i + 1),
          ],
          focused: item.id,
        }))
        break
      }
    }
  }
  return (
    <Flipper
      flipKey={itemsArray.focused}
      className="staggered-list-content"
      spring="noWobble"
      staggerConfig={{
        card: {
          reverse: itemsArray.focused !== null,
        },
      }}
      decisionData={itemsArray.focused}
    >
      <ul className="list">
        {itemsArray.items.map(item => {
          return (
            <>
              {item.id === itemsArray.focused ? (
                <ExpandedListItem
                  isFirst={isFirst}
                  index={itemsArray.focused}
                  data={item}
                  scrollToRef={scrollToRef}
                />
              ) : (
                <ListItem
                  index={item.id}
                  key={item.id}
                  onClick={onClick}
                  data={item}
                />
              )}
            </>
          )
        })}
      </ul>
    </Flipper>
  )
}

export default ExpandGrid
