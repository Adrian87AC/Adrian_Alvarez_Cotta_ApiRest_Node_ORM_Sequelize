// routes/adrian20Routes.js
import express from "express";
import adrian20Controller from "../controllers/adrian20Controller.js";

const router = express.Router();

// GET /api/adrian20 - Obtener todos
router.get("/", adrian20Controller.getAll);

// GET /api/adrian20/:id - Obtener uno por ID
router.get("/:id", adrian20Controller.getById);

// POST /api/adrian20 - Crear nuevo
router.post("/", adrian20Controller.create);

// PUT /api/adrian20/:id - Actualizar
router.put("/:id", adrian20Controller.update);

// DELETE /api/adrian20/:id - Eliminar
router.delete("/:id", adrian20Controller.delete);

export default router;
