<<<<<<< HEAD
import express from "express";

const router = express.Router();

router.get("/", (_req:any, res:any) => {
    res.json({mensaje: "¡Hola desde el backend de productos!"});
});

export default router;
=======
const express = require("express");
const router = express.Router();

router.get("/", (req:any, res:any) => {
    res.json({mensaje: "¡Hola desde el backend de productos!"});
});

module.exports = router;
>>>>>>> dcda6b04256fc5fa6eae595eb6b5500e450716b3
