import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AlbumCard from "../Card/AlbumCard";
import Styles from "./Carousel.module.css";
import LeftButton from "./LeftButton/LeftButton";
import RightButton from "./RightButton/RightButton";
import { ReactComponent as LeftArrow } from "../../assets/LeftArrow.svg";

function Carousel({ data }) {
  return (
    <div className={Styles.wrapper}>
      <Swiper
        initialSlide={0}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={7}
        spaceBetween={2}
      >
        <LeftButton />
        <RightButton />
        {data.map((album) => {
          return (
            <SwiperSlide>
              <AlbumCard album={album} key={album.id} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Carousel;
