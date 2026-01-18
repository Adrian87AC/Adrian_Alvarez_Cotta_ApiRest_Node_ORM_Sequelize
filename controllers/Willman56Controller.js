// controllers/Willman56Controller.js
import BaseController from "./base/BaseController.js";
import Willman56Service from "../services/Willman56Service.js";

class Willman56Controller extends BaseController {
  constructor() {
    super(Willman56Service);
  }

  // Aquí puedes sobrescribir o añadir métodos personalizados
  // Ejemplo:
  // getAll = async (req, res) => {
  //   console.log("🔍 Obteniendo Willman56 con lógica personalizada");
  //   await super.getAll(req, res);
  // }
}

export default new Willman56Controller();
