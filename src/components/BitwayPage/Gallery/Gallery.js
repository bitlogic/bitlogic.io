import React from "react";
import "./Gallery.scss";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

const layouts = {
  dos: {gridTemplateAreas: '"gal0 gal0 gal1" "gal0 gal0 gal1"', gridTemplateColumns: "2fr 25% 3fr" },
  cuatro: {gridTemplateAreas: '"gal0 gal1 gal1" "gal0 gal2 gal3" "gal0 gal2 gal3"', gridTemplateColumns: "2fr 25% 3fr" },
  cuatroinvertido: {gridTemplateAreas: '"gal0 gal0 gal3" "gal1 gal2 gal3" "gal1 gal2 gal3"',  gridTemplateColumns: "3fr 25% 2fr"},
};

const photos = {
  dos: 2,
  cuatro: 4,
  cuatroinvertido: 4,
};

const Gallery = ({ content }) => {
  return (
    <section className="bitway-gallery-container">
      {content.map((elem) => (
        <div
          className="bitway-gallery"
          style={layouts[elem.type]}
          key={elem.id}
        >
          {fillGrid(elem.galleryImage, photos[elem.type]).map((image, index) => {
            const prosImage = getImage(image.image);
            return (
              <BgImage
                className={"bitway-gallery-" + index + " bitway-gallery-item"}
                image={prosImage}
                alt={image.caption}
              >
                {image.text && (
                  <div className="bitway-gallery-item-inner">{image.text}</div>
                )}
              </BgImage>
            );
          })}
        </div>
      ))}
    </section>
  );
};

const fillGrid = (images, total) => {
  let newImagesArray = [];
  while (newImagesArray.length < total) {
    newImagesArray = [...newImagesArray, ...images];
  }
  return newImagesArray.slice(0, total);
};

export default Gallery;
