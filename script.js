const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Data Dummy Mobil (Array of Objects)
const carsData = [
    {
        name: "Toyota Avanza",
        type: "MPV - 5 Penumpang",
        price: "Rp 350.000 / hari",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVcvGFvLthBnWVCGZAL4mMkggFqI-XSa5ylz2NWZSUHJQKvJwvo1Hg_hU&s=10"
    },
    {
        name: "Honda Civic",
        type: "Sedan - 5 Penumpang",
        price: "Rp 750.000 / hari",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkl9Ttn9KVjpIYDqivonChvj1R14K3tuER8TiB184T4A&s=10"
    },
    {
        name: "Mitsubishi XForce",
        type: "SUV - 5 Penumpang",
        price: "Rp 1.000.000 / hari",
        img: "https://www.dipostar.com/storage/news/vn0X3DTCBmOk0OI95765eUTlsyHfydvaZK2AVHjm.png"
    }
];

const carContainer = document.getElementById('car-list');

// Manipulasi DOM: Render Data ke HTML
carsData.forEach(car => {
    // Buat elemen div untuk card mobil
    const carCard = document.createElement('div');
    carCard.classList.add('car-card');

    carCard.innerHTML = `
        <img src="${car.img}" alt="${car.name}">
        <div class="car-info">
            <h3>${car.name}</h3>
            <p><i class="fas fa-users" style="margin-right:5px; color:#6b7280;"></i> ${car.type}</p>
            <p class="price">${car.price}</p>
            <button class="btn-sewa" onclick="alert('Anda memilih ${car.name}')">
                Sewa Sekarang
            </button>
        </div>
    `;

    carContainer.appendChild(carCard);
});