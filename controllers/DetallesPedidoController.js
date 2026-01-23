// controllers/DetallesPedidoController.js
import BaseController from "./base/BaseController.js";
import DetallesPedidoService from "../services/DetallesPedidoService.js";

class DetallesPedidoController extends BaseController {
  constructor() {
    super(DetallesPedidoService);
  }

  // Aquí puedes sobrescribir o añadir métodos personalizados
  // Ejemplo:
  // getAll = async (req, res) => {
  //   console.log("🔍 Obteniendo DetallesPedido con lógica personalizada");
  //   await super.getAll(req, res);
  // }
}

export default new DetallesPedidoController();
