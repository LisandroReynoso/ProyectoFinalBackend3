import dotenv from 'dotenv'

dotenv.config()

export default {
    URI_DB: process.env.URI_DB,
    PORT: process.env.PORT,
    SESSION_SECRET: process.env.SESSION_SECRET,
    SECRET_KEY: process.env.SECRET_KEY,
}