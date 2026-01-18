// controllers/base/BaseController.js
class BaseController {
  constructor(service) {
    this.service = service;
  }

  getAll = async (req, res) => {
    try {
      const items = await this.service.getAll();
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  getById = async (req, res) => {
    try {
      const { id } = req.params;
      const item = await this.service.getById(id);
      if (!item) return res.status(404).json({ message: "Elemento no encontrado" });
      res.json(item);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  create = async (req, res) => {
    try {
      const item = await this.service.create(req.body);
      res.status(201).json(item);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  update = async (req, res) => {
    try {
      const { id } = req.params;
      const item = await this.service.update(id, req.body);
      if (!item) return res.status(404).json({ message: "Elemento no encontrado" });
      res.json(item);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  delete = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await this.service.delete(id);
      if (!result) return res.status(404).json({ message: "Elemento no encontrado" });
      res.json({ message: "Elemento eliminado correctamente" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default BaseController;
