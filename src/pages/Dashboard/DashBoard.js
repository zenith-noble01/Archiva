import React from "react";
import "./Dashboard.scss";
import { Sidebar } from "../../Components";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

const DashBoard = () => {
  return (
    <div className="app__dashboad">
      <Helmet>
        <title>Archiva | Dashboard</title>
      </Helmet>
      <Sidebar />
      <div className="dashBoard__wrapper">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
