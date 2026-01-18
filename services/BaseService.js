// services/BaseService.js
class BaseService {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    return await this.model.findAll();
  }

  async getById(id) {
    return await this.model.findByPk(id);
  }

  async create(data) {
    return await this.model.create(data);
  }

  async update(id, data) {
    const item = await this.model.findByPk(id);
    if (!item) return null;
    return await item.update(data);
  }

  async delete(id) {
    const item = await this.model.findByPk(id);
    if (!item) return null;
    return await item.destroy();
  }
}

export default BaseService;
