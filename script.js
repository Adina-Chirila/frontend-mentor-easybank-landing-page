const burgerMenu = document.querySelector(".burger");
const navList = document.querySelector(".navbar-list");
const backdrop = document.querySelector(".backdrop");
const closeBtn = document.querySelector(".close-btn");

const handleNavbarVisibility = () => {
	navList.classList.toggle("visible");
	backdrop.classList.toggle("visible");
	burgerMenu.classList.toggle("hidden");
	closeBtn.classList.toggle("visible");
};

const closeNavbar = () => {
	handleNavbarVisibility();
};

burgerMenu.addEventListener("click", handleNavbarVisibility);
closeBtn.addEventListener("click", closeNavbar);
backdrop.addEventListener("click", closeNavbar);
