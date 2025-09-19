import React, { useRef } from "react";
import informacion from "../assets/Informacion.json";
import BraslyImage from "../assets/Brasly.jpg";
import "../styles/base.css";
import "../styles/layout.css";
import "../styles/overrides.css";
import "../styles/components.css";

export default function Perfil() {
  const { informacionPersonal } = informacion;
  const componentRef = useRef();

  return (
    <main className="content">
      <div className="Sup-contenedor">
        <div className="perfil-arriba">
          <div className="perfil-columna-izq">
            <img
              src={BraslyImage}
              alt={`Foto de ${informacionPersonal.nombreCompleto}`}
              className="perfil-foto"
            />
            <div className="perfil-redes">
              <h3>Redes Profesionales</h3>
              <ul>
                <li>
                  <a
                    href={informacionPersonal.redesProfesionales?.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={informacionPersonal.redesProfesionales?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="perfil-columna-der">
            <h2>Información Personal y Profesional</h2>
            <div className="perfil-bio">
              <h3>{informacionPersonal.nombreCompleto}</h3>
              <p>{informacionPersonal.biografia}</p>
              <p>Email: {informacionPersonal.contacto?.email}</p>
              <p>Teléfono: {informacionPersonal.contacto?.telefono}</p>
              <p>Ubicación: {informacionPersonal.contacto?.ubicacion}</p>
            </div>

            <div className="perfil-habilidades">
              <h3>Habilidades Técnicas</h3>
              <div className="habilidades-categorias">
                {informacionPersonal.habilidadesTecnicas &&
                  Object.entries(informacionPersonal.habilidadesTecnicas).map(
                    ([categoria, habilidades]) => (
                      <div key={categoria} className="categoria">
                        <h4>{categoria}</h4>
                        <ul className="lista-habilidades">
                          {habilidades.map((h, i) => (
                            <li key={i}>{h.nombre} - {h.nivel}</li>
                          ))}
                        </ul>
                      </div>
                    )
                  )}
              </div>
            </div>
          </div>
        </div>

        <div className="perfil-abajo">
          <h3>Información Adicional</h3>
          <ul>
            {informacionPersonal.informacionAdicional?.map((dato, i) => (
              <li key={i}>{dato}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
