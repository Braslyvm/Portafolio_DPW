const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

const dbPath = path.join(__dirname, 'Comentarios.json');

if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, JSON.stringify({ comentarios: [] }, null, 2), 'utf-8');
  console.log('Archivo Comentarios.json creado automáticamente.');
}


app.get('/comentarios', (req, res) => {
  try {
    const data = fs.readFileSync(dbPath, 'utf-8');
    const json = JSON.parse(data);
    res.json(json.comentarios || []);
  } catch (error) {
    console.error('Error al leer los comentarios:', error);
    res.status(500).json({ error: 'Error al leer los comentarios.' });
  }
});

app.post('/comentarios', (req, res) => {
  try {
    const nuevo = req.body;
    const data = fs.readFileSync(dbPath, 'utf-8');
    const json = JSON.parse(data);
    json.comentarios.push(nuevo);
    fs.writeFileSync(dbPath, JSON.stringify(json, null, 2), 'utf-8');
    res.status(201).json({ message: 'Comentario agregado correctamente.' });
  } catch (error) {
    console.error('Error al guardar el comentario:', error);
    res.status(500).json({ error: 'Error al guardar el comentario.' });
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
