// routes/rockyRoutes.js
import express from "express";
import rockyController from "../controllers/rockyController.js";

const router = express.Router();

// GET /api/rocky - Obtener todos
router.get("/", rockyController.getAll);

// GET /api/rocky/:id - Obtener uno por ID
router.get("/:id", rockyController.getById);

// POST /api/rocky - Crear nuevo
router.post("/", rockyController.create);

// PUT /api/rocky/:id - Actualizar
router.put("/:id", rockyController.update);

// DELETE /api/rocky/:id - Eliminar
router.delete("/:id", rockyController.delete);

export default router;
