
import userService from "../services/users.service.js";

export const getUsersController = async (request, response) => {
    try {
        const users = await userService.getUsers()

        if (users.length === 0) {
            return response.status(400).json( { status: 400, message: "Usuarios no encontrados"})
        }

        response.status(200).json({
            status: 200,
            message: `Cantidad de usuarios ${users.length}`,
            payload: users
        })
    } catch (error) {
        return response.status(500).json({
            status: 500,
            message: error.message
        })
    }
}

export const createUserController = async (request, response) => {
    try {
        const user = await userService.createUser(request.body)

        return response.status(201).json({
            status: 201,
            message: `Usuario creado`,
            payload: user
        })
    } catch (error) {
        return response.status(500).json({
            status: 500,
            message: error.message
        })
    }
}

export const getUserByIdController = async (request, response) => {
    try {
        const user = await userService.getUsersById(request.params.id)

        if (!user) {
            return response.status(404).json({ status: 404, message: "Usuario no encontrado"})
        }

        response.status(200).json({
            status: 200,
            message: `usuario encontrado`,
            payload: user
        })
    } catch (error) {
        return response.status(500).json({
            status: 500,
            message: error.message
        })
    }
}

export const deleteUserController = async (request, response) => {
    try {
        const deleteUser = await userService.deleteUser(request.params.id)

        if (!deleteUser) {
            return response.status(404).json({ status: 404, message: "Usuario no encontrado"})
        }

        response.status(200).json({
            status: 200,
            message: `Usuario eliminado`,
            payload: deleteUser
        })
    } catch (error) {
        return response.status(500).json({
            status: 500,
            message: error.message
        })  
    }
}

export const updateUserController = async (request, response) => {
    try {
        const updateUser = await userService.updateUser(request.params.id, request.body)

        if(!updateUser) {
            return response.status(404).json({ status: 404 , message: "Usuario no encontrado"})
        }

        response.status(200).json({
            status: 200,
            message: `Usuario actualizado`,
            payload: updateUser
        })
    } catch (error) {
        return response.status(500).json({
            status: 500,
            message: error.message
        })
    }
}