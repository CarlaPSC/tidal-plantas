// User Menu Items
const userMenu = [
    {
        name: 'Ubicación de entrega',
        info: 'Calle la Concordia 177, Bellavista, Callao',
        url: '/perfil/direccion'
    },
    {
        name: 'Cambiar nombre',
        info: 'Carla Susano',
        url: '#'
    },
    {
        name: 'Cambiar Correo',
        info: 'SusanoPSC@hotmail.com',
        url: '#'
    }
];

const menu = document.querySelector('#user-menu');
menu.innerHTML = userMenu.map(function (item) {
	return (`
        <li>
            <a href="${item.url}">
                <span class="item-title">${item.name}</span>
                <span class="item-subtitle">${item.info}</span>
            </a>
        </li>
    `);
}).join('');
