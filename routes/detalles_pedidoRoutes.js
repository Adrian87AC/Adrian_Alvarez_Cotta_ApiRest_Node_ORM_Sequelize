// routes/detalles_pedidoRoutes.js
import express from "express";
import detalles_pedidoController from "../controllers/detalles_pedidoController.js";

const router = express.Router();

// GET /api/detalles_pedido - Obtener todos
router.get("/", detalles_pedidoController.getAll);

// GET /api/detalles_pedido/:id - Obtener uno por ID
router.get("/:id", detalles_pedidoController.getById);

// POST /api/detalles_pedido - Crear nuevo
router.post("/", detalles_pedidoController.create);

// PUT /api/detalles_pedido/:id - Actualizar
router.put("/:id", detalles_pedidoController.update);

// DELETE /api/detalles_pedido/:id - Eliminar
router.delete("/:id", detalles_pedidoController.delete);

export default router;
