"use strict";
//          CONST VARIOS
const express = require("express");
const jwt = require("jsonwebtoken");
const mysql = require('mysql');
const bodyParser = require('body-parser');
const server = express();
const cont = require("./controllers/controllers");
const port = 3000;
const secureAccess = express.Router();
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
    res.header("Access-Control-Allow-Headers", "*");
    next();
});
secureAccess.use((req, res, next) => {
    const config = req.headers['access-token'];
    if (config) {
        jwt.verify(config, server.get('config'), (err, decoded) => {
            if (err) {
                return res.json({ mensaje: 'Invalid Access' });
            }
            else {
                req.decoded = decoded;
                req.authentificated = true;
                next();
            }
        });
    }
    else {
        res.send({
            mensaje: 'Failed Access'
        });
    }
});
//          ACCESS CONTROL Y SECUREACCESS SCOPIADO DE POR AHI
//     GET, POST Y DELETE DE Usuarios
server.get('/getUsuarios', secureAccess, (res) => {
    connection.query("SELECT * FROM usuario", (resultados) => {
        res.send(resultados);
    });
});
server.get('/getUsuario/:correo', (req, res) => {
    let correo = req.params.correo;
    connection.query("SELECT * FROM productos WHERE correo=?", correo, (req1, resultados) => {
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
    connection.query("INSERT INTO usuarios(nombres,apellidos,rut,direccion,comuna,region,correo,password)VALUES('" + nombres + "','" + apellidos + "','" + rut + "','" + comuna + "','" + region + "','" + correo + "',MD5('" + password + "'),'" + direccion + "')", (req1, resultados) => {
        if (resultados == undefined) {
            res.status(401).send({ "message": "ERROR, datos duplicados" });
        }
        else {
            res.status(201).send({ "message": "creado" });
        }
    });
});
server.post('/login', (req, res) => {
    let correo = req.body.correo;
    let password = req.body.password;
    connection.query("SELECT * FROM usuarios where correo=? and password=md5(?)", [correo, password], (error, resultados, fields) => {
        res.send(resultados);
    });
});
//     GET, POST Y DELETE DE Usuarios
//     GET, POST Y DELETE DE Productos
server.get('/getProductos', (req, res) => {
    connection.query("SELECT * FROM productos", (req1, resultados) => {
        res.send(resultados);
    });
});
server.get('/getProductosCat/:categoria', (req, res) => {
    let categoria = req.params.categoria;
    connection.query("SELECT * FROM productos where categoria=?", categoria, (req1, resultados) => {
        res.send(resultados);
    });
});
server.get('/getProductosId/:id', (req, res) => {
    let id = req.params.id;
    connection.query("SELECT * FROM productos where id=?", id, (req1, resultados) => {
        res.send(resultados);
    });
});
server.get('/getProductosNombre/:nombre', (req, res) => {
    let nombre = "%" + req.params.nombre + "%";
    connection.query("SELECT * FROM productos WHERE nombre LIKE ?", nombre, (req1, resultados) => {
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
    connection.query("SELECT texto,id_usuario FROM comentario WHERE id_producto=?", id_producto, (req1, resultado) => {
        res.send(resultado);
    });
});
server.post('/createComentario', (req, res) => {
    let id_producto = req.body.id_producto;
    let id_usuario = req.body.id_usuario;
    let texto = req.body.texto;
    let calificacion = req.body.calificacion;
    console.log(req.body);
    connection.query("INSERT INTO comentario(id_producto,id_usuario,texto,calificacion)VALUES('" + id_producto + "','" + id_usuario + "','" + texto + "','" + calificacion + "')", (req1, resultados) => {
        res.status(201).send(resultados);
    });
});
//     GET, POST Y DELETE DE Comentarios
//     GET, POST Y DELETE DE Boleta y Detalle
server.get('/getBoleta', secureAccess, (req, res) => {
    connection.query("SELECT * FROM boleta", (req1, resultados) => {
        res.send(resultados);
    });
});
server.post('/generarBoleta', secureAccess, (req, res) => {
    let id_Usuario = req.body.usuario;
    let total = req.body.total;
    connection.query("INSERT INTO boleta(id_usuario,total)VALUES('" + id_Usuario + "','" + total + "')", (req, resultados) => {
        res.status(201).send(resultados);
    });
});
server.get('/getDetalle', secureAccess, (req, res) => {
    let id_boleta = req.body.boleta;
    connection.query("SELECT * FROM detalle WHERE id_boleta=?", id_boleta, (req1, resultados) => {
        res.send(resultados);
    });
});
server.post('/generarBoleta', secureAccess, (req, res) => {
    let id_boleta = req.body.id_boleta;
    let id_producto = req.body.id_produto;
    let cantidad = req.body.cantidad;
    let subtotal = req.body.subtotal;
    connection.query("INSERT INTO detalle(id_boleta,id_producto,cantidad,subtotal)VALUES('" + id_boleta + "','" + id_producto + "','" + cantidad + "','" + subtotal + "')", (req, resultados) => {
        res.status(201).send(resultados);
    });
});
