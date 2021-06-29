"use strict";
//          CONST VARIOS
const express = require("express");
const jwt = require("jsonwebtoken");
const mysql = require('mysql');
const bodyParser = require('body-parser');
const server = express();
const cont = require("./controllers/controllers");
const port = 3000;
//          CONST VARIOS
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.set('config', cont.config);
server.listen(port, () => {
    console.log("Server listening on: http://localhost:" + port);
});
//          CONEXION A LA BASE DE DATOS
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '',
    database: 'boutique'
});
connection.connect((error) => {
    if (error) {
        console.log("error");
    }
    else {
        console.log('conectado a DB');
    }
});
//          ACCESS CONTROL Y SECUREACCESS SCOPIADO DE POR AHI
server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    return next();
});
//     GET, POST Y DELETE DE Usuarios
server.get('/getUsuarios', (req, res) => {
    connection.query("SELECT * FROM usuario", (req1, resultados) => {
        console.log(resultados);
        res.send(resultados);
    });
});
server.get('/getUsuario/:correo', (req, res) => {
    let correo = req.params.correo;
    connection.query("SELECT * FROM usuario WHERE correo=?", correo, (req1, resultados) => {
        res.send(resultados);
    });
});
server.post('/createUsuario', (req, res) => {
    let nombres = req.body.nombres;
    let apellidos = req.body.apellidos;
    let rut = req.body.rut;
    let direccion = req.body.direccion;
    let comuna = req.body.comuna;
    let region = req.body.region;
    let correo = req.body.correo;
    let password = req.body.password;
    console.log(nombres + " " + apellidos);
    connection.query("INSERT INTO usuario(nombres,apellidos,rut,direccion,comuna,region,correo,password)VALUES('" + nombres + "','" + apellidos + "','" + rut + "','" + direccion + "','" + comuna + "','" + region + "','" + correo + "',MD5('" + password + "'))", (req1, resultados) => {
    });
});
server.get('/login/:correo', (req, res) => {
    let key = req.body.key;
    connection.query("SELECT * FROM usuario WHERE correo=? AND password=md5(?)", key, (error, resultados, fields) => {
        res.send(resultados);
    });
});
//     GET, POST Y DELETE DE Usuarios
//     GET, POST Y DELETE DE Productos
server.get('/getProductos', (req, res) => {
    connection.query("SELECT * FROM producto", (req1, resultados) => {
        res.send(resultados);
    });
});
server.get('/getProductosCat/:categoria', (req, res) => {
    let categoria = req.params.categoria;
    connection.query("SELECT * FROM producto WHERE categoria=?", categoria, (req1, resultados) => {
        res.send(resultados);
    });
});
server.get('/getProductosId/:id', (req, res) => {
    let id = req.params.id;
    connection.query("SELECT * FROM producto WHERE id=?", id, (req1, resultados) => {
        res.send(resultados);
    });
});
server.get('/getProductosNombre/:nombre', (req, res) => {
    let nombre = "%" + req.params.nombre + "%";
    connection.query("SELECT * FROM producto WHERE nombre LIKE ?", nombre, (req1, resultados) => {
        res.send(resultados);
    });
});
//     GET, POST Y DELETE DE Productos
//     GET, POST Y DELETE DE Comentarios
server.get('/getComentarios', (req, res) => {
    connection.query("SELECT * FROM comentarios", (req1, resultados) => {
        res.send(resultados);
    });
});
server.get('/getComentariosProduct', (req, res) => {
    let id_producto = req.body.id_producto;
    connection.query("SELECT texto,id_usuario FROM comentarios WHERE id_producto=?", id_producto, (req1, resultado) => {
        res.send(resultado);
    });
});
server.post('/createComentario', (req, res) => {
    let id_producto = req.body.id_producto;
    let id_usuario = req.body.id_usuario;
    let texto = req.body.texto;
    let calificacion = req.body.calificacion;
    connection.query("INSERT INTO comentarios(id_producto,id_usuario,texto,calificacion)VALUES('" + id_producto + "','" + id_usuario + "','" + texto + "','" + calificacion + "')", (req1, resultados) => {
        res.send(resultados);
    });
});
//     GET, POST Y DELETE DE Comentarios
//     GET, POST Y DELETE DE Boleta y Detalle
server.get('/getBoleta', (req, res) => {
    connection.query("SELECT * FROM boleta", (req1, resultados) => {
        res.send(resultados);
    });
});
server.post('/generarBoleta', (req, res) => {
    let id_usuario = req.body.id_usuario;
    let total = req.body.total;
    console.log(id_usuario + " " + total);
    connection.query("INSERT INTO boleta(id_usuario,total)VALUES('" + id_usuario + "','" + total + "')", (req, resultados) => {
        res.status(201).send(resultados);
    });
});
server.get('/maxId', (req, res) => {
    connection.query("SELECT MAX(id) AS id FROM boleta", (req1, resultados) => {
        res.send(resultados);
    });
});
server.get('/getDetalle', (req, res) => {
    let id_boleta = req.body.boleta;
    connection.query("SELECT * FROM detalle", (req1, resultados) => {
        res.send(resultados);
    });
});
server.post('/generarDetalle', (req, res) => {
    let id_boleta = req.body.id_boleta;
    let id_producto = req.body.id_producto;
    let cantidad = req.body.cantidad;
    let subtotal = req.body.subtotal;
    console.log(id_boleta + " " + id_producto + " " + cantidad + " " + subtotal);
    connection.query("INSERT INTO detalle(id_boleta,id_producto,cantidad,subtotal)VALUES('" + id_boleta + "','" + id_producto + "','" + cantidad + "','" + subtotal + "')", (req, resultados) => {
        res.status(201).send(resultados);
    });
});
