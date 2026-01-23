// services/DetallesPedidoService.js
import BaseService from "./BaseService.js";
import { sequelize } from "../config/db.js";
import DetallesPedidoModel from "../models/DetallesPedido.js";
import { DataTypes } from "sequelize";

// Inicializar el modelo
const DetallesPedido = DetallesPedidoModel.init ? 
  DetallesPedidoModel.init(sequelize, DataTypes) : 
  DetallesPedidoModel(sequelize, DataTypes);

class DetallesPedidoService extends BaseService {
  constructor() {
    super(DetallesPedido);
  }

  // Aquí puedes añadir métodos personalizados para DetallesPedido
  // Ejemplo:
  // async findByNombre(nombre) {
  //   return await this.model.findAll({ where: { nombre } });
  // }
}

export default new DetallesPedidoService();
