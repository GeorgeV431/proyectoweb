-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-06-2021 a las 05:52:54
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
  `id_usuario` varchar(100) NOT NULL,
  `fecha` date NOT NULL DEFAULT current_timestamp(),
  `total` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `boleta`
--

INSERT INTO `boleta` (`id`, `id_usuario`, `fecha`, `total`) VALUES
(1, 'usert@test.cl', '2021-06-01', 19200);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(10) NOT NULL,
  `id_producto` int(10) NOT NULL,
  `id_usuario` varchar(100) NOT NULL,
  `texto` text NOT NULL,
  `calificacion` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `id_producto`, `id_usuario`, `texto`, `calificacion`) VALUES
(1, 16, 'user@test.cl', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 5),
(2, 12, 'user@test.cl', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 5);

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
  `categoria` varchar(50) NOT NULL,
  `imagenes` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `nombre`, `stock`, `valor`, `categoria`, `imagenes`) VALUES
(1, 'Collar c/ flores', 50, 2000, 'Accesorios', 'https://i.imgur.com/tNzg5Qo.jpg'),
(2, 'Arnes', 50, 3980, 'Accesorios', 'https://i.imgur.com/qqDO9JV.jpg'),
(3, 'Juguetes ', 0, 1000, 'Accesorios', 'https://i.imgur.com/F13droe.jpg'),
(4, 'Poleron Minie Mouse', 10, 6500, 'Ropa', 'https://i.imgur.com/oUHqJhA.jpg'),
(5, 'Vestido Rosado', 10, 4890, 'Ropa', 'https://i.imgur.com/mxqJtzy.jpg'),
(6, 'Vestido Azul', 10, 4890, 'Ropa', 'https://i.imgur.com/PBZ5TvQ.jpg'),
(7, 'Enterito rosado/azul', 20, 8000, 'Ropa', 'https://i.imgur.com/IddJndK.jpg'),
(8, 'Poleron de polar', 10, 3500, 'Ropa', 'https://i.imgur.com/HVvXzyr.jpg'),
(9, 'Plato doble', 30, 2500, 'Platos', 'https://i.imgur.com/Q8NeZ46.png'),
(10, 'Plato redondo', 30, 1250, 'Platos', 'https://i.imgur.com/pjKnWPi.jpg'),
(11, 'Plato Cuadrado', 20, 1300, 'Platos', 'https://i.imgur.com/HtxKt4G.jpg'),
(12, 'Plato pequeño', 20, 2200, 'Platos', 'https://i.imgur.com/09G4ovd.jpg'),
(13, 'Cojin cuadrado', 10, 6000, 'Camas', 'https://i.imgur.com/4CjraIb.png'),
(14, 'Cama ovalada', 20, 5000, 'Camas', 'https://i.imgur.com/R2KO4i1.jpg'),
(15, 'Cama c/ liston', 10, 7990, 'Camas', 'https://i.imgur.com/7gcL3L0.jpg'),
(16, 'Cama reversible', 20, 17000, 'Camas', 'https://i.imgur.com/KwmB5rF.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `Nombres` varchar(100) NOT NULL,
  `Apellidos` varchar(100) NOT NULL,
  `rut` int(10) NOT NULL,
  `Direccion` varchar(100) NOT NULL,
  `Comuna` varchar(50) NOT NULL,
  `Region` varchar(50) NOT NULL,
  `Correo` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `Tipo` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`Nombres`, `Apellidos`, `rut`, `Direccion`, `Comuna`, `Region`, `Correo`, `Password`, `Tipo`) VALUES
('Aaron', 'Frenkel', 112223334, 'someplace', 'Rancagua', 'O\'Higgins', 'aaron@algo.cl', '7aa3262b9526ff30025c2f389263399e', 1),
('Jorge', 'Verschae', 223334445, 'somewhere', 'Rancagua', 'O\'Higgins', 'jorge@algo.cl', 'b26986ceee60f744534aaab928cc12df', 1),
('Roberto', 'Concha Vergara', 199037323, 'Portillo', 'Los Andes', 'Valparaiso', 'roberto@algo.cl', 'a3dcb4d229de6fde0db5686dee47145d', 1),
('User', 'Test', 123456789, 'boutique', 'Valparaiso', 'Valparaiso', 'usuario@boutique.cl', '81dc9bdb52d04dc20036dbd8313ed055', 0);

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
  ADD PRIMARY KEY (`Correo`);

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
