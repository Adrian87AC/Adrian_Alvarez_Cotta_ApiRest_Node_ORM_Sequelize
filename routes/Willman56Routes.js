// routes/Willman56Routes.js
import express from "express";
import Willman56Controller from "../controllers/Willman56Controller.js";

const router = express.Router();

// GET /api/Willman56 - Obtener todos
router.get("/", Willman56Controller.getAll);

// GET /api/Willman56/:id - Obtener uno por ID
router.get("/:id", Willman56Controller.getById);

// POST /api/Willman56 - Crear nuevo
router.post("/", Willman56Controller.create);

// PUT /api/Willman56/:id - Actualizar
router.put("/:id", Willman56Controller.update);

// DELETE /api/Willman56/:id - Eliminar
router.delete("/:id", Willman56Controller.delete);

export default router;
