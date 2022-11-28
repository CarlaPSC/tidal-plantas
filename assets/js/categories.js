// Categorias
const categories = [
    {
        name: 'Plantas',
        img: '../assets/img/categoria-plantas2.png',
        url: '/plantas'
    },
    {
        name: 'Macetas',
        img: '../assets/img/categoria-macetas2.png',
        url: '#'
    },
    {
        name: 'Ramos',
        img: '../assets/img/categoria-ramos2.png',
        url: '#'
    },
    {
        name: 'Complementos',
        img: '../assets/img/categoria-complementos2.png',
        url: '#'
    }
];

const category = document.querySelector('#categories');
category.innerHTML = categories.map(function (item) {
	return (`
        <a href="${item.url}" class="category-url">
            <div class="category-item" style="background: url('${item.img}')">
                <h4>${item.name}</h4>
            </div>
        </a>
    `);
}).join('');