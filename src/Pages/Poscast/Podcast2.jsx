import React from "react";
import Styles from "../../Pages/Poscast/Podcast2.module.css";
import { HiArrowRight } from "react-icons/hi";
import { FaEye } from "react-icons/fa";
import { BiMessageAltDetail } from "react-icons/bi";
import { TiHeartFullOutline } from "react-icons/ti";
import VideoPoster from "../../Components/VideoPoster/VideoPoster";
import IntroductionSC from "../../Videos/IntroductionSC.mp4";
const Podcast2 = () => {
  return (
    <div>
      <div className={Styles.PodcastMain}>
        <h1>Watch Our Great Podcast's</h1>
        {/* <div className={Styles.Underline}>
          <span style={{ color: "#DC6E66", margin: "10px" }}>_</span>
          <span>_ _ _ _ _ _ _ _</span>{" "}
          <span style={{ color: "#DC6E66", margin: "10px" }}>_</span>
        </div> */}
        {/* <div className={Styles.yellowBoard}>
          <div className={Styles.yellowBoardA}>
            <img src={Rocket} alt="" />
            <p>Publish your stories to reach millions </p>
            <HiArrowRight />
          </div>
          <div className={Styles.yellowBoardA}>
            <img src={Rocket} alt="" />
            <p>Publish your stories to reach millions </p>
            <HiArrowRight />
          </div>
        </div> */}
        {/* section-2 */}
        <div className={Styles.section2}>
          <div className={Styles.MainVideoBox}>
            <video style={{ width: "60%", borderRadius: 20 }} controls>
              <source src={IntroductionSC} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className={Styles.VideoDetails}>
              {/* <h1 className={Styles.Heading}>Sunny mornings</h1> */}
              <h1>3 Hours to Change your Life Forever</h1>
              <div className={Styles.Videocate}>
                <ul className={Styles.vidul}>
                  <li>Motivational</li>
                  <li>02:30 am</li>
                  <li>Video</li>
                </ul>
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
                      style={{ color: "#A42B22", fontSize: "20px" }}
                    />
                    50
                  </li>
                </ul>
                <p>
                  Seize newfound opportunities, embrace change, cultivate
                  passions, forge connections, and commit to growth; transform
                  in three hours, redefine your life.
                </p>
                <button className={Styles.btn}>Play Now</button>
              </div>
            </div>
          </div>
          <h3>Our Trending Podcast</h3>
          <VideoPoster />
        </div>
      </div>
    </div>
  );
};

export default Podcast2;
