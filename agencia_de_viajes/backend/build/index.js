"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productos_1 = __importDefault(require("./routes/productos"));
const app = (0, express_1.default)();
const PORT = 3000;
app.get("/", (_req, res) => {
    res.send("¡Hola desde el backend!");
});
app.use("/api/productos", productos_1.default);
app.listen(PORT, () => {
    console.log(`Backend escuchando en http://localhost:${PORT}`);
});
