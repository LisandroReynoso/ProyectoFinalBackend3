import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    stock: {
        type: Number,
        min: 0
    },
    lote: {
        type: String,
        default: '1000'
    },
    caducidad: {
        type: Date,
        default: Date.now
    },
    descripcion: String,
    category: {
        type: String,
        require: true,
        default: null
    },
    precio: {
        type: Number,
        min: 1,
        require: true
    }

})

//Creando modelo

const Product = mongoose.model('Products', productSchema)

export default Product