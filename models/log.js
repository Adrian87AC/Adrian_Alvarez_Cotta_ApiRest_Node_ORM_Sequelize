// models/log.js
import { Model } from 'sequelize';

export default function (sequelize, DataTypes) {
    class Log extends Model {
        static init(sequelize, DataTypes) {
            return super.init({
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false
                },
                log: {
                    type: DataTypes.TEXT,
                    allowNull: false,
                    validate: {
                        notEmpty: {
                            msg: 'El mensaje de log no puede estar vacío'
                        }
                    }
                }
            }, {
                sequelize,
                modelName: 'log',
                tableName: 'logs',
                timestamps: true
            });
        }
    }

    return Log;
}