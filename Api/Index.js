// index.js (ESM)
import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = ["http://localhost:5173", "https://miportafoliobvm.netlify.app"];

app.use(cors({
  origin: (origin, cb) => (!origin || allowedOrigins.includes(origin)) ? cb(null, true) : cb(new Error("Not allowed by CORS")),
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

const dbPath = path.join(__dirname, "Comentarios.json");
if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, JSON.stringify({ comentarios: [] }, null, 2), "utf-8");
}

app.get("/comentarios", (req, res) => {
  try {
    const json = JSON.parse(fs.readFileSync(dbPath, "utf-8"));
    res.json(json.comentarios || []);
  } catch (e) {
    console.error("Error al leer los comentarios:", e);
    res.status(500).json({ error: "Error al leer los comentarios." });
  }
});

app.post("/comentarios", (req, res) => {
  try {
    const json = JSON.parse(fs.readFileSync(dbPath, "utf-8"));
    json.comentarios = json.comentarios || [];
    json.comentarios.push({ ...req.body, fecha: new Date().toISOString() });
    fs.writeFileSync(dbPath, JSON.stringify(json, null, 2), "utf-8");
    res.status(201).json({ mensaje: "Comentario agregado correctamente." });
  } catch (e) {
    console.error("Error al guardar el comentario:", e);
    res.status(500).json({ error: "Error al guardar el comentario." });
  }
});

app.use((req, res) => res.status(404).json({ error: "Ruta no encontrada" }));

app.listen(PORT, () => {
  console.log(`🚀 Server on http://0.0.0.0:${PORT}`);
});
