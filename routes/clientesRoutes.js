// routes/clientesRoutes.js
import express from "express";
import clientesController from "../controllers/clientesController.js";

const router = express.Router();

// GET /api/clientes - Obtener todos
router.get("/", clientesController.getAll);

// GET /api/clientes/:id - Obtener uno por ID
router.get("/:id", clientesController.getById);

// POST /api/clientes - Crear nuevo
router.post("/", clientesController.create);

// PUT /api/clientes/:id - Actualizar
router.put("/:id", clientesController.update);

// DELETE /api/clientes/:id - Eliminar
router.delete("/:id", clientesController.delete);

export default router;
