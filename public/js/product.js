export function productosHandle (data) {
    const productsLength = document.querySelector('.products')
    productsLength.textContent = `Cantidad de productos: ${data.length}`
}

export function createProduct() {
    const form = document.querySelector('form')
    form.addEventListener('submit', function (event){
        event.preventDefault()
        const data = Object.fromEntries(new FormData(event.target) )
        fetch('http://localhost:3000/api/products', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
    })
}