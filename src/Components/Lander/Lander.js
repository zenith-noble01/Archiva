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
          We offers a convenient, reliable, simpler, and less costly way of
          collecting, storing, retrieving, and processing patients data and
          information in health care ecosystems. This paves the way for
          improving poor development of research in health, poor management of
          health information, non-informed decisions, and insufficient
          dissemination of health information and research findings to all
          health pyramidal levels.
        </p>
        <Button name="Try Now" />
      </div>
      <div className="landerImg">
        <div className="imgBox">
          <img src={girl} alt="" />
        </div>

        <p>
          "Improving the healthcare system of <br /> our community means making
          patients' <br /> medical history available at all times, <br />{" "}
          especially in case of emergencies."
        </p>
      </div>
    </div>
  );
};

export default Lander;
