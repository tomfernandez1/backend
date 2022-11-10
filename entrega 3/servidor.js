const express = require('express')

const app = express()

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))

const products = new Contenedor ('productos.txt');

app.get('/productos', async (req, res) => {
    const productos = await products.getAll();
    res.send(productos)
})

app.get('/productoRandom', async (req, res) => {
    const productos = await products.getAll();
    let numRandom = Math.floor(Math.random()*productos.length);
    res.send(productos[numRandom]);
})



