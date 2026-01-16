// routes/index.js
import express from "express";
import logRoutes from "./logRoutes.js";
import productosRoutes from "./productosRoutes.js";
import willman56Routes from "./willman56Routes.js";

const router = express.Router();

router.use("/log", logRoutes);
router.use("/productos", productosRoutes);
router.use("/willman56", willman56Routes);

export default router;
