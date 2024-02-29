import React from 'react'
import Styles from "../LandingPage3/LandingPage3.module.css"
import { FaPlay } from "react-icons/fa";
import VideoPoster from '../../Components/VideoPoster/VideoPoster';
import { NavLink, useNavigate } from 'react-router-dom';
const Landingpage3 = () => {
  const navigate= useNavigate();
  return (
    <div className={Styles.LandingPage3Main}>
      <button onClick={()=>navigate('/LandingPage2')} className={Styles.btn}>
            Enter Your Story Club
          </button>
        <h1>A few free videos just for you</h1>
        
         <VideoPoster />
         <div className={Styles.TwoButtons}>
          
          <button className={Styles.btn}>
            More About Us <FaPlay />
          </button>
         </div>

    </div>
  )
}

export default Landingpage3