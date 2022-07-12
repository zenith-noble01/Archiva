import React from "react";
import "./Lander.scss";
import { Button } from "../";
import { girl } from "../../Images";

const Lander = () => {
  return (
    <div className="home__lander">
      <div className="lander__description">
        <h1>Take care of your Health Anytime Anywhere</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          nostrum repudiandae architecto culpa facere! Numquam cum ab cumque
          veniam asperiores omnis, non assumenda ipsum doloribus molestias velit
          maxime reprehenderit natus.
        </p>
        <Button name="Try Now" />
      </div>
      <div className="landerImg">
        <div className="imgBox">
          <img src={girl} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Lander;
