// services/clientesService.js
import BaseService from "./BaseService.js";
import { sequelize } from "../config/db.js";
import clientesModel from "../models/clientes.js";
import { DataTypes } from "sequelize";

// Inicializar el modelo
const Clientes = clientesModel.init ? 
  clientesModel.init(sequelize, DataTypes) : 
  clientesModel(sequelize, DataTypes);

class ClientesService extends BaseService {
  constructor() {
    super(Clientes);
  }

  // Aquí puedes añadir métodos personalizados para clientes
  // Ejemplo:
  // async findByNombre(nombre) {
  //   return await this.model.findAll({ where: { nombre } });
  // }
}

export default new ClientesService();
