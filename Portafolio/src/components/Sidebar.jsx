import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FaHome, FaUser, FaCog, FaBars } from "react-icons/fa";
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
          <MenuItem icon={<FaHome />}>Inicio</MenuItem>
          <SubMenu title="Perfil" icon={<FaUser />}>
            <MenuItem>Mi Cuenta</MenuItem>
            <MenuItem>Configuraciones</MenuItem>
          </SubMenu>
          <MenuItem icon={<FaCog />}>Ajustes</MenuItem>
        </Menu>
      </ProSidebar>
      {!collapsed && (
        <div className="overlay" onClick={handleToggle}></div>
      )}
    </>
  );
}
