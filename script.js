const products = [
    { name: "Hardware", description: "Cool hard machines.", image: "cat3.jpeg", link: "hardware.html" },
    { name: "Ecological Efforts", description: "Cool old stuff", image: "eco.jpeg", link: "eco.html" },
    { name: "Games", description: "Software..?", image: "game.jpeg", link: "games.html" },
    { name: "Merch", description: "Why do they have merch>?", image: "merch.jpeg", link: "merch.html" }
];

const productList = document.getElementById('product-list');

products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';

    productDiv.addEventListener('click', () => {
        window.location.href = product.link; 
    });

    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.alt;

    const productName = document.createElement('h3');
    productName.textContent = product.name;

    const productDescription = document.createElement('p');
    productDescription.textContent = product.description;


    productDiv.appendChild(productImage);
    productDiv.appendChild(productName);
    productDiv.appendChild(productDescription);

    productList.appendChild(productDiv);
});
