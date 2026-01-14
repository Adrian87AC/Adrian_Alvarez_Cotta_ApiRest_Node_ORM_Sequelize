// models/productos.js
import { Model } from 'sequelize';

export default function (sequelize, DataTypes) {
  class Productos extends Model {
    static init(sequelize, DataTypes) {
      return super.init({
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        nombre: {
          type: DataTypes.STRING(100),
          allowNull: false,
          validate: {
            notEmpty: {
              msg: 'El nombre no puede estar vacío'
            },
            len: {
              args: [3, 100],
              msg: 'El nombre debe tener entre 3 y 100 caracteres'
            }
          }
        },
        descripcion: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        precio: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
          defaultValue: 0.00,
          validate: {
            min: {
              args: [0],
              msg: 'El precio no puede ser negativo'
            }
          }
        },
        stock: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
          validate: {
            min: {
              args: [0],
              msg: 'El stock no puede ser negativo'
            }
          }
        }
      }, {
        sequelize,
        modelName: 'productos',
        tableName: 'productos',
        timestamps: true
      });
    }
  }

  return Productos;
}