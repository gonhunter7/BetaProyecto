const express = require("express");
const router = express.Router();

router.get("/", (req:any, res:any) => {
    res.json({mensaje: "¡Hola desde el backend de productos!"});
});

module.exports = router;