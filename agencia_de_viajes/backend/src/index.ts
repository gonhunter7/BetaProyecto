const routers = require("./routes/productos")
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req:any, res:any) => {
    res.send("¡Hola desde el backend!");
});

app.use("/api/productos", routers);

app.listen(PORT, () => {
    console.log(`Backend escuchando en http://localhost:${PORT}`);
});