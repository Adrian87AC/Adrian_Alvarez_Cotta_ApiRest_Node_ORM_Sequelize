// controllers/detalles_pedidoController.js
import BaseController from "./base/BaseController.js";
import detalles_pedidoService from "../services/detalles_pedidoService.js";

class Detalles_pedidoController extends BaseController {
  constructor() {
    super(detalles_pedidoService);
  }

  // Aquí puedes sobrescribir o añadir métodos personalizados
  // Ejemplo:
  // getAll = async (req, res) => {
  //   console.log("🔍 Obteniendo detalles_pedido con lógica personalizada");
  //   await super.getAll(req, res);
  // }
}

export default new Detalles_pedidoController();
