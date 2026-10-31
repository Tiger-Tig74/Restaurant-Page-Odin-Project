export default function loadContact() {
    const content = document.getElementById('content');

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact-page');

    const heading = document.createElement('h2');
    heading.textContent = 'Contact Us';

    const address = document.createElement('div');
    address.classList.add('contact-block');
    address.innerHTML = `
    <h3>Visit Us</h3>
    <p>123 Vicolo del Corso<br>Downtown, Metro City 10001</p>
    `;

    const phone = document.createElement('div');
    phone.classList.add('contact-block');
    phone.innerHTML = `
    <h3>Call Us</h3>
    <p>(555) 123-4567</p>
    `;

    const email = document.createElement('div');
    email.classList.add('contact-block');
    email.innerHTML = `
    <h3>Email Us</h3>
    <p>hello@labellacucina.example</p>
    `;

    const form = document.createElement('form');
    form.classList.add('contact-form');
    form.innerHTML = `
    <h3>Send a Message</h3>
    <label>Name<input type="text" name="name" required></label>
    <label>Email<input type="email" name="email" required></label>
    <label>Message<textarea name="message" rows="4" required></textarea></label>
    <button type="submit">Send</button>
    `;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thanks for your message! We will get back to you soon.');
        form.reset();
    });

    contactDiv.append(heading, address, phone, email, form);
    content.appendChild(contactDiv);
}