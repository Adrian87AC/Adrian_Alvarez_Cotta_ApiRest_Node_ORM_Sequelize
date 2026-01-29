// controllers/rockyController.js
import BaseController from "./base/BaseController.js";
import rockyService from "../services/rockyService.js";

class RockyController extends BaseController {
  constructor() {
    super(rockyService);
  }

  // Aquí puedes sobrescribir o añadir métodos personalizados
  // Ejemplo:
  // getAll = async (req, res) => {
  //   console.log("🔍 Obteniendo rocky con lógica personalizada");
  //   await super.getAll(req, res);
  // }
}

export default new RockyController();
