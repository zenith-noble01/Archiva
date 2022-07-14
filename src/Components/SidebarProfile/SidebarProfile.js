import React, { useState } from "react";
import "./SidebarProfile.scss";
import { girl } from "../../Images";
import { HiChevronRight } from "react-icons/hi";

const SidebarProfile = () => {
    const [slide, setSlide] = useState(false)
  return (
    <div className="sidebar__profile" onClick={() => setSlide(!slide)}>
      <img src={girl} alt="" />
      <p>Jessica Smith</p>
      <HiChevronRight className={slide? "slideTive op" : "slideTive"} />
    </div>
  );
};

export default SidebarProfile;
