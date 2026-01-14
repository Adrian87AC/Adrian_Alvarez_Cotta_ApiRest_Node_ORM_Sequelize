// controllers/base/BaseController.js

/**
 * Controlador Base Genérico
 * Implementa el patrón Template Method para operaciones CRUD
 * Los controladores específicos heredan de esta clase
 */
class BaseController {
    constructor(service) {
        if (!service) {
            throw new Error('El servicio es requerido para el controlador');
        }
        this.service = service;
    }

    /**
     * CREATE - Crear un nuevo recurso
     * POST /api/recurso
     */
    create = async (req, res) => {
        try {
            const nuevo = await this.service.create(req.body);
            res.status(201).json({
                success: true,
                data: nuevo,
                mensaje: 'Recurso creado correctamente'
            });
        } catch (error) {
            console.error('Error en create:', error);
            res.status(500).json({
                success: false,
                mensaje: 'Error al crear el recurso',
                error: error.message
            });
        }
    };

    /**
     * READ ALL - Obtener todos los recursos
     * GET /api/recurso
     */
    getAll = async (req, res) => {
        try {
            const lista = await this.service.findAll(req.query);
            res.json({
                success: true,
                data: lista,
                count: lista.length
            });
        } catch (error) {
            console.error('Error en getAll:', error);
            res.status(500).json({
                success: false,
                mensaje: 'Error al obtener los recursos',
                error: error.message
            });
        }
    };

    /**
     * READ ONE - Obtener un recurso por ID
     * GET /api/recurso/:id
     */
    getById = async (req, res) => {
        try {
            const item = await this.service.findById(req.params.id);

            if (!item) {
                return res.status(404).json({
                    success: false,
                    mensaje: 'Recurso no encontrado'
                });
            }

            res.json({
                success: true,
                data: item
            });
        } catch (error) {
            console.error('Error en getById:', error);
            res.status(500).json({
                success: false,
                mensaje: 'Error al obtener el recurso',
                error: error.message
            });
        }
    };

    /**
     * UPDATE - Actualizar un recurso
     * PUT /api/recurso/:id
     */
    update = async (req, res) => {
        try {
            const actualizado = await this.service.update(req.params.id, req.body);

            if (!actualizado) {
                return res.status(404).json({
                    success: false,
                    mensaje: 'Recurso no encontrado'
                });
            }

            res.json({
                success: true,
                data: actualizado,
                mensaje: 'Recurso actualizado correctamente'
            });
        } catch (error) {
            console.error('Error en update:', error);
            res.status(500).json({
                success: false,
                mensaje: 'Error al actualizar el recurso',
                error: error.message
            });
        }
    };

    /**
     * DELETE - Eliminar un recurso
     * DELETE /api/recurso/:id
     */
    delete = async (req, res) => {
        try {
            const eliminado = await this.service.delete(req.params.id);

            if (!eliminado) {
                return res.status(404).json({
                    success: false,
                    mensaje: 'Recurso no encontrado'
                });
            }

            res.json({
                success: true,
                mensaje: 'Recurso eliminado correctamente'
            });
        } catch (error) {
            console.error('Error en delete:', error);
            res.status(500).json({
                success: false,
                mensaje: 'Error al eliminar el recurso',
                error: error.message
            });
        }
    };
}

export default BaseController;