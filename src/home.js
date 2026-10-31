export default function loadHome() {
    const content = document.getElementById('content');

    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home-page');

    const heroImg = document.createElement('img');
    heroImg.src = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200';
    heroImg.alt = 'Restaurant interior';
    heroImg.classList.add('hero-image');

    const headline = document.createElement('h2');
    headline.textContent = 'Welcome to La Bella Cucina';

    const tagline = document.createElement('p');
    tagline.classList.add('tagline');
    tagline.textContent = 'Authentic Italian cuisine made with love since 1987.';

    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent =
        'Nestled in the heart of the city, La Bella Cucina brings the warmth of ' +
        'Italian hospitality to your table. Our chefs use only the freshest seasonal ' +
        'ingredients to craft dishes that celebrate tradition while embracing innovation. ' +
        'Whether it is a romantic dinner for two or a celebration with friends, ' +
        'we promise an unforgettable evening.';

    const hoursHeading = document.createElement('h3');
    hoursHeading.textContent = 'Hours';

    const hoursList = document.createElement('ul');
    hoursList.classList.add('hours-list');
    const hours = [
        'Monday – Thursday: 5:00 PM – 10:00 PM',
        'Friday – Saturday: 5:00 PM – 11:00 PM',
        'Sunday: 4:00 PM – 9:00 PM',
    ];
    hours.forEach((h) => {
        const li = document.createElement('li');
        li.textContent = h;
        hoursList.appendChild(li);
    });

    homeDiv.append(heroImg, headline, tagline, description, hoursHeading, hoursList);
    content.appendChild(homeDiv);
}