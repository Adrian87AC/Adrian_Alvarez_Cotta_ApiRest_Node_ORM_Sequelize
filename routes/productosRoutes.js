// routes/productosRoutes.js
import express from "express";
import productosController from "../controllers/productosController.js";

const router = express.Router();

// GET /api/productos - Obtener todos
router.get("/", productosController.getAll);

// GET /api/productos/:id - Obtener uno por ID
router.get("/:id", productosController.getById);

// POST /api/productos - Crear nuevo
router.post("/", productosController.create);

// PUT /api/productos/:id - Actualizar
router.put("/:id", productosController.update);

// DELETE /api/productos/:id - Eliminar
router.delete("/:id", productosController.delete);

export default router;
