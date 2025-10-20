import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = [
  "http://localhost:5173",
  "https://miportafoliobvm.netlify.app"
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

const dbPath = path.join(__dirname, "Comentarios.json");

app.get("/comentarios", (req, res) => {
  try {
    const data = fs.readFileSync(dbPath, "utf-8");
    const json = JSON.parse(data);
    res.json(json.comentarios || []);
  } catch (error) {
    console.error("Error al leer los comentarios:", error);
    res.status(500).json({ error: "Error al leer los comentarios." });
  }
});

app.post("/comentarios", (req, res) => {
  try {
    const nuevo = req.body;
    const data = fs.readFileSync(dbPath, "utf-8");
    const json = JSON.parse(data);
    json.comentarios.push({ ...nuevo, fecha: new Date().toISOString() });
    fs.writeFileSync(dbPath, JSON.stringify(json, null, 2), "utf-8");
    res.status(201).json({ mensaje: "Comentario agregado correctamente." });
  } catch (error) {
    console.error("Error al guardar el comentario:", error);
    res.status(500).json({ error: "Error al guardar el comentario." });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${port}`);
});
