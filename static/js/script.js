document.querySelectorAll('.order-btn').forEach((button, index) => {
    button.addEventListener('click', () => {
        const itemName = document.querySelectorAll('.menu-item h3')[index].innerText;
        
        const data = {
            items: [
                { name: itemName, price: index === 0 ? 100 : 250 } // Example prices for Coffee and Pizza
            ]
        };

        fetch('/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message + ' Total: ₹' + data.total_price);
        })
        .catch(error => console.error('Error:', error));
    });
});
