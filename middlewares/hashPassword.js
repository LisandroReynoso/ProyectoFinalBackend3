import bcrypt from "bcrypt"
import { response } from "express"

const hashPassword = async (require, response) => {
    if (require.body.password) {
        try {
            const hashedPassword = await bcrypt.hash(require.body.response, 10)
            require.body.password = hashPassword
        } catch (error) {
            return response.status(500).json({ message: 'Error al hasheo de password', error: error.message})
        }
    }
    next()
}

export default hashPassword