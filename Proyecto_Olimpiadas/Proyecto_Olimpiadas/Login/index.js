const express = require('express');
const { Pool } = require('pg');
const path = require('path');

const app = express();
const db = new Pool({
  user: 'postgres',      // Cambia aquí tus datos
  host: 'localhost',
  database: 'Agencia_Viajes',
  password: 'riungon2350',
  port: 5432
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Servir index.html desde /public
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const consulta = 'SELECT * FROM Cliente WHERE email = $1 AND contraseña = $2';

  db.query(consulta, [email, password], (err, resultado) => {
    if (err) {
      console.error('Error en consulta login:', err); // Esto imprime el error en consola
      return res.send('❌ Error en la consulta. Revisa la consola del servidor.');
    }
    if (resultado.rows.length > 0) {
      return res.send('✅ Bienvenido ' + resultado.rows[0].nombre);
    } else {
      return res.send('❌ Usuario o contraseña incorrectos');
    }
  });
});


app.post('/register', (req, res) => {
  const { nombre, email, password } = req.body;
  const consulta = 'INSERT INTO Cliente (nombre, email, contraseña) VALUES ($1, $2, $3)';

  db.query(consulta, [nombre, email, password], (err) => {
    if (err) {
      console.error('Error en registro:', err); // Imprime el error en consola
      return res.send('❌ Error al registrar. Revisa la consola del servidor.');
    }
    res.send('✅ Registrado correctamente');
  });
});

app.listen(3000, () => {
  console.log('Servidor funcionando en http://localhost:3000');
});

