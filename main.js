// Burger Menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
let open = false;

menuBtn.addEventListener("click", () => {
    open = !open;

    if (open) {
        mobileMenu.classList.add("active");
        menuBtn.textContent = "\u2716";
        menuBtn.style.transform = "rotate(90deg)";
    } else {
        mobileMenu.classList.remove("active");
        menuBtn.textContent = "\u2630";
        menuBtn.style.transform = "rotate(0deg)";
    }
});

