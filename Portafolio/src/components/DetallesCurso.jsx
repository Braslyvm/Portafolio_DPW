import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import "../styles/base.css";
import "../styles/layout.css";
import "../styles/overrides.css";
import "../styles/components.css";

export default function DetallesCurso() {
  const { codigo } = useParams();
  const location = useLocation();
  const { materia } = location.state || {};

  if (!materia) {
    return <p>No se encontró información del curso {codigo}</p>;
  }

  return (
    <main className="content">
      <div className="Sup-contenedor">
        <h1 className="main-header">
          {materia.codigo} - {materia.nombre}
        </h1>
        <p><b>Profesor:</b> {materia.Profesor}</p>
        <p><b>Créditos:</b> {materia.Creditos}</p>
        <p><b>Grupo:</b> {materia.Grupo}</p>
        <p><b>Semestre:</b> {materia.semestre}</p>
        <p>{materia.descripcion}</p>
        <div className="separacion"></div>
        <h2>Trabajos Académicos</h2>
        <div className="cursos-Detalles">
          {materia.Tipos.map((tipo, i) => (
            <div key={i} className="tipo-container">
              <h3 className="tipo-title">{tipo}</h3>
              <div className="trabajos-container">
                {materia.trabajos.filter(t => t.tipo === tipo).length > 0 ? (
                  materia.trabajos
                    .filter(t => t.tipo === tipo)
                    .map((trabajo, j) => (
                      <div key={j} className="trabajo-card">
                        <h4>{trabajo.nombre}</h4>
                        <p>{trabajo.descripcion}</p>
                        <p><b>Fecha de entrega:</b> {trabajo.fechaEntrega}</p>
                        <p><b>Tecnologías:</b> {trabajo.tecnologias.join(", ")}</p>
                        {(trabajo.repositorio || trabajo.sitioDesplegado) && (
                          <p>
                            {trabajo.repositorio && (
                              <a href={trabajo.repositorio} target="_blank" rel="noreferrer">
                                Repositorio
                              </a>
                            )}
                            {trabajo.repositorio && trabajo.sitioDesplegado && " | "}
                            {trabajo.sitioDesplegado && (
                              <a href={trabajo.sitioDesplegado} target="_blank" rel="noreferrer">
                                Sitio
                              </a>
                            )}
                          </p>
                        )}
                      </div>
                    ))
                ) : (
                  <div className="trabajo-empty">
                    <p>No hay trabajos registrados en este tipo.</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link to="/cursos" className="btn-volver">
        Volver a Cursos
      </Link>
    </main>
  );
}
