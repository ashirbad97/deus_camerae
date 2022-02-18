const express = require('express')
const path = require('path')
const hbs = require('hbs')
const bodyParser = require('body-parser')
const viewsRouter = require('./routers/views')
const fs = require('fs')
require('./db/mongoose')

// Defining Paths and Directories
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

const app = express()
const port = 3000

// Configuring Express
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(publicDirectoryPath))
// Assigning the 'Views' Router
app.use(viewsRouter)
// For any of the un-handled routes
app.get('*', (req, res) => {
    res.render('error')
    // console.log("Error", req)
})
// Setting of templates directory
app.set('views', viewsPath)
// Assigning hbs configurations
app.set('view engine', 'hbs')

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})