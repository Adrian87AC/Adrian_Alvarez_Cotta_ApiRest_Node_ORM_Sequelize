// routes/pedidosRoutes.js
import express from "express";
import pedidosController from "../controllers/pedidosController.js";

const router = express.Router();

// GET /api/pedidos - Obtener todos
router.get("/", pedidosController.getAll);

// GET /api/pedidos/:id - Obtener uno por ID
router.get("/:id", pedidosController.getById);

// POST /api/pedidos - Crear nuevo
router.post("/", pedidosController.create);

// PUT /api/pedidos/:id - Actualizar
router.put("/:id", pedidosController.update);

// DELETE /api/pedidos/:id - Eliminar
router.delete("/:id", pedidosController.delete);

export default router;
