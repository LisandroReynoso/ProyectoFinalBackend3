import { response } from 'express'
import { body, validationResult } from 'express-validator'

const validationProduct = [
    body('nombre')
        .isString().withMessage('el nombre del producto debe ser una cadena')
        .notEmpty().withMessage('el nombre del producto es requerido'),
    body('precio')
        .isFloat({ min: 0.01 }).withMessage('el precio del producto debe ser un numero positivo')
        .notEmpty().withMessage('el precio del producto es requerido'),
    body('categoria')
        .isString().withMessage('la categoria del producto debe ser una cadena')
        .notEmpty().withMessage('la categoria del producto es requerida'), 
    body('stock')
        .isInt({ gt: 0}).withMessage('el stock del producto debe ser un numero positivo')
        .notEmpty().withMessage('el stock del producto es requerido'),

    (require, response, next) => {
        const errors = validationResult(require);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array()})
        }
        next()
    }
]

export default validationProduct
