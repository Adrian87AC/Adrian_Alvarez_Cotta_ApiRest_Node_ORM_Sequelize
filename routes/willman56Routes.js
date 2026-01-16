// routes/willman56Routes.js
import express from "express";
import willman56Controller from "../controllers/willman56Controller.js";

const router = express.Router();

// GET /api/willman56 - Obtener todos
router.get("/", willman56Controller.getAll);

// GET /api/willman56/:id - Obtener uno por ID
router.get("/:id", willman56Controller.getById);

// POST /api/willman56 - Crear nuevo
router.post("/", willman56Controller.create);

// PUT /api/willman56/:id - Actualizar
router.put("/:id", willman56Controller.update);

// DELETE /api/willman56/:id - Eliminar
router.delete("/:id", willman56Controller.delete);

export default router;
