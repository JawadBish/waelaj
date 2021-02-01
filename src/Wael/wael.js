import React from 'react';
import './wael.css'

import homeImg from './Imgs/homepage_img.JPG';
import {AiOutlineCamera} from 'react-icons/ai';

const Wael = () => {
  return (

   <body>
   {/* Home */}
   <section className="intro" id="home">
         <div className="intro-home">
           <h1>Professional Photographer</h1>
           <img src={homeImg} alt="home"></img>
           <p>Wael Abu Jabal, from Majdal Shams <br/>  &nbsp;&nbsp; Professional Photographer located in Haifa. <br/>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #portraits #body_capture #small_details #black&white #art #smooth
           </p>
         </div>
        </section>

{/* My Work */}
<div className="my-work-dd">
        <h1>Gallery</h1>
        <section className="my-work" id="gallery">

        
        <div className="oneWork">
      <AiOutlineCamera size={70} color="white" ></AiOutlineCamera>
            <h3> Body Language</h3>
            <p>body language exhibit shows captures blablabla </p>
            <a href="/" className="btn">Gallery </a>
            </div>
            <div className="oneWork">
      <AiOutlineCamera size={70} color="white" ></AiOutlineCamera>
            <h3> Portraits </h3>
            <p>body language exhibit shows captures blablabla </p>
            <a href="/" className="btn">Gallery </a>
            </div>
            <div className="oneWork">
      <AiOutlineCamera size={70} color="white" ></AiOutlineCamera>
            <h3> Portraits </h3>
            <p>body language exhibit shows captures blablabla </p>
            <a href="/" className="btn">Gallery </a>
            </div>
            <div className="oneWork">
      <AiOutlineCamera size={70} color="white" ></AiOutlineCamera>
            <h3> Portraits </h3>
            <p>body language exhibit shows captures blablabla </p>
            <a href="/" className="btn">Gallery </a>
            </div>
            
          
  </section>
  </div>






   </body>


  )
}
export default Wael;