// controllers/adrian20Controller.js
import BaseController from "./base/BaseController.js";
import adrian20Service from "../services/adrian20Service.js";

class Adrian20Controller extends BaseController {
  constructor() {
    super(adrian20Service);
  }

  // Aquí puedes sobrescribir o añadir métodos personalizados
  // Ejemplo:
  // getAll = async (req, res) => {
  //   console.log("🔍 Obteniendo adrian20 con lógica personalizada");
  //   await super.getAll(req, res);
  // }
}

export default new Adrian20Controller();
