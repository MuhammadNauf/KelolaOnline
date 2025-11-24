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

//Script untuk animasi tentang kami
const textBox = document.querySelector('.text-box');
const logo = document.querySelector('.logo-box img');


textBox.addEventListener('mouseenter', () => {
textBox.style.transform = 'scale(1.02)';
textBox.style.transition = '0.3s';
});


textBox.addEventListener('mouseleave', () => {
textBox.style.transform = 'scale(1)';
});


logo.addEventListener('mouseenter', () => {
logo.style.transform = 'scale(1.05)';
logo.style.transition = '0.3s';
});


logo.addEventListener('mouseleave', () => {
logo.style.transform = 'scale(1)';
});

//IMAGE SLIDE
let index = 0;
const slides = document.getElementById('slides');
const dots = document.querySelectorAll('.dots span');
const total = dots.length;


function updateSlider() {
slides.style.transform = `translateX(-${index * 100}%)`;
dots.forEach(dot => dot.classList.remove('active'));
dots[index].classList.add('active');
}


document.getElementById('next').onclick = () => {
index = (index + 1) % total;
updateSlider();
};


document.getElementById('prev').onclick = () => {
index = (index - 1 + total) % total;
updateSlider();
};


dots.forEach(dot => {
dot.onclick = () => {
index = parseInt(dot.getAttribute('data-index'));
updateSlider();
};
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


// Konek To Whatsapp
function openWhatsApp() {
    let phoneNumber = "6282363254643";

    let message = "Halo, saya tertarik dengan layanan Anda.";
    let url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
}