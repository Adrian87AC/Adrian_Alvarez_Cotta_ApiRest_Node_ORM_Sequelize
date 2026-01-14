// controllers/logController.js
import BaseController from "./base/BaseController.js";
import logService from "../services/logService.js";

class LogController extends BaseController {
  constructor() {
    super(logService);
  }

  // Aquí puedes sobrescribir o añadir métodos personalizados
  // Ejemplo:
  // getAll = async (req, res) => {
  //   console.log("🔍 Obteniendo log con lógica personalizada");
  //   await super.getAll(req, res);
  // }
}

export default new LogController();
