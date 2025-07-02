<<<<<<< HEAD
import express from "express";
import routers from "./routes/productos"

const app = express();
const PORT = 3000;

app.get("/", (_req:any, res:any) => {
=======
const routers = require("./routes/productos")
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req:any, res:any) => {
>>>>>>> dcda6b04256fc5fa6eae595eb6b5500e450716b3
    res.send("¡Hola desde el backend!");
});

app.use("/api/productos", routers);

app.listen(PORT, () => {
    console.log(`Backend escuchando en http://localhost:${PORT}`);
});