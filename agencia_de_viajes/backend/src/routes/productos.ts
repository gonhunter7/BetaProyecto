import express from "express";

const router = express.Router();

router.get("/", (_req:any, res:any) => {
    res.json({mensaje: "¡Hola desde el backend de productos!"});
});

export default router;