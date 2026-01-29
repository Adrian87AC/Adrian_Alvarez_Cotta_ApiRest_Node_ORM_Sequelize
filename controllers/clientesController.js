// controllers/clientesController.js
import BaseController from "./base/BaseController.js";
import clientesService from "../services/clientesService.js";

class ClientesController extends BaseController {
  constructor() {
    super(clientesService);
  }

  // Aquí puedes sobrescribir o añadir métodos personalizados
  // Ejemplo:
  // getAll = async (req, res) => {
  //   console.log("🔍 Obteniendo clientes con lógica personalizada");
  //   await super.getAll(req, res);
  // }
}

export default new ClientesController();
