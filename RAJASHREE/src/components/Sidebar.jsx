import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineFileUpload, MdViewList } from "react-icons/md";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Dashboard</h2>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <MdOutlineFileUpload className="nav-icon" />
          <span>Upload</span>
        </NavLink>
        <NavLink to="/view" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          <MdViewList className="nav-icon" />
          <span>View</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
