import { request } from "express";
import { response } from "express";
import { data } from "../../data/data.js";
import { crearHash } from "../../config/password.config.js";
import { verifyPassword } from "../../config/password.config.js";

export const getAllUsers = (request, response) => {
    console.log(data)
    try {
        if(data.length > 0) {
            
            const payload = {
                users: data,
                status: 200,
                message: 'Usuarios',
                registers: data.length,
                url: request.originalUrl 
            }
            return response.json(payload)
            
        }
        return response.status(404).send('No hay usuarios')
        
    } catch (error) {
        return response.status(500).send('Error en el servidor')
    }
}

export  const userGetById = (request, response) => {

}

export const createUser = (request, response) => {
    try {
        const { body } = request

        const user = data.find(user => user.username === body.username)
        if(!user){
            body.password = crearHash(body.password)
            data.push(body)
            console.log(body)
            //delete body.password
            //delete body.email
            const result = {
                status: 201,
                message: 'usuario creado correctamente',
                user: body

            }
            return response.status(201).send(result)
        }
        return response.status(400).send('Usuario no creado, ya existente')

    } catch (error) {
        return response.status(500).send('error en el servidor')
    }
}

export const login = (request, response) => {
    const { body } = request
    
    try {
        const user = data.find(user => user.username === body.username)
        if(user){
            const verify = verifyPassword(body.password, user.password) 
            if (verify){
                return response.json({success: 'Logueo Exitoso'})
            }
            else  {
                return response.json({success: 'Contraseña Incorrecta'})
            }
        }
            
        return response.status(404).send('Contraseña o Usuarios Incorrectos, Revisar datos nuevamente')
        } 
        
        
    catch (error) {
         return response.status(500).send('Error en el servidor') 
    }
    
}