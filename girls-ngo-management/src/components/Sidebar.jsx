import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUserPlus,
  FaUsers,
  FaChalkboardTeacher,
  FaUserFriends,
  FaChartBar,
  FaSignOutAlt,
} from "react-icons/fa";

import logo from "../assets/logo.png";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <img src={logo} alt="Women For Girls NGO" />
        <span>Women For Girls NGO</span>
      </div>

      <nav className="sidebar-menu">

        <NavLink to="/dashboard" className="menu-item">
          <FaHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/add-beneficiary" className="menu-item">
          <FaUserPlus />
          <span>Add Beneficiary</span>
        </NavLink>

        <NavLink to="/beneficiary-list" className="menu-item">
          <FaUsers />
          <span>Beneficiary List</span>
        </NavLink>

        <NavLink to="/add-mentor" className="menu-item">
          <FaChalkboardTeacher />
          <span>Add Mentor</span>
        </NavLink>

        <NavLink to="/mentor-list" className="menu-item">
          <FaUserFriends />
          <span>Mentor List</span>
        </NavLink>

        <NavLink to="/analytics" className="menu-item">
          <FaChartBar />
          <span>Analytics</span>
        </NavLink>

        <NavLink to="/" className="menu-item logout">
          <FaSignOutAlt />
          <span>Logout</span>
        </NavLink>

      </nav>
    </aside>
  );
}

export default Sidebar;