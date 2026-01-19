-- phpMyAdmin SQL Dump actualizado
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET NAMES utf8mb4 */;

CREATE DATABASE IF NOT EXISTS `api_rest_db`
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_general_ci;

USE `api_rest_db`;

-- Eliminar tablas si existen
DROP TABLE IF EXISTS `detalles_pedido`;
DROP TABLE IF EXISTS `pedidos`;
DROP TABLE IF EXISTS `productos`;
DROP TABLE IF EXISTS `clientes`;
DROP TABLE IF EXISTS `categorias`;
DROP TABLE IF EXISTS `log`;

-- Tabla categorias
CREATE TABLE `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

-- Tabla clientes
CREATE TABLE `clientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `email` varchar(150) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `direccion` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB;

-- Tabla productos
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `stock` int(11) DEFAULT 0,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

-- Tabla pedidos
CREATE TABLE `pedidos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cliente_id` int(11) NOT NULL,
  `fecha` datetime DEFAULT current_timestamp(),
  `total` decimal(10,2) DEFAULT 0.00,
  `estado` enum('pendiente','pagado','enviado','entregado','cancelado') DEFAULT 'pendiente',
  PRIMARY KEY (`id`),
  KEY `cliente_id` (`cliente_id`),
  CONSTRAINT `pedidos_ibfk_1`
    FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`)
) ENGINE=InnoDB;

-- Tabla detalles_pedido
CREATE TABLE `detalles_pedido` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pedido_id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL DEFAULT 1,
  `precio_unitario` decimal(10,2) NOT NULL,
  `subtotal` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pedido_id` (`pedido_id`),
  KEY `producto_id` (`producto_id`),
  CONSTRAINT `detalles_pedido_ibfk_1`
    FOREIGN KEY (`pedido_id`) REFERENCES `pedidos` (`id`),
  CONSTRAINT `detalles_pedido_ibfk_2`
    FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB;

-- Tabla log
CREATE TABLE `log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `log` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

COMMIT;

-- 1. Insertar Categorías
INSERT INTO `categorias` (`nombre`, `descripcion`) VALUES
('Electrónica', 'Gadgets, ordenadores y accesorios'),
('Ropa', 'Moda para hombre y mujer'),
('Hogar', 'Decoración y muebles');

-- 2. Insertar Clientes
INSERT INTO `clientes` (`nombre`, `email`, `telefono`, `direccion`) VALUES
('Juan Pérez', 'juan.perez@email.com', '555-0101', 'Calle Falsa 123, Madrid'),
('Maria Lopez', 'maria.lopez@email.com', '555-0202', 'Av. Siempre Viva 742, Barcelona'),
('Carlos Ruiz', 'carlos.ruiz@email.com', '555-0303', 'Plaza Mayor 1, Sevilla');

-- 3. Insertar Productos
-- Nota: createdAt y updatedAt se llenan solos por defecto
INSERT INTO `productos` (`nombre`, `precio`, `stock`) VALUES
('Smartphone Galaxy', 800.00, 50),
('Laptop Pro', 1200.50, 20),
('Auriculares Bluetooth', 45.00, 100),
('Camiseta Básica', 15.00, 200),
('Cafetera Automática', 90.00, 15);

-- 4. Crear un Pedido (Header)
-- Supongamos que Juan Pérez (id 1) compra una Laptop y 2 Auriculares.
-- Total calculado: 1200.50 + (45.00 * 2) = 1290.50
INSERT INTO `pedidos` (`cliente_id`, `total`, `estado`) VALUES
(1, 1290.50, 'pendiente');

-- 5. Crear los Detalles del Pedido (Items)
-- Asumiendo que el pedido anterior tiene ID 1 (porque es el primero)
-- Producto ID 2 (Laptop) y Producto ID 3 (Auriculares)
INSERT INTO `detalles_pedido` (`pedido_id`, `producto_id`, `cantidad`, `precio_unitario`, `subtotal`) VALUES
(1, 2, 1, 1200.50, 1200.50),  -- 1 Laptop
(1, 3, 2, 45.00, 90.00);      -- 2 Auriculares

-- Restar 2 unidades al stock de Auriculares (id 3)
UPDATE `productos`
SET `stock` = `stock` - 2
WHERE `id` = 3;

-- Cambiar el pedido #1 a 'pagado'
UPDATE `pedidos`
SET `estado` = 'pagado'
WHERE `id` = 1;

-- Aumentar el precio de la Laptop (id 2) un 10%
UPDATE `productos`
SET `precio` = `precio` * 1.10
WHERE `id` = 2;

UPDATE `clientes`
SET `direccion` = 'Nueva Dirección 456, Valencia',
    `telefono` = '555-9999'
WHERE `id` = 1;

START TRANSACTION;

-- 1. Insertar Cabecera
INSERT INTO `pedidos` (`cliente_id`, `total`, `estado`) VALUES (2, 90.00, 'pagado');

-- 2. Obtener el ID generado (útil en scripts de programación, aquí lo simulamos asumiendo que es el ID 2)
-- En PHP/Node usarías: last_insert_id()

-- 3. Insertar Detalle (Maria compró una cafetera)
INSERT INTO `detalles_pedido` (`pedido_id`, `producto_id`, `cantidad`, `precio_unitario`, `subtotal`)
VALUES (2, 5, 1, 90.00, 90.00);

-- 4. Descontar Stock inmediatamente
UPDATE `productos` SET `stock` = `stock` - 1 WHERE `id` = 5;

COMMIT;