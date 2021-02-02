import React, { useState } from 'react'

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";


const ImageSlider = ({ slides }) => {
    console.log("the collection : " , slides);
    const [current, setCurrent] = useState(0)
    const length = slides.length;
    console.log("lengh",length);
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return (
          
               <h1>No Images to show right now!</h1>
       
        );
    }


    return (
        <section className="slider">
                  <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
                  <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {slides.map((slide, index) => {
                console.log("imageL",slide.image);
                return (
                   
                   <div className={index === current ? 'slide-active' : 'slide'} key={index}>
                        {index === current && ( <div className="image-slider-desc"><img src={slide.image} alt="family" className="image"/>
                        <p className="description-image">{slide.desc}</p></div>)}
                    </div>
                    
                )
            })}
        </section>
    )
}

export default ImageSlider
