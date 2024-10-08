import React, { useEffect, useState } from 'react';
import {ReactComponent as LeftArrow} from "../../../assets/LeftArrow.svg";
import Styles from "./LeftButton.module.css";
import { useSwiper } from 'swiper/react';

function LeftButton() {
    const swiper = useSwiper();
    const [isBeginning,setIsBeginning] = useState(swiper.isBeginning);

    useEffect(()=>{
        swiper.on("slideChange",()=>{
            setIsBeginning(swiper.isBeginning);
        })
    },[swiper]);
  return (
    <div className={Styles.leftNavigation}>
        {!isBeginning && <LeftArrow onClick={()=>swiper.slidePrev()}/>}
    </div>
  )
}

export default LeftButton;