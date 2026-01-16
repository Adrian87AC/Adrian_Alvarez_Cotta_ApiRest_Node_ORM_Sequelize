import { Model } from 'sequelize';

export default function (sequelize, DataTypes) {
    class Willman56 extends Model {
        static init(sequelize, DataTypes) {
            return super.init({
                autor: {
                    type: DataTypes.STRING,
                    primaryKey: true,
                    allowNull: false,
                    validate: {
                        notEmpty: {
                            msg: 'El autor no puede estar vacío'
                        }
                    }
                },
                descripcion: {
                    type: DataTypes.TEXT,
                    allowNull: true
                }
            }, {
                sequelize,
                modelName: 'willman56',
                tableName: 'willman56',
                timestamps: true
            });
        }
    }

    return Willman56;
}
