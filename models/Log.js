// models/Log.js
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
                    type: DataTypes.TEXT, // Using TEXT for potentially long log entries
                    allowNull: false
                }
            }, {
                sequelize,
                modelName: 'Log', // PascalCase for model name
                tableName: 'logs', // standardizing plural table name
                timestamps: true
            });
        }
    }

    return Log;
}
