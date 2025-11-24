// Animasi icon sosial media naik turun
const icons = document.querySelectorAll(".sosmed img");

icons.forEach((icon, index) => {
    icon.style.animation = `float 2s ease-in-out ${index * 0.2}s infinite`;
});

const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
    100% { transform: translateY(0); }
}`;
document.head.appendChild(style);


// Animasi hover navbar smooth scaling
const menuItems = document.querySelectorAll(".menu a");

menuItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        item.style.transform = "scale(1.1)";
    });

    item.addEventListener("mouseleave", () => {
        item.style.transform = "scale(1)";
    });
});


//Script untuk animasi booble tagline
const animated = document.querySelectorAll('.label-text, .info-card');
animated.forEach((el, i) => {
el.addEventListener('animationend', () => {
el.style.transition = 'transform 0.3s';
el.addEventListener('mouseenter', () => {
el.style.transform = 'scale(1.03)';
});
el.addEventListener('mouseleave', () => {
el.style.transform = 'scale(1)';
});
});
});

// Dropdown klik
document.querySelector(".dropbtn").addEventListener("click", function (e) {
    e.preventDefault();

    const dropdown = document.querySelector(".dropdown-content");
    dropdown.classList.toggle("show");
});

// Tutup dropdown jika klik di luar menu
document.addEventListener("click", function (e) {
    const dropdown = document.querySelector(".dropdown-content");
    const btn = document.querySelector(".dropbtn");

    if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove("show");
    }
});

//Efek Animasi Tagline
document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll('.fade-up');

    fadeElements.forEach(el => {
        setTimeout(() => {
            el.classList.add("show");
        }, 200);
    });
});

// Konek To Whatsapp
function openWhatsApp() {
    let phoneNumber = "6282363254643";

    let message = "Halo, saya tertarik Jasa Upload Produk.";
    let url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
}
