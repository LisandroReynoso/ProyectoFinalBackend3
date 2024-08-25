import { response } from "express";
import productsService from "../services/products.service.js";

export const createProductController = async (require, response) => {
    try {
        const newProduct = await productsService.createProduct(require.body)

        

        return response.status(201).json({
            status: 201, 
            message: 'Producto creado', 
            payload: newProduct
        })
    } catch (error) {
        return response.status(500).json({
            status: 500,
            message: error.message
        })
    }
}

export const getProductController = async (require, response) => {
    try {
        const products = await productsService.getProducts()

        if(products.length === 0) return response.status(404).json({status: 404, message: 'Productos no encontrados'})

        return response.status(200).json({
            status: 200, 
            message: `Cantidad de productos:  ${products.length}`, 
            payload: products
        })
    } catch (error) {
        return response.status(500).json({
            status: 500,
            message: error.message
        })
    }
}
