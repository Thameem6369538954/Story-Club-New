import React, { useState } from 'react'
import '../css/FeaturedB.css'
import Vid from '../Images/Vid.png'
import { IoEyeOutline } from "react-icons/io5";
import { TbMessages } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
const FeaturedB = () => {
    const [sugges,setSugges] = useState([
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
    <div>
        <div className="video-part">
                <div className="video-part-flx">
                    <img src={Vid} alt="" />
                    <div className="vid-text">
                        <h3>3 Hours to Change your Life Forever</h3>
                        <div className="formet">
                            <ul className='formet-feat'>
                                <li> Motivational</li>
                                <li> Today</li>
                                <li>Audio</li>
                            </ul>
                            <ul className='like-lines'>
                                <li><IoEyeOutline className='eye-icon' />323</li>
                                <li><TbMessages className='commed-icon' />32</li>
                                <li><CiHeart className='like-icon'/>12</li>
                            </ul>
                        </div>
                        <div className="video-text-part">
                            <p>Seize newfound opportunities, embrace change, cultivate  passions, forge connections, and commit to growth; transform in three hours, redefine your life.
</p>
<button>Play Now</button>
                        </div>
                    </div>
                </div>
        </div>
        <div className="full-sugges-box">
        {sugges.map((list)=>{
            console.log(list);
            return<div>
                
                <div className="suggest-box">
                 
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
        <button>View More</button>
    </div>
  )
}

export default FeaturedB