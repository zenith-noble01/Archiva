import React from "react";
import { NavLink } from "react-router-dom";
import { dslogo } from "../../Images";
import "./Sidebar.scss";
import { MdDashboard, MdGroups, MdAccessTimeFilled } from "react-icons/md";
import { BsFillCalendar2Fill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { FaCog } from "react-icons/fa";
import { GiHospitalCross } from "react-icons/gi";
import { SidebarProfile } from "../../Components";
import { SearchOutlined } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="dashboard__sidebar">
      <div className="sidebar__header">
        <img src={dslogo} alt="" />
      </div>

      <ul className="dashboard__list">
        <li>
          <NavLink to="/dashboard/appointments">
            <BsFillCalendar2Fill />
            Appointments
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/doctors">
            <MdGroups />
            Doctors
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/search">
            <SearchOutlined />
            search
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">
            <MdDashboard />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/laboratory">
            <GiHospitalCross />
            laboratory
          </NavLink>
        </li>
      </ul>
      <ul className="dashboard__list list">
        <li>
          <NavLink to="/dashboard/history">
            <MdAccessTimeFilled />
            History
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/messages">
            <HiMail />
            Messages
          </NavLink>

          <span>8</span>
        </li>
        <li>
          <NavLink to="/dashboard/settings">
            <FaCog />
            Settings
          </NavLink>
        </li>
      </ul>

      <SidebarProfile />
    </div>
  );
};

export default Sidebar;
