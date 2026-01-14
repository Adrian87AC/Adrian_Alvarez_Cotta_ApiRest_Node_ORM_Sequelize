// services/logService.js
import BaseService from "./BaseService.js";
import { sequelize } from "../config/db.js";
import logModel from "../models/log.js";
import { DataTypes } from "sequelize";

// Inicializar el modelo
const Log = logModel.init ? 
  logModel.init(sequelize, DataTypes) : 
  logModel(sequelize, DataTypes);

class LogService extends BaseService {
  constructor() {
    super(Log);
  }

  // Aquí puedes añadir métodos personalizados para log
  // Ejemplo:
  // async findByNombre(nombre) {
  //   return await this.model.findAll({ where: { nombre } });
  // }
}

export default new LogService();
