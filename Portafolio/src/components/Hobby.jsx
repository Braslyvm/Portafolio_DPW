import React from "react";
import Deporte from "../assets/Deporte.jpg";
import hobbys from "../assets/hobbys.json";

export default function HobbiesIntereses() {
  const { Bienvenida, Deporte: dep, programacion: prog, juego } = hobbys;

  const toUpper = (s, def = "VALOR PROFESIONAL") =>
    (s && String(s).toUpperCase()) || def;

  return (
    <main className="content">
      <div className="Sup-contenedor">
        <div className="hobbies-pagina">
          <section className="hobbies-encabezado">
            <h1 className="hobbies-titulo">
              <span className="hobbies-titulo-delgado">
                {Bienvenida?.Titulo || "Hobbies"}
              </span>
            </h1>
            <p className="hobbies-texto">
              {Bienvenida?.Presentacion ||
                "La vida profesional en tecnología exige constante aprendizaje, pero son mis intereses personales los que mantienen viva la chispa creativa."}
            </p>
          </section>
          <section className="hobbies-seccion">
            <div className="hobbies-media">
              <img
                className="hobbies-img"
                alt={dep?.Titulo || "Deportes de equipo"}
                src={Deporte}
              />
              <div className="hobbies-marcaagua">1</div>
            </div>
            <div className="hobbies-cuerpo">
              <div className="hobbies-insignia" aria-hidden>🎯</div>
              <h2 className="hobbies-h2">{dep?.Titulo || "Deportes de Equipo"}</h2>
              <p className="hobbies-sub">{toUpper(dep?.Categoria)}</p>
              <p className="hobbies-p">{dep?.Descripcion}</p>
              <div className="hobbies-valor">
                <div className="hobbies-valor-titulo">{toUpper(dep?.supTitulo)}</div>
                <p className="hobbies-valor-texto">{dep?.Valor}</p>
              </div>
            </div>
          </section>
          <section className="hobbies-seccion hobbies-invertida">
            <div className="hobbies-media">
              <img
                className="hobbies-img"
                alt={prog?.Titulo || "Programación"}
                src="https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1600&auto=format&fit=crop"
              />
              <div className="hobbies-marcaagua">2</div>
            </div>

            <div className="hobbies-cuerpo">
              <div className="hobbies-insignia" aria-hidden>&lt;/&gt;</div>
              <h2 className="hobbies-h2">{prog?.Titulo || "Programación"}</h2>
              <p className="hobbies-sub">{toUpper(prog?.Categoria)}</p>
              <p className="hobbies-p">{prog?.Descripcion}</p>
              <div className="hobbies-valor">
                <div className="hobbies-valor-titulo">{toUpper(prog?.supTitulo)}</div>
                <p className="hobbies-valor-texto">{prog?.Valor}</p>
              </div>
            </div>
          </section>
          <section className="hobbies-seccion">
            <div className="hobbies-media">
              <img
                className="hobbies-img"
                alt={juego?.Titulo || "Videojuegos"}
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop"
              />
              <div className="hobbies-marcaagua">3</div>
            </div>

            <div className="hobbies-cuerpo">
              <div className="hobbies-insignia" aria-hidden>🎮</div>
              <h2 className="hobbies-h2">{juego?.Titulo || "Videojuegos"}</h2>
              <p className="hobbies-sub">{toUpper(juego?.Categoria)}</p>
              <p className="hobbies-p">{juego?.Descripcion}</p>
              <div className="hobbies-valor">
                <div className="hobbies-valor-titulo">{toUpper(juego?.supTitulo)}</div>
                <p className="hobbies-valor-texto">{juego?.Valor}</p>
              </div>
            </div>
          </section>

          <div className="hobbies-espaciador" />
        </div>
      </div>
    </main>
  );
}
