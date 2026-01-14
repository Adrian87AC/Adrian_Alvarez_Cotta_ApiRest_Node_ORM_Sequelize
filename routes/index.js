// routes/index.js
import express from "express";
import logRoutes from "./logRoutes.js";
import productosRoutes from "./productosRoutes.js";

const router = express.Router();

router.use("/log", logRoutes);
router.use("/productos", productosRoutes);

export default router;
