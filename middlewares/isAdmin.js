import { response } from "express";

const isAdmin = (require, response, next) => {
    if (require.session.user && require.session.user.role === 'admin') {
        next()
    } else {
        response.status(403).json({ message: 'Acceso denegado: No eres administrador'})
    }

}

export  default isAdmin