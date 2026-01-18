// routes/index.js
import express from "express";
import LogRoutes from "./LogRoutes.js";
import productosRoutes from "./productosRoutes.js";
import Willman56Routes from "./Willman56Routes.js";

const router = express.Router();

router.use("/Log", LogRoutes);
router.use("/productos", productosRoutes);
router.use("/Willman56", Willman56Routes);

export default router;
