// controllers/willman56Controller.js
import BaseController from "./base/BaseController.js";
import willman56Service from "../services/willman56Service.js";

class Willman56Controller extends BaseController {
  constructor() {
    super(willman56Service);
  }

  // Aquí puedes sobrescribir o añadir métodos personalizados
  // Ejemplo:
  // getAll = async (req, res) => {
  //   console.log("🔍 Obteniendo willman56 con lógica personalizada");
  //   await super.getAll(req, res);
  // }
}

export default new Willman56Controller();
