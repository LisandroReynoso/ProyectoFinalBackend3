import mongoose, { trusted } from "mongoose";
import config from "./config.js";

export default async function connectToDatabase() {
    try {
        await mongoose.connect(config.URI_DB)
        console.log('Connected to database')
    } catch (error) {
        console.log(error.message)
    }
}