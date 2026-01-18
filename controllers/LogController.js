// controllers/LogController.js
import BaseController from "./base/BaseController.js";
import LogService from "../services/LogService.js";

class LogController extends BaseController {
  constructor() {
    super(LogService);
  }

  // Aquí puedes sobrescribir o añadir métodos personalizados
  // Ejemplo:
  // getAll = async (req, res) => {
  //   console.log("🔍 Obteniendo Log con lógica personalizada");
  //   await super.getAll(req, res);
  // }
}

export default new LogController();
