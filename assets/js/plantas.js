const todasPlantas = [
    {
        name: 'Maecenas cursus orci eu egestas',
        price: 'S/ 14.50',
        img: '/assets/img/product-1.jpg',
        url: '/plantas/producto'
    },
    {
        name: 'Nunc eu gravida ante, sit',
        price: 'S/ 14.50',
        img: '/assets/img/product-2.jpg',
        url: '#'

    },
    {
        name: 'Mauris vel libero est. Praesent',
        price: 'S/ 14.50',
        img: '/assets/img/product-3.jpg',
        url: '#'
    },
    {
        name: 'Cras fermentum at augue ut',
        price: 'S/ 14.50',
        img: '/assets/img/product-4.jpg',
        url: '#'
    }
]

const plants = document.querySelector('#list-plants');
plants.innerHTML = todasPlantas.map(function (item) {
	return (`
        <a href="${item.url}">
            <div class="product-item">
                <img src="${item.img}" alt="${item.name}">
                <h4>${item.name}</h4>
                <span>${item.price}</span>    
            </div>
        </a>
    `);
}).join('');