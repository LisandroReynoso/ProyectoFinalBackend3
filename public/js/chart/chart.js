export function createChart (arr) {
    const products = arr.map(product => product.nombre)
    const stocks = arr.map(product => product.stock)
    console.log(products, stocks)
    const data = {
        labels: products,
        datasets: [{
          label: 'Stocks de los productos',
          data: stocks,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(255, 159, 64)',
            'rgb(255, 69, 96)',
            'rgb(100, 149, 237)',
            'rgb(34, 193, 195)',
            'rgb(253, 203, 110)',
            'rgb(237, 173, 8)',
            'rgb(75, 192, 192)',
            'rgb(153, 102, 255)'

          ],
          hoverOffset: 4
        }]
      };
    
      
    const config = {
        type: 'doughnut',
        data: data,
    };
    
    const ctx = document.getElementById('myChart').getContext('2d')
    new Chart(ctx, config)
}