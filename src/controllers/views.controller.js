import { response } from "express";
import { request } from "express";


export const dashboard = async (require, response) => {
    
    response.render('dashboard',)
}

export const home = (request, response) => {
    const variables = {
        title: 'pagina principal'
    }
    response.render('home', variables)
}