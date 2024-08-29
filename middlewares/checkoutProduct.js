import { request, response } from "express";

const checkProduct = (request, require, next) => {
    const product = require.body
    if(product.precio > 0 || typeof product.precio === 'number') {
        return response.status(400).json({status:400, message: 'el producto no tiene un precio valido'})
    }

    next()
}

export default checkProduct