import React from "react";
import { FaDatabase, FaGlobeAmericas, FaServer, FaCode, FaTools } from "react-icons/fa";
import data from "../assets/Formacion.json";

export default function FormacionTecnica() {
  return (
    <main className="content">
      <div className="Sup-contenedor">
        <div className="seccion2-wrapper">
          <h1 className="seccion2-titulo-principal">{data.Formacion.Titulo}</h1>
          <p className="seccion2-subtitulo">{data.Formacion.Subtitulo}</p>
          <div className="seccion2-item">
            <div className="seccion2-icon">
              <FaDatabase />
            </div>
            <div className="seccion2-texto">
              <h2 className="seccion2-item-titulo">{data.BasesDatos.Titulo}</h2>
              <p className="seccion2-item-desc">{data.BasesDatos.Descripcion}</p>
              <ul className="seccion2-lista">
                <li>{data.BasesDatos.Item1}</li>
                <li>{data.BasesDatos.Item2}</li>
                <li>{data.BasesDatos.Item3}</li>
                <li>{data.BasesDatos.Item4}</li>
              </ul>
            </div>
          </div>
          <div className="seccion2-item seccion2-right">
            <div className="seccion2-texto">
              <h2 className="seccion2-item-titulo">{data.Frontend.Titulo}</h2>
              <p className="seccion2-item-desc">{data.Frontend.Descripcion}</p>
              <ul className="seccion2-lista">
                <li>{data.Frontend.Item1}</li>
                <li>{data.Frontend.Item2}</li>
                <li>{data.Frontend.Item3}</li>
              </ul>
            </div>
            <div className="seccion2-icon">
              <FaGlobeAmericas />
            </div>
          </div>
          <div className="seccion2-item">
            <div className="seccion2-icon">
              <FaServer />
            </div>
            <div className="seccion2-texto">
              <h2 className="seccion2-item-titulo">{data.Backend.Titulo}</h2>
              <p className="seccion2-item-desc">{data.Backend.Descripcion}</p>
              <ul className="seccion2-lista">
                <li>{data.Backend.Item1}</li>
                <li>{data.Backend.Item2}</li>
                <li>{data.Backend.Item3}</li>
                <li>{data.Backend.Item4}</li>
              </ul>
            </div>
          </div>
          <div className="seccion2-item seccion2-right">
            <div className="seccion2-texto">
              <h2 className="seccion2-item-titulo">{data.Lenguajes.Titulo}</h2>
              <p className="seccion2-item-desc">{data.Lenguajes.Descripcion}</p>
              <ul className="seccion2-lista">
                <li>{data.Lenguajes.Item1}</li>
                <li>{data.Lenguajes.Item2}</li>
                <li>{data.Lenguajes.Item3}</li>
                <li>{data.Lenguajes.Item4}</li>
              </ul>
            </div>
            <div className="seccion2-icon">
              <FaCode />
            </div>
          </div>
          <div className="seccion2-item">
            <div className="seccion2-icon">
              <FaTools />
            </div>
            <div className="seccion2-texto">
              <h2 className="seccion2-item-titulo">{data.Herramientas.Titulo}</h2>
              <p className="seccion2-item-desc">{data.Herramientas.Descripcion}</p>
              <ul className="seccion2-lista">
                <li>{data.Herramientas.Item1}</li>
                <li>{data.Herramientas.Item2}</li>
                <li>{data.Herramientas.Item3}</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
