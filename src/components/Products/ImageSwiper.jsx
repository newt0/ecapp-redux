import React, { useState } from "react";
import Swiper from "react-id-swiper";
import { NoImage } from "../../assets/img/src/no_image.png";
import "swiper/css/swiper.css";

const ImageSwiper = (props) => {
  const [params] = useState({
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickbale: true,
      dynamicBullets: true,
    },
    navigation: {
      nextElement: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  });

  const images = props.images;

  return (
    <Swiper {...params}>
      {images.length === 0 ? (
        <div className="p-media__thumb">
          <img src={NoImage} alt="noimage" />
        </div>
      ) : (
        images.map((image) => (
          <div className="p-media__thumb">
            <img src={image.path} alt="ProductPhoto" key={image.path} />
          </div>
        ))
      )}
    </Swiper>
  );
};

export default ImageSwiper;
