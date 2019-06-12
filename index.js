// Importar librerias necesarias
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Configuración del servidor que siempre va
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); 

// Rutas del servidor
app.get('/hola', (req, res)=>{
    res.json({
        ok: true,
        mensaje: 'Hola desde el servidor!!!!'
    })
})

// Configurar el puerto del servidor
app.listen(3000,()=>{
    console.log('Hola desde el puerto 3000');
})