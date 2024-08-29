import dotenv from 'dotenv'

dotenv.config()

const config = {
    port: process.env.PORT
}   



export default {
    PORT: process.env.PORT || 3000,
    SESSION_SECRET: process.env.SESSION_SECRET || 'default_secret'
};