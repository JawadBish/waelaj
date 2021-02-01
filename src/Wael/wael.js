import React from 'react';
import './wael.css'

import homeImg from './Imgs/homepage_img.JPG';


const Wael = () => {
  return (

   <body>
   {/* Introduction */}
   <section className="intro" id="home">
         <div className="intro-home">
           <h1>Professional Photographer</h1>
           <img src={homeImg} alt="home"></img>
           <p>Wael Abu Jabal, from Majdal Shams <br/>  &nbsp;&nbsp; Professional Photographer located in Haifa. <br/>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #Portraits #Body #Small_Details #Black&White
           </p>
         </div>
        </section>




   </body>


  )
}
export default Wael;