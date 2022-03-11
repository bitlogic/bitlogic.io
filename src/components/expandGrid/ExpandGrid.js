import React, { useRef, useState } from "react"
import { Flipper, Flipped } from "react-flip-toolkit"
import "./expandGrid.scss"

const ExpandGrid = ({ data }) => {
  return (
    <section className="expandGrid">
      <div className="expandGrid-body">
        <h2>{data.title}</h2>
        <h4>{data.subtitle}</h4>
        <AnimatedList items={data.items} />
      </div>
    </section>
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
            <Flipped
              flipId={`avatar-${index}`}
              stagger="card-image"
              shouldFlip={shouldFlip(index)}
              delayUntil={createCardFlipId(index)}
            >
              <img
                alt=""
                src={data.image?.url}
                className="avatar"
              />
            </Flipped>
          </div>
        </Flipped>
      </div>
    </Flipped>
  )
}

const ExpandedListItem = ({ index, onClick, data }) => {
  const scrollRef = useRef(null)

  const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop - 40)

  return (
    <Flipped
      flipId={createCardFlipId(index)}
      stagger="card"
      onStart={el => {
        scrollToRef(scrollRef)
        setTimeout(() => {
          el.classList.add("animated-in")
        }, 400)
      }}
      onExit={() => scrollToRef(scrollRef)}
    >
      <div
        ref={scrollRef}
        className="listItem-expanded"
        onClick={el => {
          onClick(index)
        }}
      >
        <Flipped inverseFlipId={createCardFlipId(index)}>
          <div className="listItemContent-expanded">
            <Flipped
              flipId={`avatar-${index}`}
              stagger="card-image"
              delayUntil={createCardFlipId(index)}
            >
              <img
                alt=""
                src={data.image?.url}
                className="avatar-expanded"
              />
            </Flipped>

            <div className="additional-content">
              <div>
                <p>{data.text}</p>
              </div>
            </div>
          </div>
        </Flipped>
      </div>
    </Flipped>
  )
}

const AnimatedList = ({ items }) => {
  const [focused, setFocused] = useState(null)
  const onClick = index => {
    setFocused(focused === index ? null : index)
  }
  return (
    <Flipper
      flipKey={focused}
      className="staggered-list-content"
      spring="noWobble"
      staggerConfig={{
        card: {
          reverse: focused !== null,
        },
      }}
      decisionData={focused}
    >
      <ul className="list">
        {items.map((item, index) => {
          return (
            <>
              {index === focused ? (
                <ExpandedListItem
                  index={focused}
                  onClick={onClick}
                  data={item}
                />
              ) : (
                <ListItem
                  index={index}
                  key={index}
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
