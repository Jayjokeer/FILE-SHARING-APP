require('dotenv').config()
const express = require('express')
const port = process.env.PORT || 5000
const morgan = require('morgan')
const app = express()



//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
require('./db')

//view engine
app.set('view engine', 'ejs')

//routing 
app.use('/',require('./router/router'))

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})