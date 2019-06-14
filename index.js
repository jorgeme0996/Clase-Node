// Importar librerias necesarias
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Configuración del servidor que siempre va
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); 

// Rutas del servidor
app.get('/hola/:user', (req, res)=>{

    // Leer parametros por params
    const params = req.params

    const user = params.user

    res.json({
        ok: true,
        mensaje: `Hola ${user}`
    })
});

app.post('/hola/post/:user', (req, res) => {

    // Leer parametros por body
    const body = req.body
    // Leer parametros por params
    const params = req.params

    const user = params.user
    const password = body.password

    console.log(`Este es el usuario que pasaron al servidor: ${user}`);
    console.log(`Esta es la contraseña que pasaron al servidor: ${password}`);

    res.json({
        ok: true,
        user,
        password
    })
})

// Configurar el puerto del servidor
app.listen(3000,()=>{
    console.log('Hola desde el puerto 3000');
})