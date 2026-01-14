// server.js
import express from 'express';
import dotenv from 'dotenv';
import { connectDB, disconnectDB } from './config/db.js';
import routes from './routes/index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// ========== MIDDLEWARES ==========
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS (opcional - permite peticiones desde cualquier origen)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Log de peticiones en desarrollo
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
  });
}

// ========== RUTAS ==========

// Ruta de health check
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'API REST con Node.js, Express y Sequelize',
    version: '1.0.0',
    endpoints: {
      api: '/api',
      health: '/health'
    },
    documentation: 'Ver README.md para más información'
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    success: true,
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

// Rutas de la API
app.use('/api', routes);

// ========== MANEJO DE ERRORES ==========

// Ruta no encontrada (404)
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Ruta no encontrada',
    path: req.originalUrl
  });
});

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error('❌ Error:', err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Error interno del servidor',
    error: process.env.NODE_ENV === 'development' ? err.stack : {}
  });
});

// ========== INICIAR SERVIDOR ==========
const startServer = async () => {
  try {
    // Conectar a la base de datos
    await connectDB();

    // Iniciar el servidor
    app.listen(PORT, () => {
      console.log('\n' + '='.repeat(50));
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
      console.log(`📚 API REST disponible en http://localhost:${PORT}/api`);
      console.log(`💚 Health check: http://localhost:${PORT}/health`);
      console.log(`🌍 Entorno: ${process.env.NODE_ENV || 'development'}`);
      console.log('='.repeat(50));
      console.log('\n💡 Presiona CTRL+C para detener el servidor\n');
    });
  } catch (error) {
    console.error('❌ Error al iniciar el servidor:', error);
    process.exit(1);
  }
};

// ========== MANEJO DE CIERRE GRACEFUL ==========
const gracefulShutdown = async (signal) => {
  console.log(`\n\n⚠️  Señal ${signal} recibida. Cerrando servidor...`);

  try {
    await disconnectDB();
    console.log('✅ Servidor cerrado correctamente');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error al cerrar el servidor:', error);
    process.exit(1);
  }
};

// Capturar señales de cierre
process.on('SIGINT', () => gracefulShutdown('SIGINT'));
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));

// Capturar errores no manejados
process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (error) => {
  console.error('❌ Uncaught Exception:', error);
  gracefulShutdown('UNCAUGHT_EXCEPTION');
});

// Iniciar la aplicación
startServer();