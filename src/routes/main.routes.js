import { request, response, Router } from "express";

const router = Router()

router.get('/', (request, response) => {
    console.log('estoy en http://localhost:3000/users')
    response.send('Home')
}) 


export default router