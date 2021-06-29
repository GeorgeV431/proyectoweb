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
server.set('config',cont.config);
server.listen(port,()=>{
    console.log("Server listening on: http://localhost:" + port);
});

//          CONEXION A LA BASE DE DATOS
let connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    port    : 3306,
    password: '',
    database: 'boutique'
});

connection.connect((error:any)=>{
    if(error){
        console.log("error");
    }else{
        console.log('conectado a DB');
    }
});

//          ACCESS CONTROL Y SECUREACCESS SCOPIADO DE POR AHI
server.use(function(req:any, res:any, next:any) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    return next();
});

 //     GET, POST Y DELETE DE Usuarios
server.get('/getUsuarios',(req:any,res:any)=>{
    connection.query("SELECT * FROM usuario",(req1:any,resultados:any)=>{
        console.log(resultados);
        res.send(resultados);
    });
});

server.get('/getUsuario/:correo',(req:any,res:any)=>{
    let correo = req.params.correo;
    connection.query("SELECT * FROM usuario WHERE correo=?",correo,(req1:any,resultados:any)=>{
        res.send(resultados);
    });
});

server.post('/createUsuario',(req:any,res:any)=>{
    let nombres = req.body.nombres;
    let apellidos = req.body.apellidos;
    let rut = req.body.rut;
    let direccion = req.body.direccion;
    let comuna = req.body.comuna;
    let region = req.body.region;
    let correo = req.body.correo;
    let password=req.body.password;
    let tipo = req.body.tipo;
    
    connection.query("INSERT INTO usuario(nombres,apellidos,rut,direccion,comuna,region,correo,password)VALUES('"+nombres+"','"+apellidos+"','"+rut+"','"+direccion+"','"+comuna+"','"+region+"','"+correo+"',MD5('"+password+"'),'"+tipo+"')",(req1:any,resultados:any)=>{
        if(resultados == undefined){
            res.status(401).send({"message":"Datos duplicados"});
        }else{
            res.status(201).send({"message":"Exito creando"});
        }
    });
});


server.get('/login/:correo?:password', (req:any,res:any)=>{
    let key = req.body.key;
    
    connection.query("SELECT * FROM usuario WHERE correo=? AND password=md5(?)",key,(error:any,resultados:any,fields:any)=>{
        res.send(resultados);
    });

});

//     GET, POST Y DELETE DE Usuarios


//     GET, POST Y DELETE DE Productos
server.get('/getProductos',(req:any,res:any)=>{
    connection.query("SELECT * FROM producto",(req1:any,resultados:any)=>{
        res.send(resultados);
    });
});

server.get('/getProductosCat/:categoria',(req:any,res:any)=>{
    let categoria = req.params.categoria;
    connection.query("SELECT * FROM producto WHERE categoria=?",categoria,(req1:any,resultados:any)=>{
        res.send(resultados);
    });
});

server.get('/getProductosId/:id',(req:any,res:any)=>{
    let id = req.params.id;
    connection.query("SELECT * FROM producto WHERE id=?",id,(req1:any,resultados:any)=>{
        res.send(resultados);
    });
});

server.get('/getProductosNombre/:nombre',(req:any,res:any)=>{
    let nombre="%"+req.params.nombre+"%";
    connection.query("SELECT * FROM producto WHERE nombre LIKE ?",nombre,(req1:any,resultados:any)=>{
        res.send(resultados);
    });
});
//     GET, POST Y DELETE DE Productos



//     GET, POST Y DELETE DE Comentarios
server.get('/getComentarios',(req:any,res:any)=>{
    connection.query("SELECT * FROM comentarios",(req1:any,resultados:any)=>{
        res.send(resultados);
    });
});

server.get('/getComentariosProduct',(req:any,res:any)=>{
    let id_producto = req.body.id_producto;
    connection.query("SELECT texto,id_usuario FROM comentarios WHERE id_producto=?",id_producto,(req1:any,resultado:any)=>{
        res.send(resultado);
    });
});

server.post('/createComentario',(req:any,res:any)=>{
    let id_producto = req.body.id_producto;
    let id_usuario = req.body.id_usuario;
    let texto = req.body.texto;
    let calificacion = req.body.calificacion;

    connection.query("INSERT INTO comentarios(id_producto,id_usuario,texto,calificacion)VALUES('"+id_producto+"','"+id_usuario+"','"+texto+"','"+calificacion+"')",(req1:any,resultados:any)=>{
        res.send(resultados); 
    });
});
//     GET, POST Y DELETE DE Comentarios

//     GET, POST Y DELETE DE Boleta y Detalle
server.get('/getBoleta',(req:any,res:any)=>{
    connection.query("SELECT * FROM boleta",(req1:any,resultados:any)=>{
        res.send(resultados);
    });
});

server.post('/generarBoleta',(req:any,res:any)=>{
    let id_Usuario = req.body.usuario;
    let total = req.body.total;
    
    connection.query("INSERT INTO boleta(id_usuario,total)VALUES('"+id_Usuario+"','"+total+"')",(req:any,resultados:any)=>{
        res.status(201).send(resultados);
    });
});

server.get('/getDetalle',(req:any,res:any)=>{
    let id_boleta = req.body.boleta;
    connection.query("SELECT * FROM detalle",id_boleta,(req1:any,resultados:any)=>{
        res.send(resultados);
    });
});

server.post('/generarDetalle',(req:any,res:any)=>{
    let id_boleta = req.body.id_boleta;
    let id_producto = req.body.id_produto;
    let cantidad = req.body.cantidad;
    let subtotal = req.body.subtotal;
    connection.query("INSERT INTO detalle(id_boleta,id_producto,cantidad,subtotal)VALUES('"+id_boleta+"','"+id_producto+"','"+cantidad+"','"+subtotal+"')",(req:any,resultados:any)=>{
        res.status(201).send(resultados);
    });
});

