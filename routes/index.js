// routes/index.js
import express from "express";
import productosRoutes from "./productosRoutes.js";

const router = express.Router();

router.use("/productos", productosRoutes);

export default router;
