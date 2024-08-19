import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cardsimg from "./movieimgCard";
import "./App.css";
let Cards = ({ img }) => {
   const settings = {
     dots: false,
     infinite: true,
     speed: 500,
     slidesToShow: 4,
     slidesToScroll: 3,
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
           dots: true,
         },
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 2,
           initialSlide: 2,
         },
       },
       {
         breakpoint: 500,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
         },
       },
       {
         breakpoint: 400,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
         },
       },
     ],
   };
  let ActionImg = Array.isArray(img) ? img : [];
  return (
    <div className="container">
      <div className="slider-container">
        <Slider {...settings}>
          {ActionImg.map((item,index) => (
            <Cardsimg item={item} key={index} index={index}></Cardsimg>
          ))}
        </Slider>
      </div>
  
    </div>
  );
};
export default Cards;
 