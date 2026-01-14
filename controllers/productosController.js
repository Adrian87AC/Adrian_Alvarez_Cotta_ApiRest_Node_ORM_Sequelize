// controllers/productosController.js
import BaseController from "./base/BaseController.js";
import productosService from "../services/productosService.js";

class ProductosController extends BaseController {
  constructor() {
    super(productosService);
  }

  // Aquí puedes sobrescribir o añadir métodos personalizados
  // Ejemplo:
  // getAll = async (req, res) => {
  //   console.log("🔍 Obteniendo productos con lógica personalizada");
  //   await super.getAll(req, res);
  // }
}

export default new ProductosController();
