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

// Animasi saat scroll
const elements = document.querySelectorAll('.fade-up');


function showOnScroll(){
const trigger = window.innerHeight * 0.85;
elements.forEach(el => {
const top = el.getBoundingClientRect().top;
if(top < trigger){ el.classList.add('show'); }
});
}


window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);

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

    let message = "Halo, saya tertarik Jasa Kelola Website.";
    let url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
}
