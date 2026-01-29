// services/rockyService.js
import BaseService from "./BaseService.js";
import { sequelize } from "../config/db.js";
import rockyModel from "../models/rocky.js";
import { DataTypes } from "sequelize";

// Inicializar el modelo
const Rocky = rockyModel.init ? 
  rockyModel.init(sequelize, DataTypes) : 
  rockyModel(sequelize, DataTypes);

class RockyService extends BaseService {
  constructor() {
    super(Rocky);
  }

  // Aquí puedes añadir métodos personalizados para rocky
  // Ejemplo:
  // async findByNombre(nombre) {
  //   return await this.model.findAll({ where: { nombre } });
  // }
}

export default new RockyService();
