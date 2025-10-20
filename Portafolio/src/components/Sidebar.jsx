import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FaBook, FaUser, FaBars , FaHome, FaRegComments} from "react-icons/fa";
import { MdOutlineSportsEsports } from "react-icons/md";

import { Link } from "react-router-dom"; 
import "react-pro-sidebar/dist/css/styles.css";
import "../styles/base.css";
import "../styles/layout.css";
import "../styles/overrides.css";
import "../styles/components.css";

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
        style={{ height: "98vh" }}
      >
        <Menu iconShape="square">
          <MenuItem icon={<FaBars />} onClick={handleToggle}>
            {collapsed ? "Abrir" : "Cerrar"}
          </MenuItem>
          <MenuItem icon={<FaHome />}>
            <Link to="/">Inicio</Link>
          </MenuItem>
          <MenuItem icon={<FaUser />}>
            <Link to="/perfil">Perfil</Link>
          </MenuItem>
          <MenuItem icon={<FaBook />}>
            <Link to="/cursos">Cursos</Link>
          </MenuItem>
          <MenuItem icon={<FaRegComments />}>
            <Link to="/Comentarios">Comentarios</Link>
          </MenuItem>
          <MenuItem icon={<MdOutlineSportsEsports />}>
            <Link to="/hobbies">Hobbies</Link>
          </MenuItem>
        </Menu>
      </ProSidebar>
      {!collapsed && <div className="overlay" onClick={handleToggle}></div>}
    </>
  );
}
