import { Link } from "gatsby"
import React, { useEffect, useRef, useState } from "react"
import { Flipper, Flipped } from "react-flip-toolkit"
import MarkdownView from "react-showdown"
import { useTheme } from "../../context/themeContext"
import "./expandGrid.scss"
import { useLandingUrl } from "../../hooks"
import PropTypes from "prop-types"
import CustomImage from "../CustomImage/CustomImage"

const ExpandGrid = ({ data }) => {
  const { theme } = useTheme()
  const { title, subtitle, items } = data

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
      <div className="mx-auto sm:mx-3 pb-5 container">
        <section className="expandGrid">
          <div className="expandGrid-body">
            {title && <h2>{title}</h2>}
            {subtitle && <h3 className="px-md-3">{data.subtitle}</h3>}
            {items?.length > 0 && (
              <AnimatedList items={data?.items?.slice(0, 4)} />
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

ExpandGrid.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    callToAction: PropTypes.string,
    backgroundImage: PropTypes.shape({
      url: PropTypes.string
    }),
    backgroundImageDark: PropTypes.shape({
      url: PropTypes.string
    }),
    items: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
      landing_page: PropTypes.shape({
        slug: PropTypes.string.isRequired
      }),
      image: PropTypes.shape({
        alternativeText: PropTypes.string,
        url: PropTypes.string.isRequired,
        localFile: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            gatsbyImageData: PropTypes.object.isRequired
          })
        })
      })
    }))
  })
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
      onClick={() => onClick(index)}
    >
      <div className="listItem">
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
              <CustomImage
                image={data?.image}
                alt={data.image.alternativeText || 'Avatar image'}
                className='avatar'
              />
            </Flipped>
          </div>
        </Flipped>
      </div>
    </Flipped>
  )
}

ListItem.propTypes = {
  index: PropTypes.number,
  onClick: PropTypes.func,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alternativeText: PropTypes.string,
      localFile: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          gatsbyImageData: PropTypes.object.isRequired
        })
      })
    }).isRequired
  }).isRequired
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
              <h4>{data.title}</h4>
            </div>
            <Flipped
              flipId={`avatar-${index}`}
              stagger="card-image"
              delayUntil={createCardFlipId(index)}
            >
              <CustomImage
                image={data?.image}
                alt={data?.image?.alternativeText || 'Avatar image expanded'}
                className='avatar-expanded'
              />
            </Flipped>
            <div className={"additional-content "}>
              <div style={isFirst ? { opacity: "1" } : {}}>
                <h6>{data.title}</h6>
                {data?.text && (
                  <div className="additional-content-markdown">
                    <MarkdownView markdown={data.text}
                      dangerouslySetInnerHTML={{ __html: data.text }}
                    />
                  </div>
                )}
                {data?.landing_page && (
                  <Link to={getUrl(data.landing_page.slug)}>{data?.callToAction || 'Ver más'}</Link>
                )}
              </div>
            </div>
          </div>
        </Flipped>
      </div>
    </Flipped>
  )
}

ExpandedListItem.propTypes = {
  index: PropTypes.number,
  isFirst: PropTypes.bool,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    callToAction: PropTypes.string,
    landing_page: PropTypes.shape({
      slug: PropTypes.string.isRequired
    }),
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alternativeText: PropTypes.string,
      localFile: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          gatsbyImageData: PropTypes.object.isRequired
        })
      })
    }),
  })
}

const AnimatedList = ({ items }) => {
  const [itemsArray, setItemsArray] = useState({ items, focused: null })
  const [isFirst, setIsFirst] = useState(true)

  useEffect(() => {
    setItemsArray(prev => ({ ...prev, focused: items[0]?.id }))
  }, [items])

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
                  key={item.id}
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

AnimatedList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  )
}

export default ExpandGrid
