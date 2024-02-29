import React, { useState } from "react";
import Styles from "../VideoPoster/VideoPoster.module.css";
import Slider from "react-slick";
import IntroductionSC from "../../Videos/IntroductionSC.mp4";
import Hiring from "../../Videos/Hiring.mp4";
const VideoPoster = () => {
  const [poster, setPotster] = useState([
    {
      id: 1,
      title: "INTRODUCTION OF STORY CLUB",
      discription: "a little boy changing his life",
      source: IntroductionSC,
    },
    {
      id: 2,
      title: "STORY CLUB IS HIRING",
      discription: "a little boy changing his life",
      source: IntroductionSC,
    },
    {
      id: 3,
      title: "WRITE YOUR STORY",
      discription: "a little boy changing his life",
      source: IntroductionSC,
    },
    {
      id: 4,
      title: "TELL YOUR STORY",
      discription: "a little boy changing his life",
      source: IntroductionSC,
    },
    {
      id: 5,
      title: "FLASHBACK",
      discription: "a little boy changing his life",
      source: IntroductionSC,
    },
  ]);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    responsive: [
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplaySpeed: 3000,
        },
      },
    ],
  };


  return (
    <div className={Styles.VideoPosterMain}>
      <div className="slider-container">
        <Slider {...settings}>
          {poster.map((items) => {
            return (
              <div className={Styles.posterVidio} key={items.id}>
                <video style={{ width:"70%", borderRadius: 20,marginLeft:"22%" }} controls>
                  <source
                    src={items.source}
                    type="video/mp4"
                    autoPlay={false}
                    controls={true}
                  />
                  Your browser does not support the video tag.
                </video>
                <p>{items.title}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default VideoPoster;
