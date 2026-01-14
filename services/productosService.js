// services/productosService.js
import BaseService from "./BaseService.js";
import { sequelize } from "../config/db.js";
import productosModel from "../models/productos.js";
import { DataTypes } from "sequelize";

// Inicializar el modelo
const Productos = productosModel.init ? 
  productosModel.init(sequelize, DataTypes) : 
  productosModel(sequelize, DataTypes);

class ProductosService extends BaseService {
  constructor() {
    super(Productos);
  }

  // Aquí puedes añadir métodos personalizados para productos
  // Ejemplo:
  // async findByNombre(nombre) {
  //   return await this.model.findAll({ where: { nombre } });
  // }
}

export default new ProductosService();
