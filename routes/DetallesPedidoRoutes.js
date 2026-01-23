// routes/DetallesPedidoRoutes.js
import express from "express";
import DetallesPedidoController from "../controllers/DetallesPedidoController.js";

const router = express.Router();

// GET /api/DetallesPedido - Obtener todos
router.get("/", DetallesPedidoController.getAll);

// GET /api/DetallesPedido/:id - Obtener uno por ID
router.get("/:id", DetallesPedidoController.getById);

// POST /api/DetallesPedido - Crear nuevo
router.post("/", DetallesPedidoController.create);

// PUT /api/DetallesPedido/:id - Actualizar
router.put("/:id", DetallesPedidoController.update);

// DELETE /api/DetallesPedido/:id - Eliminar
router.delete("/:id", DetallesPedidoController.delete);

export default router;
