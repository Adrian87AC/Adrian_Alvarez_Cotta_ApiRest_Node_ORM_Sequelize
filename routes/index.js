// routes/index.js
import express from "express";
import adrian20Routes from "./adrian20Routes.js";
import categoriasRoutes from "./categoriasRoutes.js";
import clientesRoutes from "./clientesRoutes.js";
import DetallesPedidoRoutes from "./DetallesPedidoRoutes.js";
import detalles_pedidoRoutes from "./detalles_pedidoRoutes.js";
import LogRoutes from "./LogRoutes.js";
import pedidosRoutes from "./pedidosRoutes.js";
import productosRoutes from "./productosRoutes.js";
import rockyRoutes from "./rockyRoutes.js";
import Willman56Routes from "./Willman56Routes.js";

const router = express.Router();

router.use("/adrian20", adrian20Routes);
router.use("/categorias", categoriasRoutes);
router.use("/clientes", clientesRoutes);
router.use("/DetallesPedido", DetallesPedidoRoutes);
router.use("/detalles_pedido", detalles_pedidoRoutes);
router.use("/Log", LogRoutes);
router.use("/pedidos", pedidosRoutes);
router.use("/productos", productosRoutes);
router.use("/rocky", rockyRoutes);
router.use("/Willman56", Willman56Routes);

export default router;
