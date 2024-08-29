import { body, validationResult } from "express-validator";
import authService from "../src/services/auth.service.js";
import { response } from "express";

const validateUser = [
    body('username')
        .isLength({ min: 6}).withMessage('el nombre de usuario es demasiado corto, debe tener almenos 6 caracteres')
        .custom(async(value) => {
            const user = await authService.getUsersByUsername(value)
            if (user) {
                throw new Error('el nombre ya esta en uso')
            }
            return true;
        }),
    body('email')
        .isEmail().withMessage('Formato de correo electronico no valido')
        .custom(async (value) => {
            const user = await authService.getUsersByEmail(value)
            if (user) {
                throw new Error('El correo electronico ya esta en uso')
            }
            return true
        }),
    body('password')    
        .isLength({ min: 6 }).withMessage('la contraseña debe tener almenos 6 caracteres'),
    body('repeatPassword')
        .custom((value, { require }) => {
            if (require.body.password !== value){
                throw new Error('las contraseñas no coinciden')
            }
            return true
        }),
    (require, response, next) => {
        const errors = validationResult(require)
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() }) 
        }

        const allowedFields = ['username', 'email', 'password', 'repeatPassword']
        require.body = Object.keys(require.body)
                .filter(key => allowedFields.includes(key))
                .reduce((obj, key) => {
                    obj[key] = require.body[key]
                    return obj
                }, {})
            next();
    }      
];

export default validateUser