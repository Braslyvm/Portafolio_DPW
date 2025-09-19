import React from "react";
import data from "../assets/Cursos.json"; 


export default function Cursos() {
  const { materias} = data;
  return (
    <main className="content">
      <div className="Sup-contenedor">
         <h1 className="main-header">Trabajos academicos</h1>
          <div className="separacion"></div>
         <div className="cursos-Container"> 
          {materias.map((materia, index) => (
            <div key={index} className="curso-card">
              <h2 className="curso-title">{ materia.codigo} - {materia.nombre}</h2>
              <a className="curso-description">{materia.descripcion}</a>
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
