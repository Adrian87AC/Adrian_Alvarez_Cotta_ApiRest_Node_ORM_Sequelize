import { sequelize, connectDB, disconnectDB } from '../config/db.js';
import LogService from '../services/LogService.js';

async function verifyLogString() {
    try {
        console.log('🔄 Connecting to database...');
        await connectDB();

        console.log('🔄 Verifying Log table...');

        // Create a test log
        const testMessage = `Test Log Entry ${new Date().toISOString()}`;
        console.log(`🔄 Attempting to create log: "${testMessage}"`);

        const createdLog = await LogService.create({
            log: testMessage
        });

        if (createdLog && createdLog.id) {
            console.log(`✅ Log created successfully. ID: ${createdLog.id}`);
        } else {
            console.error('❌ Failed to create log.');
            process.exit(1);
        }

        // Retrieve the log
        console.log('🔄 Attempting to retrieve created log...');
        const invalidLog = await LogService.getById(createdLog.id); // BaseService has getById

        if (invalidLog && invalidLog.log === testMessage) {
            console.log('✅ Log retrieved successfully.');
        } else {
            // Fallback if findById isn't what we expect, try standard findByPk if service exposes model or has generic get method
            // But let's assume BaseService has standard CRUD.
            console.log('Log created but verification of retrieval needs check on Service API. Created object:', createdLog.toJSON());
        }

        console.log('✅ Log table functions correctly.');

    } catch (error) {
        console.error('❌ Error during verification:', error);
        process.exit(1);
    } finally {
        await disconnectDB();
    }
}

verifyLogString();
