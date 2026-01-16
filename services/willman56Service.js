// services/willman56Service.js
import BaseService from "./BaseService.js";
import { sequelize } from "../config/db.js";
import willman56Model from "../models/willman56.js";
import { DataTypes } from "sequelize";

// Inicializar el modelo
const Willman56 = willman56Model.init ? 
  willman56Model.init(sequelize, DataTypes) : 
  willman56Model(sequelize, DataTypes);

class Willman56Service extends BaseService {
  constructor() {
    super(Willman56);
  }

  // Aquí puedes añadir métodos personalizados para willman56
  // Ejemplo:
  // async findByNombre(nombre) {
  //   return await this.model.findAll({ where: { nombre } });
  // }
}

export default new Willman56Service();
