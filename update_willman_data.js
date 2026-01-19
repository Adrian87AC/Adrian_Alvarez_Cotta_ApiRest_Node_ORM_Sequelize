import { connectDB, disconnectDB, sequelize } from './config/db.js';
import Willman56Model from './models/Willman56.js';
import { DataTypes } from 'sequelize';

const updateData = async () => {
    try {
        await connectDB();

        // Init model
        const WillmanClass = Willman56Model(sequelize, DataTypes);
        const Willman56 = WillmanClass.init(sequelize, DataTypes);

        // Sync
        await Willman56.sync();

        // Delete existing
        await Willman56.destroy({ where: {}, truncate: true });

        // Insert requested data
        // Note: ID is auto-increment integer, we cannot force it to be string 'willman' strictly in DB
        // without changing schema. We will insert the data requested.
        const created = await Willman56.create({
            nombre: 'willman',
            descripcion: 'es bueno en su trabajo en el postman'
        });

        console.log('Data updated:', created.toJSON());

        await disconnectDB();
    } catch (error) {
        console.error('Error updating data:', error);
        process.exit(1);
    }
};

updateData();
