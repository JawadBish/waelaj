import React from 'react';
import './wael.css'

import homeImg from './Imgs/homepage_img.jpg';
import {AiOutlineCamera} from 'react-icons/ai';

const Wael = () => {
  return (

   <body>
   {/* Home */}
   <section className="intro" id="home">
         <div className="intro-home">
           <h1>Professional Photographer</h1>
           <img src={homeImg} alt="home"></img>
           <p>Wael Abu Jabal, from Majdal Shams<br/> Professional Photographer located in Haifa. <br/>
                #portraits #body_capture #small_details #black&white #art #smooth
           </p>
         </div>
        </section>

{/* My Work */}
<div className="my-work-dd">
        <h1>Gallery</h1>
        <section className="my-work" id="gallery">

        
        <div className="oneWork">
      <AiOutlineCamera size={70} color="white" ></AiOutlineCamera>
            <h3> Portrait Faces</h3>
            <p>Portrait faces and bodies. focus on small details. #Portraits #Faces #Body </p>
            <a href="/gallery/" className="btn">Gallery </a>
            </div>
            <div className="oneWork">
      <AiOutlineCamera size={70} color="white" ></AiOutlineCamera>
            <h3> Tootart - Haifa Performance </h3>
            <p>Feels the vibe through the camera lens  -  #Musical_show #Stage #Vibe </p>
            <a href="/gallery/" className="btn">Gallery </a>
            </div>
            <div className="oneWork">
      <AiOutlineCamera size={70} color="white" ></AiOutlineCamera>
            <h3> Beat Portrait </h3>
            <p>Keep capturing the deep beat. #Beat #HawaDafi #Performing</p>
            <a href="/gallery/" className="btn">Gallery </a>
            </div>
            <div className="oneWork">
      <AiOutlineCamera size={70} color="white" ></AiOutlineCamera>
            <h3> Rain Portrait </h3>
            <p> beautiful landscapes in Majdal Shams #Environment #Rain #Clouds </p>
            <a href="/gallery/" className="btn">Gallery </a>
            </div>
    

  </section>
  </div>






   </body>


  )
}
export default Wael;