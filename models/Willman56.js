// models/Willman.js
import { Model } from 'sequelize';

export default function (sequelize, DataTypes) {
    class Willman extends Model {
        static init(sequelize, DataTypes) {
            return super.init({
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false
                },
                nombre: {
                    type: DataTypes.STRING,
                    allowNull: true // assuming name can be optional as user emphasized description
                },
                descripcion: {
                    type: DataTypes.STRING,
                    allowNull: true,
                    defaultValue: 'willman56' // "una descripción que sea willman56"
                }
            }, {
                sequelize,
                modelName: 'Willman',
                tableName: 'willmans', // standard pluralization
                timestamps: true
            });
        }
    }

    return Willman;
}
