require('dotenv').config()
const express = require('express')
const port = process.env.PORT || 5000
const morgan = require('morgan')
const app = express()
const path = require('path')
const session = require('express-session')


//middlewares
app.use(express.static(path.join(__dirname,'public')))
app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
require('./db')
app.use(session({
 resave:false,   
 secret:process.env.SESSION_KEY,
 saveUninitialized:false
}))


//view engine
app.set('view engine', 'ejs')


//routing 
app.use('/',require('./router/router'))

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})