// controllers/pedidosController.js
import BaseController from "./base/BaseController.js";
import pedidosService from "../services/pedidosService.js";

class PedidosController extends BaseController {
  constructor() {
    super(pedidosService);
  }

  // Aquí puedes sobrescribir o añadir métodos personalizados
  // Ejemplo:
  // getAll = async (req, res) => {
  //   console.log("🔍 Obteniendo pedidos con lógica personalizada");
  //   await super.getAll(req, res);
  // }
}

export default new PedidosController();
