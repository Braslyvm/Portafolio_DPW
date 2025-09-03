import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {  FaBook,FaUser, FaBars } from "react-icons/fa";
import "react-pro-sidebar/dist/css/styles.css";
import "../styles/Sidebar.css";

export default function Sidebar({ onCollapse }) {
  const [collapsed, setCollapsed] = useState(true);

  const handleToggle = () => {
    const newState = !collapsed;
    setCollapsed(newState);
    onCollapse(newState);
  };

  return (
    <>
      <ProSidebar
        collapsed={collapsed}
        className={`custom-sidebar ${collapsed ? "collapsed" : "expanded"}`}
        style={{ height: "100vh" }}
      >
        <Menu iconShape="square">
          <MenuItem icon={<FaBars />} onClick={handleToggle}>
            {collapsed ? "Abrir" : "Cerrar"}
          </MenuItem>
          <MenuItem icon={<FaUser />}>Perfil</MenuItem>
          <MenuItem icon={< FaBook />}>Cursos</MenuItem>
        </Menu>
      </ProSidebar>
      {!collapsed && (
        <div className="overlay" onClick={handleToggle}></div>
      )}
    </>
  );
}
