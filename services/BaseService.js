// services/BaseService.js

/**
 * Servicio Base Genérico
 * Encapsula las operaciones de acceso a datos con Sequelize
 * Todos los servicios específicos heredan de esta clase
 */
class BaseService {
    constructor(model) {
        if (!model) {
            throw new Error('El modelo es requerido para el servicio');
        }
        this.model = model;
    }

    /**
     * Crear un nuevo registro
     */
    async create(data) {
        try {
            return await this.model.create(data);
        } catch (error) {
            console.error('Error en BaseService.create:', error);
            throw error;
        }
    }

    /**
     * Obtener todos los registros con filtros opcionales
     */
    async findAll(filters = {}) {
        try {
            const options = {};

            // Paginación
            if (filters.limit) {
                options.limit = parseInt(filters.limit);
            }
            if (filters.offset) {
                options.offset = parseInt(filters.offset);
            }

            // Ordenamiento
            if (filters.order) {
                options.order = [[filters.order, filters.direction || 'ASC']];
            }

            return await this.model.findAll(options);
        } catch (error) {
            console.error('Error en BaseService.findAll:', error);
            throw error;
        }
    }

    /**
     * Buscar un registro por ID
     */
    async findById(id) {
        try {
            return await this.model.findByPk(id);
        } catch (error) {
            console.error('Error en BaseService.findById:', error);
            throw error;
        }
    }

    /**
     * Actualizar un registro
     */
    async update(id, data) {
        try {
            const item = await this.model.findByPk(id);
            if (!item) {
                return null;
            }

            await item.update(data);
            return item;
        } catch (error) {
            console.error('Error en BaseService.update:', error);
            throw error;
        }
    }

    /**
     * Eliminar un registro
     */
    async delete(id) {
        try {
            const item = await this.model.findByPk(id);
            if (!item) {
                return null;
            }

            await item.destroy();
            return true;
        } catch (error) {
            console.error('Error en BaseService.delete:', error);
            throw error;
        }
    }

    /**
     * Contar registros
     */
    async count(where = {}) {
        try {
            return await this.model.count({ where });
        } catch (error) {
            console.error('Error en BaseService.count:', error);
            throw error;
        }
    }
}

export default BaseService;