const limitedPlants = [
    {
        name: 'Suspendisse eget condimentum risus',
        price: 'S/ 14.50',
        img: '/assets/img/product-5.jpg',
        url: '#'
    },
    {
        name: 'Aenean rutrum mollis nulla nec',
        price: 'S/ 14.50',
        img: '/assets/img/product-6.jpg',
        url: '#'

    },
    {
        name: 'Etiam a dictum magna, et',
        price: 'S/ 14.50',
        img: '/assets/img/product-7.jpg',
        url: '#'
    },
    {
        name: 'Nunc fringilla neque vel lobortis',
        price: 'S/ 14.50',
        img: '/assets/img/product-8.jpg',
        url: '#'
    }
]

const limited = document.querySelector('#list-limited-plants');
limited.innerHTML = limitedPlants.map(function (item) {
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