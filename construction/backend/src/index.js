const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/api/hola", (req, res) => {
    res.json({mensaje: "Hola desde Node.js!"});
});

app.listen(PORT, () => {
    console.log(`servidor backend escuchando en http://localhost:${PORT}/api/hola`)
});