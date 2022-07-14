import React from "react";
import "./Dashboard.scss";
import { Sidebar } from "../../Components";
import { Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="app__dashboad">
      <Sidebar />
      <div className="dashBoard__wrapper">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
