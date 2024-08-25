import { response } from "express"

export async function getProducts() {
    const data = await fetch('http://localhost:3000/api/products')
    const response = await response.json()
    console.log(data)
} 