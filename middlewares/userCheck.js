import bcrypt from 'bcrypt'
import configEnv from '../config/configEnv.js'
import authService from '../src/services/auth.service.js'
import { response } from 'express'
import userResponseDTO from '../src/DTOs/user.response.js'

const checkUser = async (require, response, next) => {
    const { username, password } = require.body

    try {
        if (require.session.user){
            return response.status(403).json({ message: 'ya has iniciado sesion', user: require.session.user })
        }

        const isAdminUsername = username === config.ADMIN_USERNAME
        const isAdminPassword = password === config.ADMIN_PASSWORD

        if (isAdminUsername && isAdminPassword){
            require.session.user = {_id: 1, username, role: 'admin'}
            next()
        } else {
            const user = await authService.getUsersByUsername(username)
            if (!user) {
                return response.status(401).json({ message: 'Usuario o contraseña incorrecta'})
            }

            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                return response.status(401).json({ message: 'usuario o contraseña incorrecta'})
            }

            require.session.user = userResponseDTO(user) 
            next()
        }
    } catch (error) {
        response.status(500).json({message: 'error en el servidor chechUser', error: error.message})
    }
}

export default checkUser;