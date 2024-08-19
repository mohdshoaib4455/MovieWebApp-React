import React from "react";
import img from "./assets/1.png";

const Container = () => {
  return (
    <div className="containerBottom">
      <div className="leftBox">
        <img src={img} alt="" />
      </div>
      <div className="rightBox">
        <h6>About us</h6>
        <h2>Lorem, ipsum dolor.</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
          <br /> qui cumque voluptates et in, facere sequi aliquam enim
          repudiandae fugit <br /> iusto. Officiis est doloremque, facere modi
          numquam commodi tempora <br /> praesentium, vel eveniet ea magni.
          Reiciendis nulla provident id tenetur itaque.
        </p>
      </div>
    </div>
  );
};

export default Container;
