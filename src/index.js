import express from 'express'
import config from './config.js'
import connectToDB from './connect.js'
import productRoutes from "./routes/products.routes.js"
import viewRoutes from "./routes/views.route.js"
import { engine } from 'express-handlebars'
import userRoute from './routes/users.route.js'
import homeRoute from './routes/main.routes.js'
import cors from 'cors'
import logRoute from '../middlewares/logRoute.js'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import authRoute from './routes/auth.route.js'
import connectToDatabase from '../config/connectToDb.js'
import dotenv from 'dotenv'
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
connectToDatabase()

app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/', viewRoutes)

app.listen(config.PORT, ()=> console.log('Listen to port '+ config.PORT))







app.use(cors())
app.use(express.json())

app.use('/api/users', userRoute)
app.use('/', homeRoute)

app.listen(config.port, ()=> console.log(`Listen to port ${config.port}`))





//middlewares
app.use(express.json())
app.use(logRoute)
app.use(cookieParser())
app.use(session({
    secret: process.env.SESSION_SECRET || 'default_secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24
    }
}))
dotenv.config()

app.use('/api/user', userRoute)
app.use('/auth', authRoute)






