import express from "express";
import routers from "./routes/productos"

const app = express();
const PORT = 3000;

app.get("/", (_req:any, res:any) => {
    res.send("¡Hola desde el backend!");
});

app.use("/api/productos", routers);

app.listen(PORT, () => {
    console.log(`Backend escuchando en http://localhost:${PORT}`);
});