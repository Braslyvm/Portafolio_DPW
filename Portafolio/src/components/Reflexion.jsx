import React from "react";
import Datos from "../assets/Reflexion.json";

import { GiMountainClimbing, GiStairsGoal, GiBrain } from "react-icons/gi";

export default function Reflexion() {
  return (
    <main className="content">
      <div className="Sup-contenedor">
        <div className="seccion-wrapper">
        
          <h1 className="seccion-titulo-principal">
            {Datos.Bienvenida.Titulo}
          </h1>

          <p className="seccion-subtitulo">
            {Datos.Bienvenida.Presentacion}
          </p>

          <section className="seccion-bloque">
            <div className="seccion-header">
              <div className="seccion-header-icon">
                <span><GiBrain /></span>
              </div>
              <h2 className="seccion-header-titulo">
                {Datos.fortalezas.Titulo}
              </h2>
            </div>

            <div className="seccion-grid-fortalezas">
              <div className="seccion-card-fortaleza">
                <span className="seccion-card-icon">➜</span>
                <span>{Datos.fortalezas.carta1}</span>
              </div>

              <div className="seccion-card-fortaleza">
                <span className="seccion-card-icon">➜</span>
                <span>{Datos.fortalezas.carta2}</span>
              </div>

              <div className="seccion-card-fortaleza">
                <span className="seccion-card-icon">➜</span>
                <span>{Datos.fortalezas.carta3}</span>
              </div>

              <div className="seccion-card-fortaleza">
                <span className="seccion-card-icon">➜</span>
                <span>{Datos.fortalezas.carta4}</span>
              </div>
            </div>
          </section>
          <section className="seccion-bloque">
            <div className="seccion-header">
              <div className="seccion-header-icon seccion-header-icon-secondary">
                <span><GiMountainClimbing /></span>
              </div>
              <h2 className="seccion-header-titulo">
                {Datos.retos.Titulo}
              </h2>
            </div>
            <div className="seccion-reto">
              <h3 className="seccion-reto-titulo">
                {Datos.retos.Titulo2}
              </h3>
              <p className="seccion-reto-texto">
                {Datos.retos.cuerpo1}
              </p>
            </div>
            <div className="seccion-reto">
              <h3 className="seccion-reto-titulo">
                {Datos.retos.Titulo3}
              </h3>
              <p className="seccion-reto-texto">
                {Datos.retos.cuerpo2}
              </p>
            </div>
          </section>
          <section className="seccion-bloque">
            <div className="seccion-header">
              <div className="seccion-header-icon seccion-header-icon-target">
                <span><GiStairsGoal /></span>
              </div>
              <h2 className="seccion-header-titulo">
                {Datos.Objetivos.Titulo}
              </h2>
            </div>

            <div className="seccion-grid-objetivos">
              <div className="seccion-card-objetivo">
                <span className="seccion-numero">1</span>
                <span>{Datos.Objetivos.carta1}</span>
              </div>

              <div className="seccion-card-objetivo">
                <span className="seccion-numero">2</span>
                <span>{Datos.Objetivos.carta2}</span>
              </div>

              <div className="seccion-card-objetivo">
                <span className="seccion-numero">3</span>
                <span>{Datos.Objetivos.carta3}</span>
              </div>

              <div className="seccion-card-objetivo">
                <span className="seccion-numero">4</span>
                <span>{Datos.Objetivos.carta4}</span>
              </div>

              <div className="seccion-card-objetivo">
                <span className="seccion-numero">5</span>
                <span>{Datos.Objetivos.carta5}</span>
              </div>

              <div className="seccion-card-objetivo">
                <span className="seccion-numero">6</span>
                <span>{Datos.Objetivos.carta6}</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
