import { Link } from "gatsby"
import React, { useEffect, useRef, useState } from "react"
import { Flipper, Flipped } from "react-flip-toolkit"
import MarkdownView from "react-showdown"
import "./expandGrid.scss"

const ExpandGrid = ({ data }) => {
  return (
    <div
      className="p-3 mx-auto sm:mx-3 py-5 container"
      id={data.strapi_component + "-" + data.id}
    >
      <section className="expandGrid">
        <div className="expandGrid-body">
          <h2>{data.title}</h2>
          <h6 className="px-5">{data.subtitle}</h6>
          <AnimatedList items={data.items.slice(0, 4)} />
        </div>
      </section>
    </div>
  )
}

const createCardFlipId = index => `listItem-${index}`

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
              <h4>{data.title}</h4>
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
  return (
    <Flipped
      flipId={createCardFlipId(index)}
      stagger="card"
      onStart={el => {
        setTimeout(() => {
          el.classList.add("animated-in")
        }, 400)
      }}
    >
      <div className="listItem-expanded">
        <Flipped inverseFlipId={createCardFlipId(index)}>
          <div className="listItemContent-expanded">
            <div className="listItem-more-expanded">
              <p></p>
            </div>
            <Flipped
              flipId={`avatar-${index}`}
              stagger="card-image"
              delayUntil={createCardFlipId(index)}
            >
              <img alt="" src={data.image?.url} className="avatar-expanded" />
            </Flipped>
            <div
              className={"additional-content " + (isFirst ? "animated-in" : "")}
            >
              <div>
                <h4>{data.title}</h4>
                <MarkdownView markdown={data.text} />
                {data.landing_page && (
                  <Link to={"/" + data.landing_page.slug}>Ver más</Link>
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
