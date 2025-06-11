const burger = document.getElementById("burgermenu");
const mobileMenu = document.getElementById("mobileMenu");

burger.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !burger.contains(e.target)) {
        mobileMenu.classList.remove("active");
    }
});
const loginButton = document.querySelectorAll('.button_items')[2]; 
const modal = document.getElementById("loginModal");
const closeModal = document.querySelector(".close");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
const mobileLoginButton = document.querySelector(".mobile-login");

mobileLoginButton.addEventListener("click", (e) => {
  e.preventDefault(); 
  modal.style.display = "block";
  mobileMenu.classList.remove("active");
});
const registerModal = document.getElementById("registerModal");
const openRegisterLink = document.getElementById("openRegister");
const closeRegister = document.querySelector(".close-register");

openRegisterLink.addEventListener("click", (e) => {
  e.preventDefault();
  loginModal.style.display = "none";
  registerModal.style.display = "block";
});

closeRegister.addEventListener("click", () => {
  registerModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === registerModal) {
    registerModal.style.display = "none";
  }
});


const defaultBrands = [
  "KIA", "Mercedes-Benz", "BMW", "Audi", "Toyota", "Ford", "Mitsubishi", 
  "Volkswagen", "Mazda", "Nissan", "Opel", "Volvo", "Tesla", "Jeep", "Land Rover",
  "Honda", "Hyundai", "Subaru", "Chevrolet", "Dodge", "Lexus"
];

if (!localStorage.getItem("carBrands")) {
  localStorage.setItem("carBrands", JSON.stringify(defaultBrands));
}

const imgIcon = document.querySelector('.imgicon');
const modalOverlay = document.getElementById('modalOverlay');
const brandsList = document.getElementById('brandsList');
const closeModalBtn = document.getElementById('closeModal');

imgIcon.addEventListener('click', () => {
  const brands = JSON.parse(localStorage.getItem('carBrands')) || [];

  brandsList.innerHTML = '';
  brands.forEach(brand => {
    const li = document.createElement('li');
    li.textContent = brand;
    brandsList.appendChild(li);
  });

  modalOverlay.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
  modalOverlay.style.display = 'none';
});

modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) {
    modalOverlay.style.display = 'none';
  }
});
