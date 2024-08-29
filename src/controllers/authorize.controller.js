
import userService from "../services/users.service.js";
import userResponseDTO from "../DTOs/user.response.js";
import { generateToken } from "../../utils/jwtUtils.js";


    export const register = async (request, response) => {
        try {
            const newUser = await userService.createUser(request.body)
            const userDTO = userResponseDTO(newUser)
            response.status(201).json({message: 'registro exitoso', user: userDTO})
        } catch (error) {
            response.status(500).json({ message: 'Error en el servidor', error: error.message})
        }
    }

    export const login = async (request, response) => {
        try {
            const token = generateToken({_id: request.session.user._id, role: request.session.user.role})
            response.cookie('token', token, {httpOnly: true})
            response.json({message: 'inicio de sesion exitoso'})
        } catch (error) {
            response.status(500).json({ message: 'Error en el servidor', error: error.message})
        }
    }

    export const logout = async (request, response) => {
        try {
            try {
                if (!request.session.user) return response.status(401).json({ message: 'Usuario no logueado'})
                request.session.destroy(err => {
                    if (err) {
                        return response.status(500).json({ message: 'Error al cerrar session '})
                    }
            })
            response.clearCookie('token')
            response.status(200).json({ message: 'Cierre de sesion exitoso'})

            } catch (error) {
                response.status(500).json({ message: 'Error en el servidor', error: error.message})
            }
        } catch (error) {
            response.status(500).json({ message: 'Error en el servidor', error: error.message})
        }
    }
