const express = require("express");
const rout = express.Router();

router.get("/", (req:any, res:any) => {
    res.json({mensaje: "¡Hola desde el backend de login!"});
});

module.exports = router;