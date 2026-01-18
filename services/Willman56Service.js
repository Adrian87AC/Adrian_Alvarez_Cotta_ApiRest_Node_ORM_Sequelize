// services/Willman56Service.js
import BaseService from "./BaseService.js";
import { sequelize } from "../config/db.js";
import Willman56Model from "../models/Willman56.js";
import { DataTypes } from "sequelize";

// Inicializar el modelo
const Willman56 = Willman56Model.init ? 
  Willman56Model.init(sequelize, DataTypes) : 
  Willman56Model(sequelize, DataTypes);

class Willman56Service extends BaseService {
  constructor() {
    super(Willman56);
  }

  // Aquí puedes añadir métodos personalizados para Willman56
  // Ejemplo:
  // async findByNombre(nombre) {
  //   return await this.model.findAll({ where: { nombre } });
  // }
}

export default new Willman56Service();
