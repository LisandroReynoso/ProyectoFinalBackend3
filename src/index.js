import express from 'express'
import config from './config.js'
import connectToDB from './connect.js'
import productRoutes from "./routes/products.routes.js"
import viewRoutes from "./routes/views.route.js"
import { engine } from 'express-handlebars'
import userRoute from './routes/users.route.js'
import homeRoute from './routes/main.routes.js'
import cors from 'cors'

const app = express()

app.use(express.static('public'))

app.engine('handlebars', engine({
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowedProtoMethods: true
    }
}))
app.set('view engine', 'handlebars')
app.set('views', './src/views')

connectToDB() 

app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/', viewRoutes)

app.listen(config.PORT, ()=> console.log('Listen to port '+ config.PORT))







app.use(cors())
app.use(express.json())

app.use('/api/users', userRoute)
app.use('/', homeRoute)

app.listen(config.port, ()=> console.log(`Listen to port ${config.port}`))