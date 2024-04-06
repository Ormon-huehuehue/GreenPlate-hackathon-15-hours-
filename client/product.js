// Fetch data from the backend endpoint
fetch('http://localhost:8080/user/listProducts')
    .then(response => response.json())
    .then(products => {
        // Get the template and the container where cards will be added
        const template = document.getElementById('product-card-template');
        const container = document.querySelector('.row-cols-1.row-cols-sm-2.row-cols-md-3.g-3');

        // Loop through the fetched products and create a card for each product
        products.forEach(product => {
            // Clone the template content
            const card = template.content.cloneNode(true);

            // Populate the card content with product data
            card.querySelector('.card-title').textContent = product.title;
            card.querySelector('.card-text').textContent = product.description;
            card.querySelector('.text-body-secondary').textContent = `$${product.price.toFixed(2)}`; // Assuming price is a number

            // Append the card to the container
            container.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching products:', error));


   
