const express = require('express');
const { Pool } = require('pg');
const app = express();

const pool = new Pool({
  user: 'postgres',      // Cambia los datos
  host: 'localhost',
  database: 'Agencia_Viajes',
  password: 'riungon2350',
  port: 5432
});

app.use(express.json());
app.use(express.static('public'));  // si hay html, css, js en public

app.get('/api/productos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM productos WHERE activo = true');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
