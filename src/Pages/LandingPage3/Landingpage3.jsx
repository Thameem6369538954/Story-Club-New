import React from 'react'
import Styles from "../LandingPage3/LandingPage3.module.css"
import { FaPlay } from "react-icons/fa";
import VideoPoster from '../../Components/VideoPoster/VideoPoster';
import { NavLink } from 'react-router-dom';
const Landingpage3 = () => {
  return (
    <div className={Styles.LandingPage3Main}>
        <h1>A few free videos just for you</h1>
         <VideoPoster />
         <div className={Styles.TwoButtons}>
           <NavLink to='/LandingPage2'></NavLink> <button className={Styles.btn}>
            Enter Your Story Club
          </button>
          <button className={Styles.btn}>
            More About Us <FaPlay />
          </button>
         </div>

    </div>
  )
}

export default Landingpage3