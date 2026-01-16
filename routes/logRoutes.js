// routes/logRoutes.js
import express from "express";
import logController from "../controllers/logController.js";

const router = express.Router();

// GET /api/log - Obtener todos
router.get("/", logController.getAll);

// GET /api/log/:id - Obtener uno por ID
router.get("/:id", logController.getById);

// POST /api/log - Crear nuevo
router.post("/", logController.create);

// PUT /api/log/:id - Actualizar
router.put("/:id", logController.update);

// DELETE /api/log/:id - Eliminar
router.delete("/:id", logController.delete);

export default router;
