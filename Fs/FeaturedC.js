import React, { useState } from 'react'
import '../css/FeaturedC.css'
import Vid from '../Images/Vid.png'
import { IoEyeOutline } from "react-icons/io5";
import { TbMessages } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
const FeaturedC = () => {
  const [trending,setTrending] = useState([
    {
      id:1,
      Image:require('../Images/Vid.png'),
      heading:"A Little Boy",
      discrip:"A Life Story of a little boy shared by his mother"
  },
  {
      id:2,
      Image:require('../Images/Vid.png'),
      heading:"A Little Boy",
      discrip:"A Life Story of a little boy shared by his mother"
  },
  {
      id:3,
      Image:require('../Images/Vid.png'),
      heading:"A Little Boy",
      discrip:"A Life Story of a little boy shared by his mother"
  },
  {
      id:4,
      Image:require('../Images/Vid.png'),
      heading:"A Little Boy",
      discrip:"A Life Story of a little boy shared by his mother"
  },
  ])
  return (
    <div className='Featuredc-main'>
      <h1>Featured stories</h1><hr></hr>  

        <div className="featuredc-container">
      <div className="featured-store-videos">
        <div className="featured-store-videos-text">
          <h2>3 Hours to Change your Life Forever</h2>
          <div className="formet">
                            <ul className='formet-feat-c'>
                                <li> Motivational</li>
                                <li> Today</li>
                                <li>Audio</li>
                            </ul>
                            <ul className='like-lines-c'>
                                <li><IoEyeOutline className='eye-icon-c' />323</li>
                                <li><TbMessages className='commed-icon-c' />32</li>
                                <li><CiHeart className='like-icon-c'/>12</li>
                            </ul>
                        </div>
                        <p>Seize newfound opportunities, embrace change, cultivate  passions, forge connections, and commit to growth; transform in three hours, redefine your life.
</p>
        </div>
                          <button>View More</button>
      </div>
        <img src={Vid} alt="" />
        </div>
          <div className="trending-store">
            <h3>Featured Stories</h3><hr></hr>
            <div className="listing">
              {trending.map((list)=>{
                return<div>
                  <div className="list-container">
                  <div className="featur-video-box">
            <img src={list.Image} alt="" />
            <div className="featuredc-list">
                <div>
            <h2>{list.heading}</h2>
            <p>{list.discrip}</p>
                </div>

                <div>
                <ul className='like-lines'>
                                <li><IoEyeOutline className='eye-icon' />323</li>
                                <li><TbMessages className='commed-icon' />32</li>
                                <li><CiHeart className='like-icon'/>12</li>
                            </ul>
                </div>
            </div>
            
        </div>
                  </div>
                  
                  </div>
              })}
              
            </div>
          </div>
          <button>View More</button>
    </div>
  )
}

export default FeaturedC