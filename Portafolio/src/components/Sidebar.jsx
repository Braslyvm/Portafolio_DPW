import React from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FaBook, FaUser, FaBars, FaHome, FaRegComments } from "react-icons/fa";
import { MdOutlineSportsEsports } from "react-icons/md";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import "../styles/base.css";
import "../styles/layout.css";
import "../styles/overrides.css";
import "../styles/components.css";

export default function Sidebar({ collapsed, setCollapsed }) {
  const handleToggle = () => setCollapsed(!collapsed);

  return (
    <>
      <ProSidebar
        collapsed={collapsed}
        className={`custom-sidebar ${collapsed ? "collapsed" : "expanded"} ${!collapsed ? "open" : ""}`}
        style={{ height: "98vh" }}
      >
        <Menu iconShape="square">
          <MenuItem icon={<FaBars />} onClick={handleToggle}>
            {collapsed ? "Abrir" : "Cerrar"}
          </MenuItem>
          <MenuItem icon={<FaHome />}><Link to="/">Inicio</Link></MenuItem>
          <MenuItem icon={<FaUser />}><Link to="/perfil">Perfil</Link></MenuItem>
          <MenuItem icon={<FaBook />}><Link to="/cursos">Cursos</Link></MenuItem>
          <MenuItem icon={<FaRegComments />}><Link to="/Comentarios">Comentarios</Link></MenuItem>
          <MenuItem icon={<MdOutlineSportsEsports />}><Link to="/hobbies">Hobbies</Link></MenuItem>
          <MenuItem icon={<FaBook />}><Link to="/reflexiones">Reflexiones</Link></MenuItem>
        </Menu>
      </ProSidebar>

      <div className={`overlay ${!collapsed ? "show" : ""}`} onClick={handleToggle} />
    </>
  );
}
