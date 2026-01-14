// models/init-models.js
import { DataTypes } from 'sequelize';
import _productos from './productos.js';
import _log from './log.js';

export default function initModels(sequelize) {
    const productos = _productos(sequelize, DataTypes);
    const log = _log(sequelize, DataTypes);

    // Aquí puedes definir relaciones entre modelos
    // Ejemplo:
    // productos.hasMany(log, { foreignKey: 'producto_id' });
    // log.belongsTo(productos, { foreignKey: 'producto_id' });

    return {
        productos,
        log
    };
}