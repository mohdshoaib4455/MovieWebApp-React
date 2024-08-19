import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./App.css";
import Rimg from "./RomenceImg";
let RomenceCard = ({ romence }) => {
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
         breakpoint: 480,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
         },
       },
     ],
   };
  let RomenceImg = Array.isArray(romence) ? romence : [];
  return (
    <>
      <div className="container">
        <div className="slider-container">
          <Slider {...settings}>
            {RomenceImg.map((item,index) => (
              <Rimg item={item} key={index} index={index}></Rimg>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
export default RomenceCard;
