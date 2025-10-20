import React from "react";
import { FaBars } from "react-icons/fa";

export default function TopHeader({ onMenu }) {
  return (
    <header className="topbar">
      <button className="btn-hamburger" onClick={onMenu} aria-label="Abrir menú">
        <FaBars />
      </button>
      <h1 className="topbar-title">Portafolio</h1>
    </header>
  );
}
