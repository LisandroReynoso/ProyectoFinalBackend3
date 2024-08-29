import { response } from "express";

const logRoute = (require, response, next) => {
    console.log(require.method)
    console.log(require.url)    
    
    next()
}

export default logRoute