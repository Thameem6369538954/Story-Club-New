import React, { useState } from "react";
import Styles from "../VideoPoster/VideoPoster.module.css";
import Slider from "react-slick";
import IntroductionSC from "../../Videos/IntroductionSC.mp4";
import Hiring from "../../Videos/Hiring.mp4";
import { FaEye } from "react-icons/fa";
import { BiMessageAltDetail } from "react-icons/bi";
import { TiHeartFullOutline } from "react-icons/ti";
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
    dots: false,
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
                <div className={Styles.videoBox}>
                  <video
                    style={{
                      width: "80%",
                      borderRadius: 20,
                    }}
                    controls
                  >
                    <source
                      src={items.source}
                      type="video/mp4"
                      autoPlay={false}
                      controls={true}
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div className={Styles.VideoDetails}>
                    <div>
                      <p>{items.title}</p>
                    </div>
                    <ul className={Styles.Like}>
                      <li>
                        <FaEye style={{ color: "#49883A", fontSize: "20px" }} />
                        213
                      </li>
                      <li>
                        <BiMessageAltDetail
                          style={{ color: "#50A7BD", fontSize: "20px" }}
                        />
                        22
                      </li>
                      <li>
                        <TiHeartFullOutline
                          style={{ color: "#DC6E66", fontSize: "20px" }}
                        />
                        50
                      </li>
                    </ul>
                  </div>
                  <p>{items.title}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default VideoPoster;
