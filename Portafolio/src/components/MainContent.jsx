import React from "react";
import "../styles/base.css";
import "../styles/layout.css";
import "../styles/overrides.css";
import "../styles/components.css";
import BraslyImage from "../assets/brasly.png";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import data from "../assets/Informacion.json"; 

export default function MainContent() {
   const { Bienvenida, Redes } = data;
  return (
    <main className="content">
      <div className="Sup-contenedor">
        <h1 className="main-header">{Bienvenida.Titulo}</h1>
        <div className="intro-container">
          <section className="intro-section">
            <div className="intro-text">
              <h2 className="section-title">¡{Bienvenida.Titulo2}</h2>
              <p className="section-text">
                {Bienvenida.Presentacion}
              </p>
              <p className="section-text">
                {Bienvenida.Presentacion2}
              </p>
            </div>
          </section>

          <div className="intro-image">
            <img src={BraslyImage} alt="Brasly" />
          </div>
        </div>
        <section className="purpose-section">
          <h2 className="section-title">{Bienvenida.TituloProposito}</h2>
          <p className="section-text">
            {Bienvenida.Proposito}
          </p>
        </section>
        <section className="socials-section">
          <h2 className="section-title">Mis Redes Sociales</h2>
          <div className="socials-grid">
            <a href={Redes.Instagram} target="_blank" rel="noopener noreferrer" className="social-card">
              <FaInstagram size={40} />
              <span>Instagram</span>
            </a>
            <a href={Redes.GitHub} target="_blank" rel="noopener noreferrer" className="social-card">
              <FaGithub size={40} />
              <span>GitHub</span>
            </a>
            <a href={Redes.LinkedIn} target="_blank" rel="noopener noreferrer" className="social-card">
              <FaLinkedin size={40} />
              <span>LinkedIn</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
