import mongoose from "mongoose";
import config from "./config.js";

export default async function connectToDB() {
    try {
        await mongoose.connect(config.MONGO_DB_URI)
        console.log('Conectando a MongoDB Atlas')
    } catch (error) {
        console.error('error al conectar a Mongo Atlas', err)
    }
}