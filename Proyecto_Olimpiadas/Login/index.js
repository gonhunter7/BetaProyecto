// Archivo: index.js (Login)
// Acá está el backend para el login y registro de usuarios de la agencia de viajes.
const express = require('express');
const { Pool } = require('pg');
const path = require('path');

// se crea la app de Express (el servidor web)
const app = express();

// Configuración de la base de datos PostgreSQL
const db = new Pool({
  user: 'postgres',      // Cambia los datos(no te olvides gon)
  host: 'localhost',
  database: 'Agencia_Viajes',
  password: 'riungon2350',
  port: 5432
});

// Middleware para poder leer datos de formularios (POST)
app.use(express.urlencoded({ extended: true }));
// Esto sirve para que los archivos de la carpeta 'public' se puedan ver desde el navegador
app.use(express.static('public'));

// Ruta principal: muestra el index.html cuando entrás a la raíz del sitio
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para el login
// Cuando el usuario manda el formulario de login, se ejecuta esto
app.post('/login', (req, res) => {
  const { email, password } = req.body; // Agarra los datos que mandó el usuario
  const consulta = 'SELECT * FROM Cliente WHERE email = $1 AND contraseña = $2'; // Consulta SQL

  db.query(consulta, [email, password], (err, resultado) => {
    if (err) {
      // Si hay un error con la base de datos, lo muestra en la consola y avisa al usuario(quedo bonito el mensaje :V )
      console.error('Error en consulta login:', err); // Esto imprime el error en consola
      return res.send('❌ Error en la consulta. Revisa la consola del servidor.');
    }
    if (resultado.rows.length > 0) {
      // Si encontró un usuario, lo deja pasar
      return res.send('✅ Bienvenido ' + resultado.rows[0].nombre);
    } else {
      // Si no, avisa que los datos están mal
      return res.send('❌ Usuario o contraseña incorrectos');
    }
  });
});

// Ruta para el registro de nuevos usuarios
// Cuando alguien se quiere registrar, se ejecuta esto
app.post('/register', (req, res) => {
  const { nombre, email, password } = req.body; // Agarra los datos del formulario
  const consulta = 'INSERT INTO Cliente (nombre, email, contraseña) VALUES ($1, $2, $3)'; // Consulta SQL para agregar

  db.query(consulta, [nombre, email, password], (err) => {
    if (err) {
      // Si hay un error al registrar, lo muestra en la consola y avisa al usuario
      console.error('Error en registro:', err); // Imprime el error en consola
      return res.send('❌ Error al registrar. Revisa la consola del servidor.');
    }
    // Si salió todo bien, avisa que se registró correctamente
    res.send('✅ Registrado correctamente');
  });
});

// Arranca el servidor en el puerto 3000
// Si vez el mensaje en consola, podés entrar desde el navegador
app.listen(3000, () => {
  console.log('Servidor funcionando en http://localhost:3000');
});

