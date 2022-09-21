const express = require('express')
const { PORT } = require('../config.env')
const { db } = require('./utils/database')


const app = express()
//Get de comprobación de servidor corriendo en la ruta raiz   
app.get('/', (req, res) => {
    res.status(200).json({message: 'Server started susccesfully'})
})

//Sincronizamos con la base de datos y verificamos su conexión
db.authenticate()
    .then(() => console.log('Data base autenticated'))
    .catch(err => console.log(err))



app.listen(PORT, () => {
    console.log(`Server started at port 8000`)
})

module.exports = app