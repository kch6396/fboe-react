const toggleBtn = document.querySelector(".nav__button");
const menu = document.querySelector(".nav");
toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const sol = document.querySelector(".solution");
const twosol = document.querySelector(".solutions");
const twosol2 = document.querySelector(".nav");
sol.addEventListener("click", () => {
  twosol.classList.toggle("active");
  twosol2.classList.toggle("active2");
});

const mapbtn = document.querySelector(".map__btn");
const mapview = document.querySelector(".map");
mapbtn.addEventListener("click", () => {
  mapbtn.classList.toggle("change");
  mapview.classList.toggle("active");
});
