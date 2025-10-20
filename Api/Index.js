import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";
import { createClient } from "@supabase/supabase-js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

/* ===== CORS ===== */
const allowedOrigins = new Set([
  "http://localhost:5173",
  "https://miportafoliobvm.netlify.app",
]);
app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin) return cb(null, true); 
      const ok =
        allowedOrigins.has(origin) || origin.endsWith(".netlify.app"); 
      return ok ? cb(null, true) : cb(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

/* ===== SUPABASE (usar Service Role en Railway) ===== */
const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = process.env;
if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error("❌ Faltan SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY en las variables de entorno");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

/* ===== RUTAS ===== */

// Healthcheck
app.get("/healthz", (_req, res) => res.json({ ok: true }));

// GET /comentarios?page=&limit=
app.get("/comentarios", async (req, res) => {
  try {
    const page = Math.max(parseInt(req.query.page || "1", 10), 1);
    const limit = Math.max(parseInt(req.query.limit || "50", 10), 1);
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    const { data, error, count } = await supabase
      .from("comentarios")
      .select("*", { count: "exact" })
      .order("fecha", { ascending: false })
      .range(from, to);

    if (error) throw error;
    res.json({ total: count ?? 0, page, limit, data: data ?? [] });
  } catch (e) {
    console.error("Error al leer comentarios:", e);
    res.status(500).json({ error: "Error al leer los comentarios." });
  }
});

// POST /comentarios  { nombre, comentario }
app.post("/comentarios", async (req, res) => {
  try {
    const { nombre, comentario } = req.body || {};
    if (!nombre || !comentario) {
      return res
        .status(400)
        .json({ error: "Campos requeridos: nombre, comentario" });
    }

    const nuevo = {
      nombre: String(nombre).trim(),
      comentario: String(comentario).trim(),
      // 'fecha' la pone la DB automáticamente con now()
    };

    const { error } = await supabase.from("comentarios").insert(nuevo);
    if (error) throw error;

    res.status(201).json({ mensaje: "Comentario agregado correctamente." });
  } catch (e) {
    console.error("Error al guardar el comentario:", e);
    res.status(500).json({ error: "Error al guardar el comentario." });
  }
});

// 404 genérico
app.use((_req, res) => res.status(404).json({ error: "Ruta no encontrada" }));

/* ===== START ===== */
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
