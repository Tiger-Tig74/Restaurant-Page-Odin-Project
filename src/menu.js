export default function loadMenu() {
    const content = document.getElementById('content');

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-page');

    const heading = document.createElement('h2');
    heading.textContent = 'Our Menu';

    const menuItems = [
        {
            category: 'Antipasti',
            items: [
                { name: 'Bruschetta al Pomodoro', price: '$9', desc: 'Toasted bread, fresh tomatoes, basil, garlic' },
                { name: 'Burrata con Prosciutto', price: '$14', desc: 'Creamy burrata, prosciutto di Parma, arugula' },
                { name: 'Calamari Fritti', price: '$12', desc: 'Crispy squid, lemon aioli' },
            ],
        },
        {
            category: 'Primi Piatti',
            items: [
                { name: 'Tagliatelle al Ragù', price: '$19', desc: 'House-made pasta, slow-braised beef ragù' },
                { name: 'Risotto ai Funghi', price: '$17', desc: 'Arborio rice, wild mushrooms, parmesan' },
                { name: 'Cacio e Pepe', price: '$16', desc: 'Spaghetti, pecorino romano, black pepper' },
            ],
        },
        {
            category: 'Secondi',
            items: [
                { name: 'Branzino al Forno', price: '$26', desc: 'Roasted sea bass, lemon, herbs, olive oil' },
                { name: 'Osso Buco', price: '$29', desc: 'Braised veal shank, gremolata, saffron risotto' },
                { name: 'Pollo alla Parmigiana', price: '$22', desc: 'Breaded chicken, tomato, mozzarella, basil' },
            ],
        },
        {
            category: 'Dolci',
            items: [
                { name: 'Tiramisù', price: '$8', desc: 'Espresso-soaked ladyfingers, mascarpone' },
                { name: 'Panna Cotta', price: '$7', desc: 'Vanilla cream, berry compote' },
                { name: 'Cannoli', price: '$6', desc: 'Sicilian pastry, ricotta, pistachio' },
            ],
        },
    ];

    menuItems.forEach((section) => {
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('menu-section');

        const catHeading = document.createElement('h3');
        catHeading.textContent = section.category;
        sectionDiv.appendChild(catHeading);

        section.items.forEach((item) => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('menu-item');

            const headerDiv = document.createElement('div');
            headerDiv.classList.add('menu-item-header');

            const nameSpan = document.createElement('span');
            nameSpan.classList.add('menu-item-name');
            nameSpan.textContent = item.name;

            const priceSpan = document.createElement('span');
            priceSpan.classList.add('menu-item-price');
            priceSpan.textContent = item.price;

            headerDiv.append(nameSpan, priceSpan);

            const descP = document.createElement('p');
            descP.classList.add('menu-item-desc');
            descP.textContent = item.desc;

            itemDiv.append(headerDiv, descP);
            sectionDiv.appendChild(itemDiv);
        });

        menuDiv.appendChild(sectionDiv);
    });

    menuDiv.prepend(heading);
    content.appendChild(menuDiv);
}