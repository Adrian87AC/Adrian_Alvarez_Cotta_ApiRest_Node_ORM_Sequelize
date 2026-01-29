// services/categoriasService.js
import BaseService from "./BaseService.js";
import { sequelize } from "../config/db.js";
import categoriasModel from "../models/categorias.js";
import { DataTypes } from "sequelize";

// Inicializar el modelo
const Categorias = categoriasModel.init ? 
  categoriasModel.init(sequelize, DataTypes) : 
  categoriasModel(sequelize, DataTypes);

class CategoriasService extends BaseService {
  constructor() {
    super(Categorias);
  }

  // Aquí puedes añadir métodos personalizados para categorias
  // Ejemplo:
  // async findByNombre(nombre) {
  //   return await this.model.findAll({ where: { nombre } });
  // }
}

export default new CategoriasService();
