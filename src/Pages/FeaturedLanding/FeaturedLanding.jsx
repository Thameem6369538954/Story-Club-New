import React, { useEffect, useRef } from "react";
import styles from "./FeaturedLanding.module.css";
import { FaPlay } from "react-icons/fa";
import left from "./Images/section2/left.png";
import right from "./Images/section2/right.png";
// import { FiArrowRight } from "react-icons";
// import { IoIosArrowForward } from "react-icons/io";
import { TbLogin2 } from "react-icons/tb";
import { PiTelegramLogo } from "react-icons/pi";
import IntroductionSC from "../../Videos/IntroductionSC.mp4";
import Triel from "../../Videos/Triel.mp4";
import VideoPoster from "../../Components/VideoPoster/VideoPoster";

const LandingPage1 = () => {
  const h1Ref = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    const spanText = (text) => {
      let string = text.innerText;
      let spanned = "";
      for (let i = 0; i < string.length; i++) {
        if (string.substring(i, i + 1) === " ")
          spanned += string.substring(i, i + 1);
        else spanned += "<span>" + string.substring(i, i + 1) + "</span>";
      }
      text.innerHTML = spanned;

      let animations = text.querySelectorAll("span");
      animations.forEach((letter, i) => {
        letter.style.animationDelay = i * 0.1 + "s";
      });
    };

    if (h1Ref.current) {
      spanText(h1Ref.current);
    }

    if (pRef.current) {
      spanText(pRef.current);
    }
  }, []);

  return (
    <div
      className={styles.landingPage1}
      // style={{ height: "100vh" }}
    >
      {/* section 1 */}
      <div className={styles.section1}>
        <marquee className={styles.marquee}>
          <div className={styles.fle}>
            <div>
              <p>Connect with community |</p>
            </div>
            <div>
              <p>Start sharing your stories |</p>
            </div>
            <div>
              <p>Welcome the recognition |</p>
            </div>
            <div>
              <p>As you grow, join our featured profiles. |</p>
            </div>
          </div>
        </marquee>
      </div>

      {/* section 2 */}
      <div className={styles.section2}>
        <div className={styles.left}>
          <img src={left} alt="leftImg" />
        </div>

        <div className={styles.section2Content}>
          <div className={styles.section2ContentA}>
            <h1 ref={h1Ref} className={styles.animation}>
              Real People! <span>Real</span> Stories!
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "1.5rem",
              fontWeight: "bold",
              justifyContent: "center",
              marginTop: "-1rem",
            }}
          >
            {/* <p style={{ color: "red" }}>-</p> */}
            {/* <p>-----</p> */}
            {/* <p style={{ color: "red" }}>-</p> */}
          </div>
          {/* <p>Everybody has a Story to Tell...</p> */}
          <div className={styles.section2Video}>
            {/* <iframe
              title="Embedded Video"
              src=""
              // width="100%"
              // height="400"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe> */}
            <video controls style={{ width: "100%", borderRadius: 20 }}>
              <source
                src={IntroductionSC}
                type="video/mp4"
                autoPlay={false}
                controls={true}
              />
              Your browser does not support the video tag.
            </video>
          </div>


{/* <div>freeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</div> */}

          <button >
             <FaPlay />
          </button>
          
              <h3 style={{fontFamily:"sans-serif"}}>free</h3>
          {/* <div className={styles.slide}>
            <h4 className={styles.icon}>Slide to the next page.</h4>
            <IoIosArrowForward className={styles.icon} />
            <IoIosArrowForward className={styles.icon} />
          </div> */}
          {/* <div className={styles.section2Buttons}>
            <div className={styles.but}>
              <button>
                Audio Stories <FiArrowRight className={styles.icon} />
              </button>
            </div>
            <div className={styles.but}>
              <button>
                Video Stories <FiArrowRight className={styles.icon} />
              </button>
            </div>
          </div> */}
        </div>
        
        <div className={styles.right}>
          <img src={right} alt="rightImg" />
        </div>
      </div>
      {/* <div className={styles.bottomYellowBoxCon}>
        <div className={styles.bottomYellowBox}>
          <TbLogin2 /> <p>Publish your stories to reach millions</p>
        </div>
        <div className={styles.bottomYellowBox}>
          <PiTelegramLogo />
          <p>Publish your stories to reach millions</p>
        </div>
      </div> */}
   
    </div>
  );
};

export default LandingPage1;
