import React from 'react'
import { useRef } from 'react';
import FeaturedLanding from "../../Pages/FeaturedLanding/FeaturedLanding"
import LandingPage2 from '../LandingPage2/LandingPage2';
import styles from "../FeaturedStrories/FeaturedStories.module.css"

import VideoPoster from '../../Components/VideoPoster/VideoPoster';
import { FaPlay } from "react-icons/fa";

const FeaturedStories = () => {
  const sliderRef = useRef(null);

  const handleMouseWheel = (e) => {
    const delta = e.deltaY;

    if (delta > 0) {
      sliderRef.current.slickNext();
    } else {
      sliderRef.current.slickPrev();
    }
  };

  // const settings = {
  //   dots: true,
  //   dotsClass: `${styles["dots-container"]}`,
  //   infinite: true,
  //   speed: 1200,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   customPaging: function (i) {
  //     return <button className={styles.dot}></button>;
  //   },
  //   appendDots: (dots) => (
  //     <ul className={styles["custom-dots"]}> {dots} </ul> // Wrap dots in ul element
  //   ),
  //   adaptiveHeight: true,
  // };

  return (
    <div className={styles.sliderWrapper} onWheel={handleMouseWheel}>
      {/* <FeaturedLanding />
      <VideoPoster />
<div className={styles.FsButton}>
      <button className={styles.btn}>
            More About Us <FaPlay />
      </button>
</div> */}

      {/* <LandingPage2 /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default FeaturedStories