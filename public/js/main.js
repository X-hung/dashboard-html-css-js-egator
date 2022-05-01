const side_menu = document.querySelector("aside");
const menu_btn = document.querySelector("#btn-menu");
const close_btn = document.querySelector("#close-btn");
const theme_toggler = document.querySelector(".theme-toggler");

menu_btn.addEventListener('click', () => {
    side_menu.style.display = 'block';
});

close_btn.addEventListener('click', () => {
    side_menu.style.display = 'none';
});

theme_toggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    // theme_toggler.querySelector('span').classList.toggle('active');
    theme_toggler.querySelector('span:first-child').classList.toggle('active');
    theme_toggler.querySelector('span:last-child').classList.toggle('active');
});

// Load orders data, can be directly referred.
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const td = `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'Pending' ? 'warning' : 'primary'}">${order.shipping}</td>
    <td class="primary">Details</td>
    `;
    tr.innerHTML = td;
    document.querySelector('table tbody').appendChild(tr);
});