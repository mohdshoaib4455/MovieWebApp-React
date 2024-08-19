import React from "react";
import img from "./assets/2.png";

const Container1 = () => {
  return (
    <div className="containerBottom">
      <div className="rightBox">
        <h2>About us</h2>
        <h6>Lorem ipsum</h6>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
          <br /> qui cumque voluptates et in, facere sequi aliquam enim
          repudiandae fugit <br /> iusto. Officiis est doloremque, facere modi
          numquam commodi tempora <br /> praesentium, vel eveniet ea magni.
          Reiciendis nulla provident id tenetur itaque.
        </p>
      </div>
      <div className="leftBox">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Container1;
