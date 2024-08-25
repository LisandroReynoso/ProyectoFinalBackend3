import { getProducts } from "./api.js";

async function main() {
    const result = await getProducts()
}

main()