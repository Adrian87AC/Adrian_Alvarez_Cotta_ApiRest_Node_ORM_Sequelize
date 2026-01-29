// services/detalles_pedidoService.js
import BaseService from "./BaseService.js";
import { sequelize } from "../config/db.js";
import detalles_pedidoModel from "../models/detalles_pedido.js";
import { DataTypes } from "sequelize";

// Inicializar el modelo
const Detalles_pedido = detalles_pedidoModel.init ? 
  detalles_pedidoModel.init(sequelize, DataTypes) : 
  detalles_pedidoModel(sequelize, DataTypes);

class Detalles_pedidoService extends BaseService {
  constructor() {
    super(Detalles_pedido);
  }

  // Aquí puedes añadir métodos personalizados para detalles_pedido
  // Ejemplo:
  // async findByNombre(nombre) {
  //   return await this.model.findAll({ where: { nombre } });
  // }
}

export default new Detalles_pedidoService();
