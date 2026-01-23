import { Model } from 'sequelize';

export default function (sequelize, DataTypes) {
    class DetallesPedido extends Model {
        static init(sequelize, DataTypes) {
            return super.init({
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false
                },
                pedido_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                producto_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                cantidad: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    defaultValue: 1
                },
                precio_unitario: {
                    type: DataTypes.DECIMAL(10, 2),
                    allowNull: false
                },
                subtotal: {
                    type: DataTypes.DECIMAL(10, 2),
                    allowNull: true
                }
            }, {
                sequelize,
                modelName: 'DetallesPedido',
                tableName: 'detalles_pedido',
                timestamps: false
            });
        }
    }

    return DetallesPedido;
}
