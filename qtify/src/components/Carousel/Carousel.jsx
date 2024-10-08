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
  const swiper = useSwiper();
  const [swiperInstance,setSwiperInstance] = useState(null);
  const [navigationButton, setNavigationButton] = useState({
    prev:"disabled",
    next:""
  });
  useEffect(()=>{
    if(swiperInstance){
      swiperInstance.slideTo(0);
    }
  },[data])

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
            <SwiperSlide key={album.id}>
              <AlbumCard album={album}/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Carousel;
