import { useEffect, useState } from "react";

const MAX_LEN = 500;
const API_BASE = "https://portafoliodpw.up.railway.app";

function formatoFechaES(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("es-CR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function RecommendationPage() {
  const [nombre, setNombre] = useState("");
  const [comentario, setComentario] = useState("");
  const [comentarios, setComentarios] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setCargando(true);
        setError("");
        const res = await fetch(`${API_BASE}/comentarios`, { method: "GET" });
        if (!res.ok) throw new Error("Error HTTP " + res.status);
        const payload = await res.json();
        const lista = Array.isArray(payload?.data) ? payload.data : (Array.isArray(payload) ? payload : []);
        setComentarios(lista);
      } catch (err) {
        console.error(err);
        setError("No se pudieron cargar las recomendaciones.");
      } finally {
        setCargando(false);
      }
    })();
  }, []);

  const puedeEnviar =
    nombre.trim().length > 1 &&
    comentario.trim().length > 3 &&
    comentario.length <= MAX_LEN &&
    !cargando;

  const enviar = async (e) => {
    e.preventDefault();
    if (!puedeEnviar) return;

    const body = {
      nombre: nombre.trim(),
      comentario: comentario.trim(),
    };

    try {
      setCargando(true);
      setError("");

      const res = await fetch(`${API_BASE}/comentarios`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Error HTTP " + res.status);
      const r2 = await fetch(`${API_BASE}/comentarios`);
      const payload2 = await r2.json();
      const lista = Array.isArray(payload2?.data) ? payload2.data : [];
      setComentarios(lista);

      setNombre("");
      setComentario("");
    } catch (err) {
      console.error(err);
      setError("No se pudo enviar tu recomendación.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <main className="content">
      <div className="Sup-contenedor">
        <header className="cabecera">
          <div className="separador" />
          <h1>Deja tu recomendación</h1>
          <p>
            Comparte tus comentarios sobre la colaboración o habilidades de este
            estudiante del <strong>Instituto Tecnológico de Costa Rica</strong> -
            Bachillerato en Ingeniería en Computación.
          </p>
        </header>

        <section className="tarjeta-formulario">
          <form onSubmit={enviar} className="formulario">
            <label>Tu nombre</label>
            <input
              type="text"
              placeholder="Ingresa tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <label>Tu comentario</label>
            <textarea
              placeholder="Comparte tu experiencia de colaboración o las habilidades que destacas..."
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              maxLength={MAX_LEN}
              rows={5}
            />
            <div className="pie-formulario">
              <span className="contador">
                {comentario.length}/{MAX_LEN} caracteres
              </span>
              <button type="submit" disabled={!puedeEnviar}>
                {cargando ? "Enviando..." : "Enviar recomendación"}
              </button>
            </div>

            {error && <div className="mensaje-error">{error}</div>}
          </form>
        </section>

        <section className="lista-recomendaciones">
          <div className="encabezado-lista">
            <h2>Recomendaciones recibidas</h2>
            <span className="insignia">{comentarios.length}</span>
          </div>

          {cargando && comentarios.length === 0 && (
            <p className="bloque-vacio">Cargando…</p>
          )}

          {!cargando && comentarios.length === 0 && !error && (
            <div className="bloque-vacio">
              <div className="icono-vacio">💬</div>
              <p>Aún no hay recomendaciones. ¡Sé el primero en dejar una!</p>
            </div>
          )}

          <ul className="lista">
            {comentarios.map((c, i) => (
              <li key={i} className="item">
                <div className="avatar">
                  {(c.nombre?.[0] || c.Nombre?.[0] || "?").toUpperCase()}
                </div>
                <div className="cuerpo-item">
                  <div className="fila-superior">
                    <strong>{c.nombre ?? c.Nombre}</strong>
                    <span className="fecha">{formatoFechaES(c.fecha)}</span>
                  </div>
                  <p>{c.comentario ?? c.Comentario}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
