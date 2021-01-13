const express = require('express')
const path = require('path')



// connecting to DB
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/TransData' , { useNewUrlParser: true })

// html connect
const app = express() 
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})


/// for the post use ($.post)
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



// for cnection to the react (in devloping mood)



const api = require('./server/routes/api')
app.use('/', api)


// port init
const port = 2011 
app.listen(port , function(){
    console.log(`Server running on ${port}`)
})