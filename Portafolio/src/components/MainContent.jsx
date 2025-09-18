import React from "react";
import "../styles/base.css";
import "../styles/layout.css";
import "../styles/overrides.css";
import "../styles/components.css";
import BraslyImage from "../media/Brasly2.png";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function MainContent() {
  return (
    <main className="content">
      <div className="Sup-contenedor">
        <h2 className="main-header">¡Bienvenido a mi Portafolio!</h2>
        <div className="intro-container">
          <section className="intro-section">
            <div className="intro-text">
              <h3 className="section-title">¡Hola! Soy Brasly</h3>
              <p className="section-text">
                Soy estudiante de la carrera de Ingeniería en Informática en la sede de Limón del Tecnológico.
                Me apasiona la programación y siempre estoy aprendiendo nuevas herramientas para crear soluciones
                tecnológicas innovadoras.
              </p>
              <p className="section-text">
                Además de la tecnología, me gustan los deportes y disfrutar de actividades que me mantienen activo
                y motivado. Este portafolio es un espacio donde comparto mi trabajo, proyectos y mi forma de aprender
                y crecer en el mundo del desarrollo web.
              </p>
            </div>
          </section>

          <div className="intro-image">
            <img src={BraslyImage} alt="Ing. Brasly" />
          </div>
        </div>
        <section className="purpose-section">
          <h3 className="section-title">Propósito de este Portafolio</h3>
          <p className="section-text">
            Este portafolio está diseñado para mostrar mis habilidades, proyectos y la forma en que aplico
            mis conocimientos en desarrollo web. Quiero que cada visitante pueda conocer mi estilo de trabajo,
            mi creatividad y mi enfoque para resolver problemas mediante soluciones tecnológicas efectivas.
          </p>
        </section>

        <section className="socials-section">
          <h3 className="section-title">Mis Redes Sociales</h3>
          <div className="socials-grid">
            <a href="https://www.instagram.com/brasly_68?igsh=MWNieWRhZ3pmODJ3cw==" target="_blank" rel="noopener noreferrer" className="social-card">
              <FaInstagram size={40} />
              <span>Instagram</span>
            </a>
            <a href="https://github.com/Braslyvm" target="_blank" rel="noopener noreferrer" className="social-card">
              <FaGithub size={40} />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/brasly-villarebia-morales-749628343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-card">
              <FaLinkedin size={40} />
              <span>LinkedIn</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
