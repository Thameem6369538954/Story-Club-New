import React, { useState } from "react";
import Styles from "../VideoPoster/VideoPoster.module.css";
import Slider from "react-slick";
import IntroductionSC from "../../Videos/IntroductionSC.mp4";
import Hiring from "../../Videos/Hiring.mp4";
const VideoPoster = () => {
  const [poster, setPotster] = useState([
    {
      id: 1,
      title: "a Little boy",
      discription: "a little boy changing his life",
      source: IntroductionSC,
    },
    {
      id: 2,
      title: "A Little boy",
      discription: "a little boy changing his life",
      source: IntroductionSC,
    },
    {
      id: 3,
      title: "A Little boy",
      discription: "a little boy changing his life",
      source: IntroductionSC,
    },
    {
      id: 4,
      title: "A Little boy",
      discription: "a little boy changing his life",
      source: IntroductionSC,
    },
    {
      id: 5,
      title: "A Little boy",
      discription: "a little boy changing his life",
      source: IntroductionSC,
    },
  ]);

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
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
