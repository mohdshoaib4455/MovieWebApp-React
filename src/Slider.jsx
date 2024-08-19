import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import "./App.css";
let PSlider = ({ imgLinks, handlclick }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    
  };

  const searchValue = useRef("");
  let onkeydown = (event) => {
    if (event.key == "Enter") {
       handlclick(searchValue.current.value);
    }
   
  };
  let click = () => {
    handlclick(searchValue.current.value);
  };
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {imgLinks.map((item, index) => (
            <img
              className="posterImg"
              src={`https://image.tmdb.org/t/p/w400/${item}`}
              key={index}
              alt=""
            />
          ))}
        </Slider>
        <div className="overlay">
          <div className="header">
            <h1>
              Movie <span>Mela</span>
            </h1>
            
            <div className="btn">
              <input
                id="input"
                placeholder="Search Movie"
                type="text"
                ref={searchValue}
                onKeyDown={onkeydown}
              />
              <button onClick={click} id="signUp">
                Seacrh
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PSlider;
