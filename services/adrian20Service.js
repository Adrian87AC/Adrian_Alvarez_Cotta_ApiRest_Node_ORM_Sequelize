// services/adrian20Service.js
import BaseService from "./BaseService.js";
import { sequelize } from "../config/db.js";
import adrian20Model from "../models/adrian20.js";
import { DataTypes } from "sequelize";

// Inicializar el modelo
const Adrian20 = adrian20Model.init ? 
  adrian20Model.init(sequelize, DataTypes) : 
  adrian20Model(sequelize, DataTypes);

class Adrian20Service extends BaseService {
  constructor() {
    super(Adrian20);
  }

  // Aquí puedes añadir métodos personalizados para adrian20
  // Ejemplo:
  // async findByNombre(nombre) {
  //   return await this.model.findAll({ where: { nombre } });
  // }
}

export default new Adrian20Service();
