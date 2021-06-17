-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-06-2021 a las 19:20:50
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `boutique`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `boleta`
--

CREATE TABLE `boleta` (
  `id` int(10) NOT NULL,
  `id_usuario` int(10) NOT NULL,
  `fecha` date NOT NULL,
  `total` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `boleta`
--

INSERT INTO `boleta` (`id`, `id_usuario`, `fecha`, `total`) VALUES
(1, 194445556, '2021-06-01', 19200);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(10) NOT NULL,
  `id_producto` int(10) NOT NULL,
  `id_usuario` int(10) NOT NULL,
  `texto` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `id_producto`, `id_usuario`, `texto`) VALUES
(1, 16, 123456789, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'),
(2, 12, 123456789, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle`
--

CREATE TABLE `detalle` (
  `id` int(10) NOT NULL,
  `id_boleta` int(10) NOT NULL,
  `id_producto` int(10) NOT NULL,
  `cantidad` int(3) NOT NULL,
  `subtotal` int(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `detalle`
--

INSERT INTO `detalle` (`id`, `id_boleta`, `id_producto`, `cantidad`, `subtotal`) VALUES
(1, 1, 16, 1, 17000),
(2, 1, 12, 1, 2200);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id` int(10) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `stock` int(3) NOT NULL,
  `valor` int(6) NOT NULL,
  `categoria` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `nombre`, `stock`, `valor`, `categoria`) VALUES
(1, 'Collar c/ flores', 50, 2000, 'Accesorios'),
(2, 'Arnes', 50, 3980, 'Accesorios'),
(3, 'Juguetes ', 100, 1000, 'Accesorios'),
(4, 'Poleron Minie Mouse', 10, 6500, 'Ropa'),
(5, 'Vestido Rosado', 10, 4890, 'Ropa'),
(6, 'Vestido Azul', 10, 4890, 'Ropa'),
(7, 'Enterito rosado/azul', 20, 8000, 'Ropa'),
(8, 'Poleron de polar', 10, 3500, 'Ropa'),
(9, 'Plato doble', 30, 2500, 'Platos'),
(10, 'Plato redondo', 30, 1250, 'Platos'),
(11, 'Plato Cuadrado', 20, 1300, 'Platos'),
(12, 'Plato pequeño', 20, 2200, 'Platos'),
(13, 'Cojin cuadrado', 10, 6000, 'Camas'),
(14, 'Cama ovalada', 20, 5000, 'Camas'),
(15, 'Cama c/ liston', 10, 7990, 'Camas'),
(16, 'Cama reversible', 20, 17000, 'Camas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `Nombres` varchar(100) NOT NULL,
  `Apellidos` varchar(100) NOT NULL,
  `Rut` int(10) NOT NULL,
  `Direccion` varchar(100) NOT NULL,
  `Comuna` varchar(50) NOT NULL,
  `Region` varchar(50) NOT NULL,
  `Correo` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `Tipo` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`Nombres`, `Apellidos`, `Rut`, `Direccion`, `Comuna`, `Region`, `Correo`, `Password`, `Tipo`) VALUES
('Usuario', 'Test', 123456789, 'boutique', 'Valparaiso', 'Valparaiso', 'usuario@boutique.cl', '1234', 1),
('Jorge', 'Verschae', 191112223, 'somewhere', 'Rancagua', 'O\'Higgins', 'jorge@algo.cl', 'qweqweqwe', 0),
('Aaron', 'Frenkel', 194445556, 'someplace', 'Rancagua', 'O\'Higgins', 'aaron@algo.cl', 'zxczxczxc', 0),
('Roberto', 'Concha Vergara', 199037323, 'Portillo', 'Los Andes', 'Valparaiso', 'roberto@algo.cl', 'asdasdasd', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `boleta`
--
ALTER TABLE `boleta`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `detalle`
--
ALTER TABLE `detalle`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD UNIQUE KEY `Rut` (`Rut`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `boleta`
--
ALTER TABLE `boleta`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `detalle`
--
ALTER TABLE `detalle`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;