const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require('path')


const app = express()

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080

//log request
app.use(morgan('dev'));

// parse request to body parser
app.use(bodyparser.urlencoded({ extended : true }))

// set view engine
app.set('view engine', 'ejs')

// loading assets
app.use('/css',express.static(path.resolve(__dirname, 'assets/css')))
app.use('/img',express.static(path.resolve(__dirname, 'assets/img')))
app.use('/js',express.static(path.resolve(__dirname, 'assets/js')))

app.get('/',(request, response) => {
    response.send('CRUD application')
})

app.listen(PORT, ()=> { console.log(`listening at http://localhost:${PORT}`) })