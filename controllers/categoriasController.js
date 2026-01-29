// controllers/categoriasController.js
import BaseController from "./base/BaseController.js";
import categoriasService from "../services/categoriasService.js";

class CategoriasController extends BaseController {
  constructor() {
    super(categoriasService);
  }

  // Aquí puedes sobrescribir o añadir métodos personalizados
  // Ejemplo:
  // getAll = async (req, res) => {
  //   console.log("🔍 Obteniendo categorias con lógica personalizada");
  //   await super.getAll(req, res);
  // }
}

export default new CategoriasController();
