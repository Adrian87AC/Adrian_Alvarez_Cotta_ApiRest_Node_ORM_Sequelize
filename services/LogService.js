// services/LogService.js
import BaseService from "./BaseService.js";
import { sequelize } from "../config/db.js";
import LogModel from "../models/Log.js";
import { DataTypes } from "sequelize";

// Inicializar el modelo
const Log = LogModel.init ? 
  LogModel.init(sequelize, DataTypes) : 
  LogModel(sequelize, DataTypes);

class LogService extends BaseService {
  constructor() {
    super(Log);
  }

  // Aquí puedes añadir métodos personalizados para Log
  // Ejemplo:
  // async findByNombre(nombre) {
  //   return await this.model.findAll({ where: { nombre } });
  // }
}

export default new LogService();
