// routes/LogRoutes.js
import express from "express";
import LogController from "../controllers/LogController.js";

const router = express.Router();

// GET /api/Log - Obtener todos
router.get("/", LogController.getAll);

// GET /api/Log/:id - Obtener uno por ID
router.get("/:id", LogController.getById);

// POST /api/Log - Crear nuevo
router.post("/", LogController.create);

// PUT /api/Log/:id - Actualizar
router.put("/:id", LogController.update);

// DELETE /api/Log/:id - Eliminar
router.delete("/:id", LogController.delete);

export default router;
