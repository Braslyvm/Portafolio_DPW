import React from "react";
import { useNavigate } from "react-router-dom";
import data from "../assets/Cursos.json"; 
import "../styles/base.css";
import "../styles/layout.css";
import "../styles/overrides.css";
import "../styles/components.css";

export default function Cursos() {
  const { materias } = data;
  const navigate = useNavigate();

  const handleClick = (materia) => {
    navigate(`/curso/${materia.codigo}`, { state: { materia } });
  };

  return (
    <main className="content">
      <div className="Sup-contenedor">
        <h1 className="main-header">Trabajos académicos</h1>
        <div className="separacion"></div>
        <div className="cursos-Container"> 
          {materias.map((materia, index) => (
            <div 
              key={index} 
              className="curso-card" 
              onClick={() => handleClick(materia)}
              style={{ cursor: "pointer" }}
            >
              <h2 className="curso-title">{materia.codigo} - {materia.nombre}</h2>
              <p className="curso-description">{materia.descripcion}</p>
              <p>Profesor: {materia.Profesor}</p>
              <p>Créditos: {materia.Creditos}</p>
              <p>Grupo: {materia.Grupo}</p>
              <p className="curso-semestre">{materia.semestre}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
