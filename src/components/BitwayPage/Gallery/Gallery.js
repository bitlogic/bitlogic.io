import React from "react";
import "./Gallery.scss";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

const layouts = {
  dos: '"gal0 gal0 gal1" "gal0 gal0 gal1"',
  cuatro: '"gal0 gal1 gal1" "gal0 gal2 gal3" "gal0 gal2 gal3"',
  cuatroinvertido: '"gal0 gal0 gal3" "gal1 gal2 gal3" "gal1 gal2 gal3"',
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
          style={{ gridTemplateAreas: layouts[elem.Type] }}
          key={elem.id}
        >
          {fillGrid(elem.Image, photos[elem.Type]).map((image, index) => {
            const prosImage = getImage(image.Image);
            const text = image.Text ? { textOverlay: image.Text } : {};
            return (
              <BgImage
                className={"bitway-gallery-" + index + " bitway-gallery-item"}
                image={prosImage}
                alt={image.Caption}
              >
                {image.Text && (
                  <div className="bitway-gallery-item-inner">{image.Text}</div>
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
