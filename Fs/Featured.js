import React from "react";
import "../css/Featuredpage.css";
import Navbar from "../homeComponents/Navbar.js";
import { LiaTelegramPlane } from "react-icons/lia";
import { SlLogin } from "react-icons/sl";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { LiaListSolid } from "react-icons/lia";
import { GiPodiumWinner } from "react-icons/gi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { TbCategoryPlus } from "react-icons/tb";
import FeaturedB from "../pages/FeaturedB.js";
import FeaturedC from "../pages/FeaturedC.js";
import Featuredstories from "../pages/Featuredstories.js";
import Workshop from "../homeComponents/Workshop.js";
import Footer from "../homeComponents/Footer.js";
const Featured = () => {
  return (
    <div className="full-featuredpage">
      {/* <Navbar /> */}
      <div className="featuredpage-main">
        <h1>Watch Stories of Your Choice!</h1>
        <div className="yellow-board">
          <div className="yellow-board-feature-page">
            <LiaTelegramPlane />
            <p>Publish your stories to reach millions</p>
            <HiOutlineArrowSmRight className="yellow-arrow" />
          </div>
          <div className="yellow-board-feature-page">
            <SlLogin />
            <p>Get access to our stories rs 49 / month* </p>
            <HiOutlineArrowSmRight className="yellow-arrow" />
          </div>
        </div>

        <div className="dropdown-feautredpage">
          <label class="dropdown">
            <div class="dd-button">
              <TbCategoryPlus /> Genre
            </div>

            <input type="checkbox" class="dd-input" id="test" />

            <ul class="dd-menu">
              <li>Action</li>
              <li>Another action</li>
              <li>Something else here</li>
              <li class="divider"></li>
              <li>
                <a href="http://rane.io">Link to Rane.io</a>
              </li>
            </ul>
          </label>

          <label class="dropdown">
            <div class="dd-button">
              <LiaListSolid /> Categories
            </div>

            <input type="checkbox" class="dd-input" id="test" />

            <ul class="dd-menu">
              <li>Action</li>
              <li>Another action</li>
              <li>Something else here</li>
              <li class="divider"></li>
              <li>
                <a href="http://rane.io">Link to Rane.io</a>
              </li>
            </ul>
          </label>

          <label class="dropdown">
            <div class="dd-button">
              <GiPodiumWinner /> popular
            </div>

            <input type="checkbox" class="dd-input" id="test" />

            <ul class="dd-menu">
              <li>Action</li>
              <li>Another action</li>
              <li>Something else here</li>
              <li class="divider"></li>
              <li>
                <a href="http://rane.io">Link to Rane.io</a>
              </li>
            </ul>
          </label>

          <label class="dropdown">
            <div class="dd-button">
              <HiMiniUserGroup /> Age
            </div>

            <input type="checkbox" class="dd-input" id="test" />

            <ul class="dd-menu">
              <li>Action</li>
              <li>Another action</li>
              <li>Something else here</li>
              <li class="divider"></li>
              <li>
                <a href="http://rane.io">Link to Rane.io</a>
              </li>
            </ul>
          </label>
        </div>
      </div>
      <FeaturedB />
      <FeaturedC />
      <Featuredstories />
      {/* <Footer /> */}
    </div>
  );
};

export default Featured;
