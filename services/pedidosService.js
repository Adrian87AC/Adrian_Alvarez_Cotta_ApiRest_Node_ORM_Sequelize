// services/pedidosService.js
import BaseService from "./BaseService.js";
import { sequelize } from "../config/db.js";
import pedidosModel from "../models/pedidos.js";
import { DataTypes } from "sequelize";

// Inicializar el modelo
const Pedidos = pedidosModel.init ? 
  pedidosModel.init(sequelize, DataTypes) : 
  pedidosModel(sequelize, DataTypes);

class PedidosService extends BaseService {
  constructor() {
    super(Pedidos);
  }

  // Aquí puedes añadir métodos personalizados para pedidos
  // Ejemplo:
  // async findByNombre(nombre) {
  //   return await this.model.findAll({ where: { nombre } });
  // }
}

export default new PedidosService();
