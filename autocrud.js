// autocrud.js
import fs from "fs";
import path from "path";

const modelsPath = "./models";
const controllersPath = "./controllers";
const servicesPath = "./services";
const routesPath = "./routes";
const baseControllersPath = "./controllers/base";

// Crear directorios necesarios
fs.mkdirSync(controllersPath, { recursive: true });
fs.mkdirSync(servicesPath, { recursive: true });
fs.mkdirSync(routesPath, { recursive: true });
fs.mkdirSync(baseControllersPath, { recursive: true });

console.log("Iniciando generación AutoCRUD con arquitectura MVC...\n");

// ========== BASE SERVICE ==========
const baseServiceContent = `// services/BaseService.js
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
`;
fs.writeFileSync(`${servicesPath}/BaseService.js`, baseServiceContent);
console.log("BaseService: services/BaseService.js");

// ========== BASE CONTROLLER ==========
const baseControllerContent = `// controllers/base/BaseController.js
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
`;
fs.writeFileSync(`${baseControllersPath}/BaseController.js`, baseControllerContent);
console.log("BaseController: controllers/base/BaseController.js");

// Filtramos solo los modelos (sin incluir init-models.js)
const models = fs.readdirSync(modelsPath)
  .filter(f => f.endsWith(".js") && f !== "init-models.js");

if (models.length === 0) {
  console.log("No se encontraron modelos para procesar");
  process.exit(0);
}

for (const modelFile of models) {
  const modelName = path.basename(modelFile, ".js"); // ejemplo: productos
  const modelClass = modelName.charAt(0).toUpperCase() + modelName.slice(1); // Productos

  console.log(`📦 Generando CRUD para: ${modelName}`);

  // ========== SERVICIO ==========
  const serviceContent = `// services/${modelName}Service.js
import BaseService from "./BaseService.js";
import { sequelize } from "../config/db.js";
import ${modelName}Model from "../models/${modelFile}";
import { DataTypes } from "sequelize";

// Inicializar el modelo
const ${modelClass} = ${modelName}Model.init ? 
  ${modelName}Model.init(sequelize, DataTypes) : 
  ${modelName}Model(sequelize, DataTypes);

class ${modelClass}Service extends BaseService {
  constructor() {
    super(${modelClass});
  }

  // Aquí puedes añadir métodos personalizados para ${modelName}
  // Ejemplo:
  // async findByNombre(nombre) {
  //   return await this.model.findAll({ where: { nombre } });
  // }
}

export default new ${modelClass}Service();
`;

  fs.writeFileSync(`${servicesPath}/${modelName}Service.js`, serviceContent);
  console.log(`Servicio: ${modelName}Service.js`);

  // ========== CONTROLADOR ==========
  const controllerContent = `// controllers/${modelName}Controller.js
import BaseController from "./base/BaseController.js";
import ${modelName}Service from "../services/${modelName}Service.js";

class ${modelClass}Controller extends BaseController {
  constructor() {
    super(${modelName}Service);
  }

  // Aquí puedes sobrescribir o añadir métodos personalizados
  // Ejemplo:
  // getAll = async (req, res) => {
  //   console.log("🔍 Obteniendo ${modelName} con lógica personalizada");
  //   await super.getAll(req, res);
  // }
}

export default new ${modelClass}Controller();
`;

  fs.writeFileSync(`${controllersPath}/${modelName}Controller.js`, controllerContent);
  console.log(`Controlador: ${modelName}Controller.js`);

  // ========== RUTAS ==========
  const routeContent = `// routes/${modelName}Routes.js
import express from "express";
import ${modelName}Controller from "../controllers/${modelName}Controller.js";

const router = express.Router();

// GET /api/${modelName} - Obtener todos
router.get("/", ${modelName}Controller.getAll);

// GET /api/${modelName}/:id - Obtener uno por ID
router.get("/:id", ${modelName}Controller.getById);

// POST /api/${modelName} - Crear nuevo
router.post("/", ${modelName}Controller.create);

// PUT /api/${modelName}/:id - Actualizar
router.put("/:id", ${modelName}Controller.update);

// DELETE /api/${modelName}/:id - Eliminar
router.delete("/:id", ${modelName}Controller.delete);

export default router;
`;

  fs.writeFileSync(`${routesPath}/${modelName}Routes.js`, routeContent);
  console.log(`  ✅ Rutas: ${modelName}Routes.js`);

  console.log(`✨ CRUD completo generado para: ${modelName}\n`);
}

// ========== GENERAR INDEX DE RUTAS ==========
console.log("📝 Generando index de rutas...");

const routeIndexContent = `// routes/index.js
import express from "express";
${models.map(modelFile => {
  const modelName = path.basename(modelFile, ".js");
  return `import ${modelName}Routes from "./${modelName}Routes.js";`;
}).join('\n')}

const router = express.Router();

${models.map(modelFile => {
  const modelName = path.basename(modelFile, ".js");
  return `router.use("/${modelName}", ${modelName}Routes);`;
}).join('\n')}

export default router;
`;

fs.writeFileSync(`${routesPath}/index.js`, routeIndexContent);
console.log("Index de rutas: routes/index.js\n");

console.log("¡AutoCRUD generado exitosamente!");
console.log(`Recursos generados: ${models.length}`);
console.log("Arquitectura: MVC reducida (Rutas → Controladores → Servicios)\n");
console.log("Para iniciar el servidor ejecuta: npm start");