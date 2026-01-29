// routes/categoriasRoutes.js
import express from "express";
import categoriasController from "../controllers/categoriasController.js";

const router = express.Router();

// GET /api/categorias - Obtener todos
router.get("/", categoriasController.getAll);

// GET /api/categorias/:id - Obtener uno por ID
router.get("/:id", categoriasController.getById);

// POST /api/categorias - Crear nuevo
router.post("/", categoriasController.create);

// PUT /api/categorias/:id - Actualizar
router.put("/:id", categoriasController.update);

// DELETE /api/categorias/:id - Eliminar
router.delete("/:id", categoriasController.delete);

export default router;
